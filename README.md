# Long Thought Recovery

짧은 자극에 익숙해진 생활 패턴에서 벗어나, 8주 동안 긴 생각, 짧은 계산, 시각화, 독서, 운동, 수면을 다시 훈련하는 개인 회복 루틴 앱입니다.

> 현재 버전은 v0.4.0 Adaptive Routine MVP입니다. 서버가 없고, 로그인도 없으며, 기록은 사용자의 브라우저 localStorage에 저장됩니다.

## Live App

GitHub Pages 배포 후 아래 주소로 접속합니다.

```text
https://jean-forest.github.io/long-thought-recovery/
```

## 핵심 기능

- 오늘 플로우: 앱을 열면 주차/요일, Long Thought 질문, START 버튼 표시
- 8주 회복 루틴 대시보드
- 하루 체크리스트와 자동 점수 계산
- Long Thought, 계산, 시각화 타이머
- 매일 자동 훈련 프롬프트
- 주차별 평균 점수, 쇼츠 사용량, 수면, 집중감, 머리 맑음, 시각화 선명도 그래프
- 회복 저널: 머리 맑음, 집중감, 시각화 선명도, 방해요인, 메모
- 저녁 회복 체크인과 별점 기록
- 최근 7일 피드백 카드와 간단 추천
- 기록 기반 적응 추천 카드
- Recovery / Standard / Growth 루틴 모드
- 최근 7일 vs 이전 7일 주간 비교 엔진
- JSON 백업/복원
- CSV, Markdown 내보내기
- PWA 설치 지원

## 바로 실행하기

저장소를 다운로드한 뒤 `index.html`을 브라우저로 열면 됩니다.

```bash
open index.html
```

Windows에서는 파일을 더블클릭하면 됩니다.

## GitHub Pages로 배포하기

가장 쉬운 방법은 이 저장소를 GitHub에 올리고, GitHub Pages를 켜는 것입니다.

1. GitHub에서 새 repository를 만듭니다.
2. 이 폴더 안의 파일들을 repository 최상위에 업로드합니다.
3. repository의 `Settings`로 이동합니다.
4. `Pages` 메뉴를 엽니다.
5. `Build and deployment`에서 source를 선택합니다.
   - 쉬운 방법: `Deploy from a branch` → branch `main` → folder `/root`
   - 자동화 방법: `GitHub Actions` 선택 후 이 저장소의 `.github/workflows/pages.yml` 사용
6. 저장 후 잠시 기다리면 GitHub Pages URL이 생성됩니다.

자세한 순서는 [docs/deploy-github-pages.md](docs/deploy-github-pages.md)를 참고하세요.

## 폴더 구조

```text
.
├── index.html
├── styles.css
├── app.js
├── manifest.json
├── service-worker.js
├── icon.svg
├── docs/
├── .github/
├── ROADMAP.md
├── CONTRIBUTING.md
├── PRIVACY.md
└── README.md
```

## 데이터 저장 방식

이 앱은 서버로 데이터를 보내지 않습니다. 기록은 브라우저의 localStorage에 저장됩니다. 브라우저 캐시를 삭제하거나 다른 기기로 이동하면 기록이 사라질 수 있으므로, 앱 안의 `JSON 백업` 기능을 사용하세요.

## 프로젝트 방향

이 앱은 단순 습관 추적기가 아니라, 다음 질문에서 출발합니다.

> 짧은 콘텐츠에 익숙해진 사람이 다시 긴 생각, 계산, 시각화, 독서에 적응하도록 돕는 도구를 만들 수 있을까?

현재 목표는 개인용 회복 도구를 안정화하는 것입니다. 이후에는 접근성, 데이터 시각화, 개인화 프롬프트, 다국어 지원, 오프라인 안정성, 모바일 UX를 개선할 수 있습니다.

## 의료적 주의

이 앱은 자기관리와 습관 추적을 돕는 도구입니다. 의학적 진단, 치료, 처방을 제공하지 않습니다. 집중력 저하, 우울감, 불안, 수면 문제, 기억력 저하가 일상 기능을 크게 방해한다면 전문가와 상담하세요.

## 라이선스

기본 라이선스는 MIT로 설정되어 있습니다. 공개 배포 전 라이선스 방향을 다시 검토하려면 [docs/license-decision.md](docs/license-decision.md)를 참고하세요.
