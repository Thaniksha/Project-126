song1=""
song2=""
rightWristX="";
rightWristY="";
leftWristX="";
leftWristY="";
scoreLeftWrist="";
song_stay="";



function preload(){
        song1=loadSound("Stay.mp3");
        song2=loadSound("Shape_of_u.mp3");
   }
       
function setup(){
             canvas=createCanvas(450,450);
             canvas.center()
        
             video=createCapture(VIDEO)
             video.hide()

             PoseNet=ml5.poseNet(video,modelLoaded);
             PoseNet.on("pose",gotPoses);
         }

 function modelLoaded(){
            console.log("Model Loaded Successfully")
        }

  function gotPoses(results){
       if(results.length>0){

          scoreLeftWrist=results[0].pose.keypoints[9].score;
          console.log(scoreLeftWrist);

           rightWristX=results[0].pose.rightWrist.x;
           rightWristY=results[0].pose.rightWrist.y;
           console.log("RightWristX=" +rightWristX +"RightWristY="+rightWristY);
           scoreLeftWrist=results[0].pose.keypoints[9].score;
           console.log("ScoreLeftWrist="+scoreLeftWrist);
       
           leftWristX=results[0].pose.leftWrist.x;
           leftWristY=results[0].pose.leftWrist.y;
           console.log("LeftWristX="+leftWristX+"LeftWristY="+leftWristY);
       }
    }       
 function draw(){
             image(video,0,0,450,450);
             fill("red");
             stroke("black");
        
             song_stay=song1.isPlaying();
             console.log(song_stay);

     if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop();
        if(song_stay == false){
            song1.play();
        }
        else{
            document.getElementById("song_name").innerHTML="Song Name:STAY song"
        }
        
     }
    
         }
 function play(){
             song1.play()
             song1.setVolume(1);
             song1.rate(1);
             
         }
     
    
