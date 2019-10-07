#!/usr/bin/python
from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
import datetime
import json
import urllib.request
import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "GiveMeCon.settings")
django.setup()

from video.models import Video
from channel.models import Channel
from category.models import Category
# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.
DEVELOPER_KEY = "AIzaSyBAEqG4C5JcGU8LW3WiQW19QbKWwHbpLOE"
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

current = datetime.date.today()
get_time = current - datetime.timedelta(days=7)
before_day = get_time.strftime("%Y-%m-%d")

remainder_time = "T00:00:00Z"
insert_day = before_day + remainder_time
print(insert_day)

def Channel_list():
    url = f"https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key={DEVELOPER_KEY}"

    json_url = urllib.request.urlopen(url)
    data = json.loads(json_url.read())

    channel_id = data["items"][0]["snippet"]["channelId"]
    channel_title = data["items"][0]["snippet"]["channelTitle"]


    channel, created = Channel.objects.get_or_create(
        channel_id=channel_id,
    )

    if created:
        channel.name = channel_title
        #channel.category = category
        channel.save()

    Channel.objects.create(
        title=data["items"][0]["snippet"]["title"],
        subscriber=data["items"][0]["statistics"]["subscriberCount"],
    )
    
    print("제목:" + data["items"][0]["snippet"]["title"])
    print("구독자수:" + data["items"][0]["statistics"]["subscriberCount"] + "\n\n")


def youtube_search(options):
    youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
    developerKey=DEVELOPER_KEY)

  # Call the search.list method to retrieve results matching the specified
  # query term.
    search_response = youtube.search().list(
        q=options.q,
        part="id,snippet",
        maxResults=options.max_results
    ).execute()

    channels = []


  # Add each result to the appropriate list, and then display the lists of
  # matching videos, channels, and playlists.
    for search_result in search_response.get("items", []):
        if search_result["id"]["kind"] == "youtube#channel":
            channels.append("%s (%s)" % (search_result["snippet"]["title"],
            search_result["id"]["channelId"]))

    print ("Channels:\n", "\n".join(channels), "\n")

if __name__ == "__main__":
    argparser.add_argument("--q", help="Search term", default="소풍왔니")
    argparser.add_argument("--max-results", help="Max results", default=25)
    args = argparser.parse_args()

    try:
        youtube_search(args)
    except HttpError as e:
        print("An HTTP error %d occurred:\n%s") % (e.resp.status, e.content)