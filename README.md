<h1 align="center">Welcome to GIVE ME CON 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> 기브미콘은 유튜브 API를 크롤링을 통해 컨텐츠 추천 및 기획을 도 웹 애플리케이션입니다.

## 결과물

![result](https://github.com/zhsks528/GiveMeCon/blob/master/resources/result.png)

## 설치 및 실행방법

### Backend
DB를 생성 및 적용하고 서버를 실행하는 방법입니다.
```sh
pip install -r requirement.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

### Frontend
필요한 패키지를 다운받는 방법입니다.
```sh
cd frontend/
npm install
```

## Import Youtube Dataset
Crawler를 통해 Youtube API에서 Metadata를 가져오는 방법입니다.
```sh
python make_category.py
python crawler.py
```

## Usage
프로젝트를 실행하는 방법입니다.
```sh
npm run start
```

## Run tests
프로젝트를 테스트 하는 방법입니다.
```sh
npm run test
```

## 기술스택

![tech](https://github.com/zhsks528/GiveMeCon/blob/master/resources/tech.png)

## 팀원

👤 **Seong-Min Han**

- Github: [@zhsks528](https://github.com/zhsks528)

👤 **Ji-Hae Yoon**

- Github: [@ji-hae](https://github.com/YOONJIHAE)

👤 **Mi-na Yu**

- Github: [@Yumina9](https://github.com/Yumina9)

👤 **Moo-Jae Park**

- Github: [@Parkmoojae](https://github.com/Parkmoojae)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
