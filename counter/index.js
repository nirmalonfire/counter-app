const counter = document.querySelector("#count");

function decrement(){
    let value = parseInt(counter.innerText);
    value = value - 1;
    counter.innerText = value;
}

function increment(){

    let value = parseInt(counter.innerText);
    value = value + 1;
    counter.innerText = value;
}