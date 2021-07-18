var noseX= 0;
var noseY= 0;

function preload()
{
   clown_nose= loadImage('https://i.postimg.cc/k58b8Gr2/m.png');
} 

function setup()
{
    canvas= createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotposes);
}
function modelLoaded()
{
    console.log("poseNet is initialised");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        console.log("nose x= "+noseX);
        noseY= results[0].pose.nose.y;
        console.log("nose y= "+noseY);
    }
}
function draw()
{
image(video, 0,0 , 300, 300);
image(moustache, noseX+15, noseY+5, 30, 30);
}

function take_snapshot()
{
    save('myImage.png');
}
