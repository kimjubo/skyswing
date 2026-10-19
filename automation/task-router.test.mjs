import { routeTask } from "./task-router.js";
const cases = [
  ["파일명 정렬", "rules"],
  ["광고 영상 제작", "advanced_ai"],
  ["홈페이지 배포", "human_approval"],
  ["고객 개인정보 삭제", "human_approval"],
  ["", "needs_details"],
  ["문의", "needs_review"]
];
for (const [input, expected] of cases) {
  const actual = routeTask(input).route;
  if (actual !== expected) throw new Error(`${JSON.stringify(input)}: ${actual} !== ${expected}`);
}
console.log("6 routing tests passed");
