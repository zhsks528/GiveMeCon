import os, django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "GiveMeCon.settings")
django.setup()

from video.models import Video
from category.models import Category

categroy_mapping_table = {
    '1 ' : 'Film & Animation',
    '2 ' : 'Autos & Vehicles',
    '10' : 'Music',
    '15' : 'Pets & Animals',
    '17' : 'Sports',
    '18' : 'Short Movies',
    '19' : 'Travel & Events',
    '20' : 'Gaming',
    '21' : 'Videoblogging',
    '22' : 'People & Blogs',
    '23' : 'Comedy',
    '24' : 'Entertainment',
    '25' : 'News & Politics',
    '26' : 'Howto & Style',
    '27' : 'Education',
    '28' : 'Science & Technology',
    '29' : 'Nonprofits & Activism',
    '30' : 'Movies',
    '31' : 'Anime/Animation',
    '32' : 'Action/Adventure',
    '33' : 'Classics',
    '34' : 'Comedy',
    '35' : 'Documentary',
    '36' : 'Drama',
    '37' : 'Family',
    '38' : 'Foreign',
    '39' : 'Horror',
    '40' : 'Sci-Fi/Fantasy',
    '41' : 'Thriller',
    '42' : 'Shorts',
    '43' : 'Shows',
    '44' : 'Trailers'
}

categroy_mapping_table_kor = {
    '1 ' : '영화 & 애니메이션',
    '2 ' : '자동차 & 오토바이',
    '10' : '음악',
    '15' : '애완동물 & 동물',
    '17' : '운동',
    '18' : '스포츠',
    '19' : '여행 & 이벤트',
    '20' : '게임',
    '21' : 'Videoblogging',
    '22' : 'People & Blogs',
    '23' : '코미디',
    '24' : '예능',
    '25' : '뉴스 & 시사',
    '26' : 'Howto & Style',
    '27' : '교육',
    '28' : 'Science & Technology',
    '29' : 'Nonprofits & Activism',
    '30' : '영화',
    '31' : 'Anime/Animation',
    '32' : 'Action/Adventure',
    '33' : 'Classics',
    '34' : 'Comedy',
    '35' : 'Documentary',
    '36' : 'Drama',
    '37' : 'Family',
    '38' : 'Foreign',
    '39' : 'Horror',
    '40' : 'Sci-Fi/Fantasy',
    '41' : 'Thriller',
    '42' : 'Shorts',
    '43' : 'Shows',
    '44' : 'Trailers'
}

for key, value in categroy_mapping_table.items():
    print(key, value)

    Category.objects.create(
        category_id=key,
        category_name=value
    )