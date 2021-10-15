
    let inputL=document.getElementById("inputL");
    function pressBtn(obj){
    let pressed = obj.innerHTML;
    if(pressed=="=") {
    inputL.innnerHTML  = eval(inputL.innerHTML);
}
    else if(pressed == "C") {
    inputL.innnerHTML = "0";
}
    else {
    if (inputL.innerHTML == 0) {
    inputL.innerHTML = pressed;
}
    else {
    inputL.innnerHTML += pressed;
}
}
}