var inputText = document.querySelector("#input-txt");
var translateClick = document.querySelector("translate-btn");
var outputText = document.querySelector("output-txt");

var translationURL = "https://api.funtranslations.com/translate/dothraki.json";

function getTranslationUrl(text) {
    return translationURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something went wrong. Please try again in some time")
}

function clickHandler() {
var textInput = inputText.value;

fetch(getTranslationUrl(textInput))
.then (response => response.json())
.then (json =>{
    var textOutput = json.contents.translated; 
    outputText.innerText = textOutput;
})
.catch(errorHandler)
};

translateClick.addEventListener("click", clickHandler)