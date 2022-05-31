// 디지털 시계 구현
/*0
setInterval(watch, 1000);

function watch(){
    const date = new Date();
    let now = date.toLocaleTimeString(); //시간표시
    document.getElementById("display").innerHTML = now;
}
*/


// 실행함수
setInterval(function(){
    const date = new Date();
    let now = date.toLocaleTimeString(); //시간표시
    document.getElementById("display").innerHTML = now;
},1000);