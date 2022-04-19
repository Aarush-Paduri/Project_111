Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    image_quality: 90
});
webcam = document.getElementById("camera");
Webcam.attach( '#camera' );

function capture() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>';
    });
}

console.log(ml5.version, "ml5.version");
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LeL-I6WMj/model.json",modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}