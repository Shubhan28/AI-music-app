width = 400;
height = 400;
function preload()
{
   canvas = createCanvas(width, height);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}