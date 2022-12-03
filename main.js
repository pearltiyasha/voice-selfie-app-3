var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
        speak();  
        console.log("Taking selfie");

    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="Taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        img_id="selfie_image";
    },5000);
    setTimeout(function(){
        take_snapshot();
        img_id="selfie_image1";
    },10000);
    setTimeout(function(){
        take_snapshot();
        img_id="selfie_image2";
    },15000);
    setTimeout(function(){
        take_snapshot();
        img_id="selfie_image3";
    },15000);

}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function (data_uri){
     if(img_id=="selfie_image"){
        document.getElementById("result").innerHTML='<img id="selfie_image"src="'+data_uri+'">'; }
        if(img_id=="selfie_image1"){
        document.getElementById("result1").innerHTML='<img id="selfie_image1"src="'+data_uri+'">';}
        if(img_id=="selfie_image2"){
        document.getElementById("result2").innerHTML='<img id="selfie_image2"src="'+data_uri+'">';}
        if(img_id=="selfie_image3"){
        document.getElementById("result3").innerHTML='<img id="selfie_image3"src="'+data_uri+'">';}
    

    });
}

