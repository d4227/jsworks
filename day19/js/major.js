// 선택한 옵션 항목 찾아내기
// select 태그 이름에 폼이름으로 접근
let selectMenu = document.testform.major;

function displaySelect(){
    //select option 속성의 value로 선택
    let selectText = document.getElementById("subj").value;
    alert(selectText + " 가 선택되었습니다.");

    // 태그의 text - 
    //let selectText = selectMenu.options[selectMenu.selectedIndex].innerText;
    //  alert(selectText + " 가 선택되었습니다.");
}