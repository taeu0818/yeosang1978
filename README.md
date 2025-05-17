# 여상형설장학회

https://github.com/user-attachments/assets/d5c1fa70-3b4c-4e98-ac96-2b1a5e63e3b3

> [**yeosang1978.kr**](http://yeosang1978.kr) 에서 서비스 중  
> 교내 장학사 요청으로 제작한 장학회 공식 웹페이지입니다.
>
> <small>\* 보안이슈로 인해 [클론사이트](https://taeu0818.github.io/yeosang1978)로 Github 업로드</small>





---

## 📌 프로젝트 소개

교내 장학사 요청으로 제작한 웹사이트입니다.  
기획, 디자인, 프론트엔드, 백엔드, 서버 세팅, 배포, 유지보수까지 **1인 개발**로 진행했습니다.  
기간은 2024년 10월 부터 11월 약 **4주**, 보수는 **열정페이 + 50만 원 장학금(소매넣기)** 였습니다.

프로젝트 당시 상황이 꽤 전설적이었는데요 

- 기능대회 망치고 취업도 못한 상태
- 웹 관련 지식 없는 이사장님과의 협업
- 요구사항은 "여수장학회랑 비슷하게 만들어줘"
- 기획/디자인부터 실제 서비스 배포까지 혼자 전부 담당

결론적으로 학생은 좋은 노예라는 교훈을 얻었습니다.

---

## 🧩 프로젝트 구조 및 진행

### 1. 기획
- 기존 "여수장학회" 사이트를 참고
- 미팅 2번 후 바로 제작 돌입
- 별도 사이트맵이나 문서는 없고, 말로 들은 요구사항 정리해서 구현

### 2. 디자인
- 참고 사이트: [GDWEB](https://gdweb.co.kr)
- 웹 둘러보다가 맘에 드는 스타일 클론
- UI 구성은 **Tailwind CSS** 기반

> **디자인 철학**:  
> _눈이 높아야 좋은 디자인이 나온다._

### 3. 개발 스택

고민 끝에 다음 스택으로 결정:

- **Framework**: Laravel (Blade 기반 SSR)
- **Styling**: Tailwind CSS ([Vite 설정 가이드](https://tailwindcss.com/docs/installation/framework-guides/laravel/vite))
- **DB 관리**: phpMyAdmin

> ✅ 유지보수 고려 → 후배들이 쉽게 관리 가능한 Laravel 선택  
> ❌ 개인적으로는 Laravel 비추... 

### 4. 서버 및 배포

- **호스팅**: 카페24 
- **웹서버**: Apache  
- **DB**: MySQL  
- **배포**: FileZila (FTP) + PuTTY (Document Root 등 서버 설정)

### 5. 유지보수

- 유지보수 매뉴얼 문서화 및 동아리 Notion 공유

---

## ⚙️ 주요 기술 스택

| 분류        | 기술                     |
|-------------|--------------------------|
| Frontend    | Blade (Laravel Template) |
| Styling     | Tailwind CSS             |
| Library     | jquery, ckeditor(Web Editor)|
| Backend     | Laravel (PHP)            |
| Database    | MySQL                    |
| Web Server  | Apache (Cafe24 Hosting)  |
| Tools       | Vite, FileZila, PuTTY, phpMyAdmin |

---

## 🔚 후기

- 프로젝트 완료 후 **하급 오마카세** 먹음
- 공기업 면접에서 꽤 유용하게 써먹었음
- 버그도 있고 리팩토링하고 싶은 마음은 있지만, 일단 죽진 않으니 만족


> "후.. 너네는 이런거 하지마라."  

---

## 🥵 저급한 버전
```
일단 웹페이지 이름은 여상형설장학회이고
"yeosang1978.kr" 이 링크로 지금도 배포중임.

학교 쌤이 시켜서 교내 장학사 웹페이지 제작해드렸음 보수는 열정페이 + 50만원 소매넣기 당함

이게 레전드인게 기능대회 망치고 취업도 못한 애한테 1인 개발로 한 달안에 웹 기획 + 디자인 + 프론트 & 백 개발
+ 서버 구축 + 배포 + 유지보수 엔드투엔드로 해달라고 한거임 ㅋㅋㅋㅋ 해달래서 해주긴했는데 확실히 학생은 쓰기
좋은 노예긴 하다

웹 기획은 걍 "여수장학회" 여기 사이트 들고와서는 이거랑 비슷하게 해달라고함 뭐 sitemap 그딴거 없음 걍 해줘임
그래서 한 미팅 2번 가지고 응 나 모르니까 니가 다 해줘 해서 대충짜서 피드백 받고 끝

그담엔 디자인 이건 걍 지디웹(gdweb.co.kr) 여기서 한 30분동안 웹사이트 둘러보면서 마음에 드는거 래퍼런스로
삼아서 클론 디자인하면됨 -> 눈이 높아야 좋은 디자인이 나옴 

개발은 후배들이 유지보수해야하니까 걍 laravel 로 풀스택했음 laravel + blade 로 SSR 기반 풀스택 
개발했고 UI는 tailwind 썼음 laravel 에서 tailwind 쓸꺼면 https://tailwindcss.com/docs/installation/
framework-guides/laravel/vite 여기에 Using Vite 방법으로 진행하셈(그렇다고 laravel 쓰지는 말고 ㅋㅋ) 

그리고 글쓰기 기능 만들어달라길래 좀 애먹었는데 ckeditor로 해결했음 무료 웹 에디터중에 이게 1티어임 대신 
설명 좀 빈약함

서버는 설마 나한테 장비 구매해서 리눅스 깔고 다하라할까봐 쫄리긴 했는데 다행히 카페24 호스팅 해줬음. 웹서버는 
Apache, DB는 Mysql 전형적이게 했고 DB 관리는 https://www.phpmyadmin.net/ 이걸로 걍 웹으로 들고왔고 

배포는 FileZila(아 뭔 FTP여 ;:)로 하고 putty로 호스팅서버 접속해서 설정 건드려주고(Document Root 설정 등)

그리고 유지보수 메뉴얼 작성해서 동아리애들한테 뿌리고 끝

이거 프젝 레전드 대충해서 버그도 좀 있고 고치고 싶은것도 많음..
근데 시스템 살아있으니 한잔해 ㅋㅋ

# 후기

이거 하고 약간 하급 오마카세가서 뷔폐식 먹었음 
보수가 적긴했는데 공기업 면접때 요긴하게 쓰긴 했음 ㅋㅋ
```

