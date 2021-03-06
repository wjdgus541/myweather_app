# myweather_app

## 해당 프로그램은 Nomad Coders에서의 '왕초보를 위한 React Native 101'강의를 활용해 만든 '날씨앱' 프로그램입니다.

---

# API
- 날씨 API : open weather (https://openweathermap.org/api/one-call-api)
- 위치 API : 구글 Maps JavaSctipt API (https://developers.google.com/maps/documentation/javascript/overview?hl=ko) -> 현재 위치를 한글로 받기 위해 사용
- 음력 API : 한국천문연구원_음양력 정보 (https://www.data.go.kr/data/15012679/openapi.do) -> 음력을 구해 달의 모양을 알아내기 위해 사용

- 본 저작물은 기상청에서 2021년 작성하여 공공누리 제1유형으로 개방한 동네예보 조회서비스(작성자:기상청)'를 이용하였으며, 해당 저작물은 기상청(data.kma.go.kr/api/selectApiDetail.do)에서 무료로 다운받으실 수 있습니다.

---


# Components
- AnotherTemp : 체감온도, 바람, 습도 표시 컴포넌트
- LocationTemp : 현재 온도, 위치 표현 컴포넌트
- Moon : 현재 달의 모양, 위치 표시 컴포넌트
- Sun : 현재 해의 위치 표시 컴포넌트
- SunMoon : 시간에 맞춰 해 또는 달 컴포넌트 표시
- TempByHour : 시간별 온도 그래프 표시 컴포넌트
- WeeklyTemp : 주간 온도 표시 모달창 컴포넌트
- WeeklyTempModal : 주간 온도를 표시할 모달창 설정 컴포넌트

---

# Issue
- open weather api 사용시 지역 이름이 한글이 아닌 영어로 표기 (-> 구글 Maps API 사용)
- 하단 화살표(WeeklyTemp) 드래그시 모달창이 뜨도록 하고 싶었으나 기술 경험 부족 ;ㅅ; (-> 버튼 클릭시 모달창을 띄움)
- 음력 API JSON형식으로 request 요청시 데이터가 단계적?으로 들어오는 문제!
