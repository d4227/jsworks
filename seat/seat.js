// 자리 배치도
let customNum = parseInt(prompt("입장객은 몇 명인가요?"))    // 고객수
let colNum = parseInt(prompt("한줄에 몇명 앉나요?"))       // 열 수
let rowNum = 0;                                 // 행(줄) 수

//입장객 수에 따른 행과 열 계산
//조건 - 나누어떨어질때, 나머지가 있을때
if(customNum % colNum == 0){
    rowNum = customNum / colNum;
}else{
    rowNum = parseInt(customNum / colNum) + 1;
    // 나누면 소수 점이 있는 실수 이므로 parseInt를 사용해서 정수로 변환
    // 그래서 +1 더해서 한출 추가함
}

// document.write(rowNum);
document.write("<table>");
for(let i = 0; i < rowNum; i++){
    document.write("<tr>");
    for(let j = 1; j <= colNum; j++){
        let seatNum = i * colNum + j;
        if(seatNum > customNum)
            break;
        // 좌석수가 고객수보다 크면 빠져나옴
        document.write("<td>좌석" + seatNum + "</td>");
   
    }
    document.write('</tr>');
}
document.write("</table>")