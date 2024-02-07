# Zesthub
<img width="800" alt="메인페이지" src="https://github.com/growth-ring/taskgrow/assets/116357790/c03a14d3-1b3c-44e7-aa21-cfcf29f58a49">

### 프로젝트 소개
---
냉장고를 열지 않고 냉장고 안의 식품을 관리하고 재료들을 조합해서 추천 레시피를 알려주는 웹 애플리케이션 서비스

- 기획 및 제작: 1인 제작 (KJeeu)
- 개발 기간 : 2023.12.29 ~ 2024.02.06
- 주요 기능 : 구글 로그인, 공공데이터 API를 이용한 레시피 추천, 찜하기
- 기획 배경 : 냉장고 안의 식재료를 잊고 방치하다가 결국 버리게 되는 경우가 많다. 이런 식재료 낭비를 방지하고 한 눈에 볼 수 있도록 하고자 만들게 되었다. 또한 가진 재료로 조합하여 레시피 추천 기능으로 다양한 레시피를 통해 식재료를 효율적으로 활용할 수 있다.

### 기술 스택
---
- Frontend : React, TypeScript, Zustand, styled-components, Vite, React Query
- Backend : Firebase 

### 기능
---
### 로그인 및 데이터 관리
- Firebase Authentication를 활용한 구글 로그인 및 관리
- Cloud FireStore를 활용한 사용자별 식재료, 레시피 데이터 관리

<table>
  <tr>
    <td><img width="400" alt="메인페이지" src="https://github.com/growth-ring/taskgrow/assets/116357790/c03a14d3-1b3c-44e7-aa21-cfcf29f58a49"></td>
    <td><img width="400" alt="로그인 후 페이지" src="https://github.com/growth-ring/taskgrow/assets/116357790/03369fd5-7194-40c6-a863-061c783565f0"></td>
  </tr>
  <tr>
    <td>로그인 X</td>
    <td>로그인 O</td>
  </tr>
</table>

### 식품 추가
- 식품 추가 버튼 클릭시 모달창이 생성된다.
- 이미지, 식품명, 카테고리, 구매일자, 소비기한, 개수, 보관위치 작성한다.
- 모두 다 작성해야만 추가된다. 빈칸 존재시 다 채우라는 alert창이 뜬다.
- 이미지는 Storage에 저장되고, 식품 정보는 Cloud FireStore에 데이터가 저장된다.
<table>
  <tr>
    <td><img width="400" alt="식품추가" src="https://github.com/growth-ring/taskgrow/assets/116357790/9d9d0105-3eb3-4f78-993c-4305c1f9d434"></td>
    <td><img width="400" alt="식품 추가 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/1a77598b-271b-4a47-a6f3-40ade81647a5"></td>
  </tr>
  <tr>
    <td>식품 추가 모달창</td>
    <td>사용자 직접 식품 추가</td>
  </tr>
</table>

### 식품 삭제, 수정
- 기존 냉장고와 같이 냉동은 상단에, 냉장은 하단에 위치해있다.
- 카테고리별로 필터 검색이 가능하다.
- 식품을 클릭시 모달창이 생성된다.
- 이미지, 식품명, 카테고리, 구매일자, 소비기한, 개수, 보관위치 수정 가능하다.
- 수정시 이미지 변경시 기존 저장된 이미지는 삭제되고 새로운 이미지가 Storage에 저장된다. 기존 Cloud FireStore에 데이터가 업데이트된다.
<table>
  <tr>
    <td><img width="400" alt="식품추가" src="https://github.com/growth-ring/taskgrow/assets/116357790/6c4dbe85-587d-4c94-b6e6-27fc14f5d4ae"></td>
    <td><img width="400" alt="식품 추가 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/740fe012-57d0-490f-ad28-45d5eb54bb03"></td>
  </tr>
  <tr>
    <td>식품 상세보기</td>
    <td>식품 수정, 삭제 가능</td>
  </tr>
</table>

### 식품 필터
- 기존 냉장고와 같이 냉동은 상단에, 냉장은 하단에 위치해있다.
- 카테고리별로 필터 검색이 가능하다.
<table>
  <tr>
    <td><img width="400" alt="식품 필터" src="https://github.com/growth-ring/taskgrow/assets/116357790/641675c5-ccd1-4d43-bbbb-02f0b762c8a2"></td>
    <td><img width="400" alt="식품 필터 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/b4ebca7e-5fad-476a-b33f-55707194d3bd"></td>
  </tr>
  <tr>
    <td>식품 카테고리별 필터 기능</td>
    <td>음료로 필터링 후</td>
  </tr>
