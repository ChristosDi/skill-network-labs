let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value = testText;

    document.getElementById("output").innerHTML="";
    startTime = new Date().getTime();

    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest; 
};

function endTest(){
    endTime = new Date().getTime();

    document.getElementById("userInput").readOnly = true;

    var timeElapsed = (endTime-startTime)/1000;
    var userTypedText = document.getElementById("userInput").value;

};