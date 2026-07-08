# GitHub Pages 배포 가이드

이 문서는 Long Thought Recovery 앱을 GitHub Pages에 올리는 가장 쉬운 방법을 설명합니다.

## 방법 A: 웹 화면에서 직접 업로드하기

코딩 도구가 없어도 가능한 방식입니다.

1. GitHub에 로그인합니다.
2. 오른쪽 위 `+` 버튼을 누르고 `New repository`를 선택합니다.
3. repository 이름을 정합니다.
   - 예: `long-thought-recovery`
4. Public 또는 Private을 선택합니다.
   - 무료 GitHub Pages는 public repository에서 가장 간단하게 쓸 수 있습니다.
5. repository를 생성합니다.
6. 이 프로젝트 폴더의 파일들을 repository 최상위에 업로드합니다.
   - `index.html`이 반드시 최상위에 있어야 합니다.
7. 업로드 후 `Commit changes`를 누릅니다.
8. repository의 `Settings` → `Pages`로 이동합니다.
9. `Build and deployment`에서 다음 중 하나를 선택합니다.

### Branch 배포

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

이 방식은 가장 단순합니다.

### GitHub Actions 배포

- Source: `GitHub Actions`
- 이 저장소에 포함된 `.github/workflows/pages.yml`이 자동 배포를 담당합니다.

이 방식은 나중에 빌드 과정이나 자동 검사를 추가하기 좋습니다.

10. 저장 후 GitHub가 사이트 URL을 보여줄 때까지 기다립니다.

주소 예시:

```text
https://your-github-id.github.io/long-thought-recovery/
```

## 방법 B: Git 명령어로 올리기

터미널을 사용할 수 있다면 아래처럼 진행할 수 있습니다.

```bash
git init
git add .
git commit -m "Initial Long Thought Recovery app"
git branch -M main
git remote add origin https://github.com/YOUR_ID/long-thought-recovery.git
git push -u origin main
```

그 다음 GitHub repository의 `Settings` → `Pages`에서 배포 설정을 켜면 됩니다.

## 모바일에서 앱처럼 쓰기

배포된 URL을 휴대폰에서 열고 홈 화면에 추가하면 됩니다.

### iPhone

1. Safari에서 앱 URL을 엽니다.
2. 공유 버튼을 누릅니다.
3. `홈 화면에 추가`를 선택합니다.

### Android

1. Chrome에서 앱 URL을 엽니다.
2. 메뉴 버튼을 누릅니다.
3. `홈 화면에 추가` 또는 `앱 설치`를 선택합니다.

## 업데이트하는 법

파일을 수정한 뒤 GitHub에 다시 업로드하거나 push하면 GitHub Pages가 새 버전으로 갱신됩니다.

## 자주 생기는 문제

### 사이트가 404로 뜹니다

- `index.html`이 repository 최상위에 있는지 확인하세요.
- Pages 설정에서 branch와 folder가 맞는지 확인하세요.
- 설정 직후에는 배포까지 시간이 걸릴 수 있습니다.

### 앱이 업데이트되지 않습니다

- 브라우저 캐시 또는 service worker 캐시 때문일 수 있습니다.
- 새로고침을 여러 번 하거나 브라우저 사이트 데이터를 삭제하세요.
- `service-worker.js`의 `CACHE_NAME`을 새 버전으로 바꾸면 업데이트 반영에 도움이 됩니다.

### 기록이 사라졌습니다

- 이 앱은 localStorage에 저장합니다.
- 브라우저 데이터 삭제, 기기 변경, 다른 브라우저 사용 시 기록이 보이지 않을 수 있습니다.
- 정기적으로 JSON 백업을 저장하세요.
