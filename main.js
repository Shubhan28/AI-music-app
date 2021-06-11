width = 400;
height = 400;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(width, height);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   classifier = ml5.poseNet(video, modelLoaded);
   classifier.on('pose', gotposes);
}
