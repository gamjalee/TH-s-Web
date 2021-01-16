const title=document.querySelector("#title");

const CLICKED_CLASS="clicked";

function handleClick(){
    // toggle : if(!has CLICKED_CLASS) add, else remove.
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick);
}
init();
