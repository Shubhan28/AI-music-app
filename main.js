width = 400;
height = 400;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
score_leftWrist = 0;
score_rightWrist = 0;
what = "";
function rint(message, another)
{
    if(message)
    {
        console.log(message);
    } else {
        console.log(message, another);
    }
}
function preload()
{
   song1 = loadSound("music.mp3");
   song2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(400, 400);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();

   classifier = ml5.poseNet(video, modelLoaded);
   classifier.on('pose', gotposes);
}
function draw()
{
    image(video, 0, 0, 400, 400);
    fill(255, 0, 255);
    stroke(0, 0, 255);
    what = song1.isPlaying();
    if(score_leftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 30);
        song2.stop();
        if(what == false)
        {
           song1.play();
           document.getElementsById("song_display").innerHTML = "Song : Peter Pan";
        }
    }
    if(score_rightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 30);
        song1.stop();
        if(what == true)
        {
            song2.play();
            document.getElementById("song_display").innerHTML = "Song : Harry Potter theme";
        }
    }
    
    
}
function modelLoaded()
{
    rint("Model Loaded!!");
}


function gotposes(poses)
{
    if(poses.length > 0)
    {
       rint(poses);
       leftWristX = poses[0].pose.leftWrist.x;
       leftWristY = poses[0].pose.leftWrist.y;
       score_leftWrist = poses[0].pose.keypoints[9].score;
       rint("Left Wrist X = "+leftWristX, "Left Wrist Y = "+leftWristY);
       rightWristX = poses[0].pose.rightWrist.x;
       rightWristY = poses[0].pose.rightWrist.y;
       score_rightWrist = poses[0].pose.keypoints[10].score;
       rint("Right Wrist X = "+rightWristX, "Right Wrist Y = "+rightWristY);
    }
}
