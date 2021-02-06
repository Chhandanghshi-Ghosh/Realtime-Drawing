noseX=0
noseY=0
difference=0
left_wrist=0
right_wrist=0


function setup () {
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500)
    canvas.position(560,150)

    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function preload(){

}


function modelLoaded(){
    console.log("MODEL LOADED!!!");
}
function gotPoses(results){
    len=results.length

        if(len>0){
            console.log(results)
            noseX=results[0].pose.nose.x
            noseY=results[0].pose.nose.y
            console.log("noseX =" + noseX + "noseY =" + noseY)


            left_wrist=results[0].pose.leftWrist.x
            right_wrist=results[0].pose.rightWrist.x
            difference= floor(left_wrist - right_wrist)
            console.log("left_wrist =" + left_wrist + "right_wrist =" + right_wrist + "difference =" + difference)

        }
            
}

function draw(){
    background('#1cdae8')
    document.getElementById("empty_span").innerHTML="Width and Height of the square is:" + difference
    fill('pink')
    stroke('purple')
    circle(noseX,noseY,difference)
}
