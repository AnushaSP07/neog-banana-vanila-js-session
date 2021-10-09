var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");

//var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(){
    return serverUrl + "?" + "text" + txtInput
}

function errorHandler(error){
    console.log("error ",error);
    alert("something wrong with the server! try again");
}
function clickHandler(){
  //  outputdiv.innerText = "ajsjsjsjsjsjsj "+txtInput.value;
  var outputTxt = txtInput.value;
  fetch(getTranslationUrl(outputTxt))
  .then(respone => respone.json)
  .then(json => {
      var translatedText = json.contents.traslated;
      outputdiv.innerText = translatedText;
  })
  .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);