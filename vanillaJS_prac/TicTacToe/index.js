const body=document.body;
const table=document.createElement('table');
const row=[];
const col=[];
let result=document.createElement('div');
let now='X';
// 들여쓰기가 너무 많아지므로 함수를 따로 변수로 정의
let enter=function(event){
    // 행렬 정보 출력
    console.log(event.target);
    // 행 정보 출력
    console.log(event.target.parentNode);

    let rNum=row.indexOf(event.target.parentNode);
    let cNum=col[rNum].indexOf(event.target);
    console.log('위치: ', rNum, cNum);
    // 칸 채워짐 여부
    if(col[rNum][cNum].textContent === ''){
        console.log('빈칸');
        // textcontent: 태그 및 상태까지 출력하고싶을 때
        // value로 하면 출력이 되지 않고 상태만 바뀜.
        // innerText로도 가능하긴 함.
        // 크롬에선 거의 유사하나, 다른 브라우저에서 innerText는 공백이 생략되기도 함.
        col[rNum][cNum].textContent=now;
        let flag1=true, flag2=true, flag3=true, flag4=true;
        for(let i=0;i<3;i++){
            if(col[rNum][i].textContent!==now){
                flag1=false;
            }
            if(col[i][cNum].textContent!==now){
                flag2=false;
            }
            if(col[i][i].textContent!==now){
                flag3=false;
            }
            if(col[i][2-i].textContent!==now){
                flag4=false;
            }
        }
        if(flag1 || flag2 || flag3 || flag4){
            result.textContent=now+'의 승리! ';
            now='wait';
            result.textContent+='판이 새로 시작됩니다. 기다려주십시오.'
            setTimeout(function(){
                now='X';
                col.forEach(function(R){
                    R.forEach(function(C){
                        C.textContent='';
                    });
                });
                result.textContent='';
            }, 3000);
        }
        else
            now==='X'?now='O':now='X';
    }
    else{
        console.log('빈칸이 아님');
    }
};

for(let i=0;i<3;i++){
    let R=document.createElement('tr');
    // 행 정보를 담기 위한 push
    row.push(R);
    col.push([]);
    for(let j=0;j<3;j++){
        let C=document.createElement('td');
        if(now!=='wait')
            C.addEventListener('click', enter);
        R.appendChild(C);
        col[i].push(C);
    }
    table.appendChild(R);
}
body.appendChild(table);
body.appendChild(result);
console.log(col);