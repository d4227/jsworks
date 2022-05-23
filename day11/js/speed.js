// 구속을 변환하는 프로그램
//입력
const CURRENT_YEAR = 2022;
let age = 0;
let birthYear = parseInt (prompt("태어난 연도를 입력하세요.(YYYY)"));


//연산
age = CURRENT_YEAR - birthYear + 1;


//출력
document.write("2022년 현재" + "<br>");
document.write(birthYear +  "년에 태어난 사람의 나이를" + age + " 세입니다.");