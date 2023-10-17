var SpeechRecognition = window.webkitSpeechRecognition;
var R = new SpeechRecognition();
function start2() {
  document.getElementById("textbox").innerHTML = "";
  R.start();
}
R.onresult = function run(event) {
  console.log(event);
  data = event.results[0][0].transcript;
  document.getElementById("textbox").innerHTML = data;
  if (data == "take my selfie") {
    Webcam.attach("#camera");
    setTimeout(function () {
      takepic();
      savepic();
    }, 5000);
  }
  speech()
}
function speech() {
  var api = window.speechSynthesis;
  d = "taking your selfie in 5 seconds"
  af = new SpeechSynthesisUtterance(d);
  api.speak(af);
}

camera = document.getElementById("camera");

Webcam.set({
  width: 350,
  height: 250,
  image_format: "png",
  png_quality: 90
});

function takepic() {
  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = "<img id='ss' src=" + data_uri + ">"
  });
};
function savepic() {
  p = document.getElementById("ss").src;
  document.getElementById("anchor1").href=p
  document.getElementById("anchor1").click();
}