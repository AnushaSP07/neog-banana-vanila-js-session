var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");


function clickHandler(){
    outputdiv.innerText = "ajsjsjsjsjsjsj "+txtInput.value;
};

btnTranslate.addEventListener("click", clickHandler);