//일정한 시간 간격으로 이미지바꾸기
// head부분에 자바스크립트를 올릴때에는 window.onload = function(){} 적용
window.onload = function(){

let picture = ["images/coffee-blue.jpg","images/coffee-gray.jpg","images/coffee-pink.jpg"]

let picIdx = 0;

showslide();

function showslide(){
    let img = document.getElementById("pic")
    img.src = picture[picIdx];
    picIdx++; // 다음 인덱스로 증가
    if(picIdx == picture.length)
        picIdx = 0;

    setTimeout(showslide,2000);  // 콜백 함수
}
}