</table>

### 레시피 만들기
- 레시피 만들기 버튼을 클릭한 후 냉장고에서 재료를 선택한다.
- 선택한 재료들이 우측 박스안에 추가된다.
- 잘못 선택한 재료는 취소할 수 있다.
<table>
  <tr>
    <td><img width="400" alt="레시피 만들기" src="https://github.com/growth-ring/taskgrow/assets/116357790/23487953-59cc-4fa3-86f4-efebb8cf2848"></td>
    <td><img width="400" alt="레시피 선택 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/0ab9997c-93a2-4bb5-98b7-6a31d62e77cc"></td>
  </tr>
  <tr>
    <td>레시피 만들기 버튼 클릭 후 </td>
    <td>냉장고에서 재료 선택</td>
  </tr>
</table>

### 레시피 만들기
- 식품의약품안전처 공공 API 데이터에서 선택된 재료를 검색한다.
- 이미지, 레시피명, 필요한 재료, 재료 수 나타난다. 
- < 화살표 클릭시 mainPage로 돌아간다.
<table>
  <tr>
    <td><img width="400" alt="레시피 검색중" src="https://github.com/growth-ring/taskgrow/assets/116357790/b58e18cb-17cc-4e45-8bc8-701e7b0f6878"></td>
    <td><img width="400" alt="레시피 찾을 수 없음" src="https://github.com/growth-ring/taskgrow/assets/116357790/945aad71-1b33-4b03-be80-0276fb27ce58"></td>
    <td><img width="400" alt="레시피 리스트" src="https://github.com/growth-ring/taskgrow/assets/116357790/dc31e263-28ef-46aa-a05b-02f94a8e867b"></td>
  </tr>
  <tr>
    <td>레시피 로딩 화면</td>
    <td>선택된 재료로 레시피 만들 수 없는 경우</td>
    <td>선택된 재료로 만들 수 있는 레시피 리스트</td>
  </tr>
</table>

### 레시피 상세보기, 찜하기
- 레시피명, 한 줄 소개, 재료, 재료수, 레시피를 알 수 있다.
- 찜 하기 클릭 후 해당 사용자의 찜한 목록에서 확인이 가능하다.
- 찜하기 누른 후 찜 삭제 버튼이 생성된다.
<table>
  <tr>
    <td><img width="400" alt="레시피 찜하기 전" src="https://github.com/growth-ring/taskgrow/assets/116357790/3fa28adf-3e04-47f8-8163-b855bf1e0036"></td>
    <td><img width="400" alt="레시피 찜하기 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/2b6ece4e-bef8-48e4-9822-ed83acdb1462"></td>
  </tr>
  <tr>
    <td>찜하기 전</td>
    <td>찜하기 후</td>
  </tr>
</table>


### 찜한 목록
- 찜한 목록에서 레시피 확인 가능하다.
- < 화살표 클릭시 mainPage로 돌아간다.
<table>
  <tr>
    <td><img width="400" alt="찜한 목록" src="https://github.com/growth-ring/taskgrow/assets/116357790/8a583475-8674-448c-a834-3e1c5bf2dcc9"></td>
    <td><img width="400" alt="찜한 목록에서 레시피 클릭 후" src="https://github.com/growth-ring/taskgrow/assets/116357790/2b6ece4e-bef8-48e4-9822-ed83acdb1462"></td>
  </tr>
  <tr>
    <td>찜한 목록</td>
    <td>찜한 목록에서 레시피 클릭 후</td>
  </tr>
</table>


### 기능 구현
[Modal 공통 컴포넌트 만들기](https://jeeumu.tistory.com/245)

[Firebase Authentication를 이용한 구글 로그인, 로그아웃 구현](https://jeeumu.tistory.com/249)

[공공데이터 API 가져오기 + 전처리 작업](https://jeeumu.tistory.com/254)

[인덱스 시그니처를 이용하여 없는 key 불러오기](https://jeeumu.tistory.com/253)

[라운드 트립 지연으로 인해 이미지 늦게 로딩되는 현상 해결](https://jeeumu.tistory.com/256)

[전역 상태 관리 ContextAPI에서 Zustand로 바꾼 이유](https://jeeumu.tistory.com/250)

[svg 컴포넌트화 오류 대안법](https://jeeumu.tistory.com/248)

[Firebase와 React 연동하기](https://jeeumu.tistory.com/247)
