var screen=document.getElementById("display");

function btnclick(value){
    screen.value+=value;
}

function screenclear(){
    screen.value="";
}
function del(){
screen.value=screen.value.slice(0,-1);
}

function equal(){
    screen.value=eval(screen.value);
}