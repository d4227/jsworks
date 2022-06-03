//제목 애니메이션
let mainText = document.querySelector("h1");

window.addEventListener("scroll", function(){
    let value = this.window.scrollY; // 마우스 스크롤의 좌표
    console.log("scollY", value);


    // 마우스 스크롤을 내리면 들어가고(없어지고), 올리면 나타나기
    if(value > 300){ // slideOut - 들어가기
        mainText.style.animation = "slideOut 1s ease-out forwards";
    }
    else{        // slideIn - 나타나기
        mainText.style.animation = "slideIn 1s ease-out";
    }

})