# BASIC Studio 방향 개편 검토
기준: main abaecda56bf4bd4d05cd4b0f1441b67369b95ffa (2026-10-18).

## 현재 구조
빌드 도구 없는 정적 HTML 사이트다.
- index.html: 대표작 5개, 서비스 3개, 지역 소개, 작업 과정 4단계, 역할 캐릭터 3개, 문의 폼.
- gallery.html: WORKS 배열 기반 카테고리별 갤러리와 확대 보기.
- studio.css: 두 페이지 공통 디자인.
- assets/works, assets/gallery: 720/1200 WebP 이미지.
- assets/team: 역할 캐릭터 SVG.
- progress-page/index.html: 독립 공모전 진행 페이지.

## 개편 방향 및 수정
main에 이미 대형 타이포그래피와 작품 중심 레이아웃이 반영되어 있다.
BASIC의 큰 제목, 넓은 여백, 간결한 선과 대비를 이어간다.
템플릿 소스나 이미지를 복제하지 않고 기존 HTML/CSS를 다듬는다.
- studio.css: 데스크톱 제목의 화살표 공간 확보, 모바일 화살표 별도 줄, 좁은 화면 메뉴 및 과정 1열, 작품 메타정보 grid 정렬, 소개 배경 구분, 연락처 구분선, 키보드 이동 링크 스타일.
- index.html: 본문 건너뛰기, 대표 이미지 sizes 수정, CSS 버전 표시.
- gallery.html: 같은 본문 이동 및 CSS 버전, 페이지별 OG URL과 제목 수정.
문구, 작품 데이터, 이미지, 연락처, 폼 처리 코드는 보존한다. progress-page는 수정하지 않는다.

## 배포
이 브랜치를 main에 병합하면 기존 Pages 배포 설정에 따라 반영된다.
저장소에는 package.json, 빌드 설정, Actions 워크플로, CNAME이 없다.
Pages의 실제 소스 브랜치와 사용자 도메인 설정은 GitHub Settings > Pages에서 확인한다.
상대 경로를 유지하므로 /skyswing/ 프로젝트 경로에도 적용할 수 있다.
canonical과 OG는 기존 skyswing.jubo.kim 도메인을 유지한다.
두 HTML과 studio.css를 함께 배포한다. CSS 버전 쿼리로 이전 캐시 영향을 줄였다.
문제가 있으면 이 PR의 병합 커밋을 revert한다.

## 기존 미해결 사항

문의 폼은 외부 Web3Forms에 의존한다. 실제 접수 확인은 운영자가 별도로 한다.
이번 검증에서 문의를 제출하지 않는다.

## OG 이미지 보완 (2026-10-18)
- 루트 og-image.png 추가: 1200×630, PNG, 젤리·트와일라이트 색감과 기존 핵심 문구 유지.
- index.html / gallery.html의 기존 og:image 주소 https://skyswing.jubo.kim/og-image.png 와 실제 루트 파일 경로를 일치시킴.
- HTML은 기존 blob을 보존한다. og:image:width=1200, height=630을 확인. HTML의 TODO 주석은 남아 있지만 파일 누락은 해결됨.
- 이미지 생성: 내장 imagegen. 제작 지시: 기존 청보라·분홍·복숭아 그라데이션, 투명 젤리, 큰 한글 타이포, “하늘그네 / 좋은 이야기를 더 멀리. / 안동·경북의 브랜드를 위한 디자인, 영상, 그리고 광고.” 유지.
- 새 이미지 교체 시 og-image.png와 메타데이터를 함께 갱신한다. 필요하면 두 이미지 URL에 동일한 버전 쿼리를 붙인다.
- Pages 배포 성공 후 사용자 도메인 루트·갤러리·이미지 URL의 응답을 확인한다.
- 기존 카카오 스크랩 캐시는 별도다. https://developers.kakao.com/tool 의 “카카오톡 URL 메타정보 관리”에서 루트와 gallery.html을 각각 조회·초기화한다. 기존 대화방 미리보기 변경 여부는 별도 확인한다.
- 작업 환경에서 사용자 도메인 접근 시 502가 관찰되어, 실제 도메인 배포 확인과 카카오 캐시 초기화 완료를 단정하지 않는다.
