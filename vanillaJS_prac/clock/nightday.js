let mode=document.getElementById("bgcolor");
mode.onclick=function(){
    if(mode==="night"){
        document.querySelector("body").style.backgroundColor='black';
        document.querySelector("body").style.color='white';
    }
    else{
        document.querySelector("body").style.backgroundColor='white';
        document.querySelector("body").style.color='black';
    }
}

