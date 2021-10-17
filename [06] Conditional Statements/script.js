
    let inputL = document.getElementById("inputL");

    function pressBtn(obj){
    let pressed = obj.innerHTML;
    if(pressed === '=') {
        inputL.innerHTML  = eval(inputL.innerHTML);
    }
    else if(pressed === 'C') {
        inputL.innerHTML = '0';
    }
    else {
        if (inputL.innerHTML === '0') {
            inputL.innerHTML = pressed;
    }
        else {
            inputL.innerHTML += pressed;
        }
    }
}