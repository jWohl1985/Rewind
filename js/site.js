let alertElement = document.getElementById("alert");
let headingElement = document.getElementById("heading");
let resultElement = document.getElementById("result");

function runTheApp(){
    let userInput = getUserInput();
    if (isValid(userInput)){
        let result = reverseString(userInput);
        displayResult(result);
    }
    else{
        displayError("You must enter a string to reverse!");
    }
}

function getUserInput(){
    let input = document.getElementById("userString").value;
    return input;
}

function isValid(string){
    if (string == null || string.length == 0){
        return false;
    }
    return true;
}

function reverseString(string){
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
    return newString;
}

function displayResult(string){  
    alertElement.classList.remove("invisible");
    alertElement.classList.add("alert-success");
    alertElement.classList.remove("alert-danger");
    headingElement.innerHTML = "Result:";
    resultElement.innerHTML = string;
}

function displayError(error){
    alertElement.classList.remove("invisible");
    alertElement.classList.add("alert-danger");
    alertElement.classList.remove("alert-success");
    headingElement.innerHTML = "Error:";
    resultElement.innerHTML = error;
}