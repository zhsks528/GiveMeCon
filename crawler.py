#!/usr/bin/python
from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
from urllib.request import Request, urlopen
import datetime
import json
import urllib.request
import os, django
import requests

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "GiveMeCon.settings")
django.setup()

from video.models import Video
from channel.models import Channel
from category.models import Category

# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
#DEVELOPER_KEY = "AIzaSyBAEqG4C5JcGU8LW3WiQW19QbKWwHbpLOE"
DEVELOPER_KEY = "AIzaSyDWz2h2y3h0kuE0c_Mnb3HFxFLC230BYQ4"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"
#keyword = input("키워드 입력 : ")

current = datetime.date.today()
get_time = current - datetime.timedelta(days=7)
before_day = get_time.strftime("%Y-%m-%d")

remainder_time = "T00:00:00Z"
insert_day = before_day + remainder_time
print(insert_day)


def Video_info(video_id):
    url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,topicDetails,statistics&id={video_id}&key={DEVELOPER_KEY}"
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    json_url = urllib.request.urlopen(req)
    video_data = json.loads(json_url.read())
    # data=json.dumps(read_data, indent=4 ,sort_keys=True)
    
    channel_id = video_data["items"][0]["snippet"]["channelId"]
    channel_title = video_data["items"][0]["snippet"]["channelTitle"]
    category_id = video_data["items"][0]["snippet"]["categoryId"]

    channel_url = f"https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channel_id + "&key=" + DEVELOPER_KEY
    json_url = urllib.request.urlopen(channel_url).read()
    channel_data = json.loads(json_url)

    try:
        subscribeCount = channel_data["items"][0]["statistics"]["subscriberCount"]
    except IndexError:
        subscribeCount = 0
    
    print("채널 구독자수: ", subscribeCount)

    # # 채널을 만든다.
    category = Category.objects.get(category_id=category_id)

    channel, created = Channel.objects.get_or_create(
        channel_id=channel_id,
    )

    # # 채널을 만들었으면 이름을 적어넣는다.
    if created:
        channel.name = channel_title
        channel.category = category
        channel.subscribers = subscribeCount
        channel.save()

    try:
        topicDetails=video_data["items"][0]["topicDetails"]["relevantTopicIds"][0]
    except KeyError:
        topicDetails = ""

    # # 비디오를 생성한다.
    Video.objects.create(
        topic=topicDetails,
        title=video_data["items"][0]["snippet"]["title"],
        view=video_data["items"][0]["statistics"]["viewCount"],
        thumbnail=video_data["items"][0]["snippet"]["thumbnails"]["default"]["url"],
        channel=channel,
        video_num=video_data["items"][0]["id"]
    )



    print("제목:" + video_data["items"][0]["snippet"]["title"])
    print("썸네일: " + video_data["items"][0]["snippet"]["thumbnails"]["default"]["url"])
    print("조회수:" + video_data["items"][0]["statistics"]["viewCount"] + "\n\n")
    print("\n상세내용:\n"+video_data["items"][0]["snippet"]["description"])


def youtube_search(options):
    youtube = build(
        YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION, developerKey=DEVELOPER_KEY
    )

    category = Category.objects.all()
    # Call the search.list method to retrieve results matching the specified
    # query term.
    for keyword in category: 
        print(keyword)

        search_response = (
            youtube.search()
            .list(
                q=keyword,
                part="id,snippet",
                maxResults=options.max_results,
                publishedAfter=insert_day,
                order="viewCount",
            )
            .execute()
        )

        videos = []

        # Add each result to the appropriate list, and then display the lists of
        # matching videos, channels, and playlists.
        for search_result in search_response.get("items", []):
            if search_result["id"]["kind"] == "youtube#video":
                videos.append("%s" % (search_result["id"]["videoId"]))

        for value in range(len(videos)):
            Video_info(videos[value])


if __name__ == "__main__":
    #argparser.add_argument("--q", help="Search term", default=keyword)
    argparser.add_argument("--max-results", help="Max results", default=50)
    argparser.add_argument("--order", help="order", default="viewCount")
    argparser.add_argument(
        "--publishedAfter", help="publishedAfter", default=insert_day
    )
    args = argparser.parse_args()

    try:
        youtube_search(args)
    except HttpError as e:
        print("An HTTP error {0} occurred:\n{1}".format(e.resp.status, e.content))

