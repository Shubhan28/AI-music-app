leftWristX = 0;
rightWristX = 0;
noseX = 0;
noseY = 0;
function echo(message)
{
    console.log(message);
}
function setup()
{
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    video = createCapture(VIDEO);
    video.size(500, 500);

    classifier = ml5.poseNet(video, modelLoaded);
    classifier.on('pose',gotposes);
    echo("Pose Net connected!!");
    
}
function modelLoaded()
{
    echo("Model Loaded!!");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        echo(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
    }
}
function draw()
{
    background('#718355');
    difference = floor(leftWristX - rightWristX);
    document.getElementById("square_side").innerHTML = difference + " px";
    fsize = window.innerHeight/4;
    myFont = window.innerHeight/4;
    fill(255, 0, 0);
    stroke(0, 255, 255);
    textSize(difference);
    textAlign(CENTER);
    fill(255);
    text("Famous Five",noseX, noseY);
}