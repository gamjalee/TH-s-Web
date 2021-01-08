var clock=document.querySelector('.clock');
var clockword=document.querySelector('.clockword');
function getTime(){
    const time=new Date;
    const hour=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    //clock.innerHTML=hour+":"+minutes+":"+seconds;
    clock.innerHTML=`${hour<10?`0${hour}`:hour}:${minutes<10?`0${minutes}`:minutes}:${seconds<10?`0${seconds}`:seconds}`;
    if(hour<6)
        clockword.innerHTML=`역시 코딩은 새벽에 커피빨면서 하는 게 제맛이지~`;
    else if(hour<10)
        clockword.innerHTML=`이 이른 시각에 코딩을 하시는군요.`;
    else if(hour<12)
        clockword.innerHTML=`점심 먹기 전에 가볍게 백준 풀어볼까요?`;
    else if(hour<18)
        clockword.innerHTML=`남들이 한창 일할 시간, 우리는 코딩해볼까`;
    else
        clockword.innerHTML=`이번 주 풀어야 할 문제, 오늘 다 끝내볼까요?`;
}
function init(){
    setInterval(getTime, 1000);
}
init();