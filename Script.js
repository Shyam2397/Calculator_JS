
let outputscreen = document.getElementById('display');

function display(num){
    outputscreen.value += num;
}

function calculate(){
    try {
        outputscreen.value = eval(outputscreen.value)
    } catch (error) {
        alert("invalid")       
    }
}

function Clr(){
    outputscreen.value = "";
}

function del(){
    outputscreen.value = outputscreen.value.slice(0,-1)
}