song = "";

function preload(){
    song = loadSound("music.mp3");
}

rightWristX = 0;
rightWristY = 0;

leftwristX = 0;
leftwristY = 0;

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotPoses);
}

function modelloaded(){
    console.log("posenet is intialized" );
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setvolume(1);
    song.rate(1);
}

function gotPoses(results){
    if (results.length > 0)
    {
    console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;

    leftwristX = results[0].pose.leftWrist.x;
    leftwristY = results[0].pose.leftWrist.y;

    }

   
}


