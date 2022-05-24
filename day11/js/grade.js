//학점계산프로그램


let score = parseInt(prompt("점수를 입력하세요."));
let grade = ""; // 문지형 변수 초기화 - 문자이니까 "" 쌍따옴표!!, 숫자는 0 으로 지정


if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 80 && score < 90){
    grade = "B";
}
else if(score >= 70 && score < 80){
    grade = "C";
}
else if(score >= 60 && score < 70){
    grade = "D";
}
else{
    grade = "F";
}
document.write("학점은 " + grade + " 입니다.");