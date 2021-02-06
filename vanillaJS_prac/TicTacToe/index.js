var body=document.body;
var table=document.createElement('table');
var row=[];
var col=[];
var now='X';
// 들여쓰기가 너무 많아지므로 함수를 따로 변수로 정의
var enter=function(event){
    // 행렬 정보 출력
    console.log(event.target);
    // 행 정보 출력
    console.log(event.target.parentNode);

    var rNum=row.indexOf(event.target.parentNode);
    var cNum=col[rNum].indexOf(event.target);
    console.log('위치: ', rNum, cNum);
    // 칸 채워짐 여부
    if(col[rNum][cNum].textContent === ''){
        console.log('빈칸');
        if(now==='X'){
            // textcontent: 태그 및 상태까지 출력하고싶을 때
            // value로 하면 출력이 되지 않고 상태만 바뀜.
            col[rNum][cNum].textContent=now;
            now='O';
        }
        else{
            col[rNum][cNum].textContent=now;
            now='X';
        }
    }
    else{
        console.log('빈칸이 아님');
    }
};

for(var i=0;i<3;i++){
    var R=document.createElement('tr');
    // 행 정보를 담기 위한 push
    row.push(R);
    col.push([]);
    for(var j=0;j<3;j++){
        var C=document.createElement('td');
        C.addEventListener('click', enter);
        R.appendChild(C);
        col[i].push(C);
    }
    table.appendChild(R);
}
body.appendChild(table);
console.log(line);