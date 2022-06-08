$(document).ready(function(){
$("tr:even").css("background","red"); // 짝수행
$("tr:odd").css("background","orange"); // 홀수행
$("td:first").css("background","yellow"); // 첫번째 칸
$("td:last").css("background","green"); // 마지막 칸
$(":header").css("background","blue");
$("li:eq(0)").css("background","navy"); // 0번째 줄만
$("li:gt(0)").css("background","purple"); // 0번쨰 줄보다 큰 줄 모두
$("li:lt(3)").css("border","4px solid gray"); // 3번쨰 줄보다 작은 줄만 (3번 줄은 아님)
$(":root").css("background","lightgray");


//실행 함수 (매개변수가 없는 함수)
(function upDown(){
$("h2").slideToggle(2000,upDown); //콜백함수
})();


// 움직이는 요소 선택
$(":animated").css("border","4px solid yellow");
});