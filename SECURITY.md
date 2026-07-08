# Security Policy

## Supported versions

현재는 초기 정적 웹앱 버전만 지원합니다.

## Reporting a vulnerability

보안 문제가 발견되면 GitHub Issue에 공개하지 말고, repository 소유자에게 비공개로 알려주세요.

## Current security model

- 서버 없음
- 로그인 없음
- 외부 API 호출 없음
- 브라우저 localStorage 저장

이 구조는 간단하지만, 브라우저 데이터가 삭제되면 기록이 사라질 수 있습니다. 정기적으로 JSON 백업을 저장하세요.
