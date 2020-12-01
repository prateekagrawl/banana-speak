var btnTranslate = document.querySelector("#btn");
var txtArea = document.querySelector("#txt");
var outputDiv = document.querySelector("#div-translated");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
    return url + "?" + "text="+ text;
}

function errorHandler(error){
    alert("Something is wrong with the server.Try again after some time.");
}

function clickHandler() {
    // outputDiv.innerText="absjds "+txtArea.value;

    var inputText=txtArea.value;
    

    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedTxt=json.contents.translated;
        outputDiv.innerText=translatedTxt;
    })
    .catch(errorHandler);
}


btnTranslate.addEventListener("click", clickHandler);