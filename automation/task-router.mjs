// SkySwing task router — deterministic, zero API cost.
// This module does not send customer data to external services.
export function routeTask(input) {
  if (typeof input !== "string" || !input.trim()) return { route: "needs_details", reason: "요청 내용이 비어 있음", approval: false };
  const text = input.normalize("NFKC").toLowerCase().slice(0, 10000);
  const highRisk = /(결제|송금|환불|삭제|배포|게시|계정 변경|권한 변경|개인정보|비밀번호|계약 체결)/u;
  const complex = /(기획|전략|브랜딩|광고 문구|카피라이팅|디자인|일러스트|영상 제작|코딩|개발|분석|법률|저작권)/u;
  const simple = /(날짜|요일|단위 변환|글자 수|파일명|확장자|정렬|목록|분류|맞춤법 검사)/u;
  if (highRisk.test(text)) return { route: "human_approval", reason: "외부 영향 또는 민감한 변경이 포함됨", approval: true };
  if (complex.test(text)) return { route: "advanced_ai", reason: "창의적 작업 또는 복잡한 판단이 필요함", approval: false };
  if (simple.test(text)) return { route: "rules", reason: "규칙 기반 처리 후보. 실제 실행 전 입력 검증 필요", approval: false };
  return { route: "needs_review", reason: "규칙만으로 작업 유형을 확정할 수 없음", approval: false };
}
