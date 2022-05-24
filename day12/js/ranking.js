// 순위에 따른 메달 정하기

// switch(조건식 or 값){
//     case 조건1 or 값:
//         실행문
//         break;
//     case 조건2 or 값:
//         실행문
//         break;
//     case 조건3 or 값:
//         실행문
//         break;
//         default:
//         실행문
//         break;
//     }

// switch ~ case ~ break 
// break를 빼면 같이 출력

let ranking = 3;

switch(ranking){
    case 1:     // ranking = 1
        document.write("금메달<br>");
        break;
    case 2:     // ranking = 2
        document.write("은메달<br>");
        break;
    case 3:     // ranking = 3
        document.write("동메달<br>");
        break;
    default:
        document.write("메달이 없습니다.")
        break;
}