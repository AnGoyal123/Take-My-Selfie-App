//Storing speech to text API in a variable
var SpeechRecognition = window.webkitSpeechRecognition;

//Creating a our copy of the API
var recognition = new SpeechRecognition();

//var john = new Human()

//This function is called after clicking on button start
function start()
{
    //Ensuring that the textbox is empty
    document.getElementById("textbox").innerHTML = "";
    
    //Calling the start function of the API
    recognition.start();
}

//Calling the onresult function which has the voice to text conversion
recognition.onresult = function (event)
{
    console.log(event);

    
    //Setting the speech into the variable content
    var content = event.results[0][0].transcript;
    console.log(content);

    //Setting the content to the textbox
    document.getElementById("textbox").innerHTML = content;


    //Calling the function speak when the speech said is take my selfie
    if(content=="take my selfie"){
        console.log("taking selfie")
        speak();
    }
}


//Saying the given text when take my selfie is said.
function speak(){
    var syn = window.speechSynthesis;
    var speak_data = "Taking selfie in 5 seconds";

    //The computer has to say the speak_data
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    syn.speak(utterThis);
    
    //Attaching the camera to the div
    Webcam.attach(camera);


    //Waiting for 5 seconds before calling the following functions
    setTimeout(function(){
        takeSnap();
        save();
    },5000)
}


//Setting the css of the webcam
Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    image_quality : 90
});

//storing the camera in a variable camera
camera = document.getElementById("camera");

//Function to take the selfie
function takeSnap()
{
    //Clicking the photo and setting it to the result div to show it
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='my_selfie' src="+data_uri+">"
    })
}

//Function to save the image in an png form
function save()
{
    link = document.getElementById("link");
    image = document.getElementById("my_selfie").src;
    link.href = image;
    link.click();
}