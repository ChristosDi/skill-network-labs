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

    var typedWords = userTypedText.split(/\s+/).filter(function(word){
        return word !==""
    }).length;

    var wpm = 0; //Default Value

    if (timeElapsed !==0 && !isNaN(typedWords)){
        wpm= Math.round((typedWords/timeElapsed)*60) ;
    }

    //Display results
    var outputDiv= document.getElementById("output");
    outputDiv.innerHTML= "<h2>Typing Test Results:</h2>"+"Total Lenght:"+ userTypedText.length +"<p>Words Typed:"+ typedWords+"</p>"+"<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";

    //Reset button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
};