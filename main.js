song1="";
song2="";
rightWristX=0;
rightWristY=0;
leftWristX=0;
leftWristY=0;
scoreLeftWrist="";
song1_status="";
song2_status="";
scoreRightWrist="";



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
           console.log(results);

          scoreLeftWrist=results[0].pose.keypoints[9].score;
          console.log("LeftWrist_score="+scoreLeftWrist);
          scoreRightWrist=results[0].pose.keypoints[10].score;
          console.log("RightWrist_score="+scoreRightWrist);

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
        
             song1_status=song1.isPlaying();
             console.log("Song_shape_of_u"+song2_status)
             song2_status=song2.isPlaying();
             console.log("Song_stay="+song1_status);

     if(scoreLeftWrist>0.2){
        circle(leftWristX,leftWristY,20);
        song1.stop();
        if(song2_status == false){
            song2.play();
            document.getElementById("song_name").innerHTML="Song Name:Shape of you song"
        }
        if(scoreRightWrist>0.2){
            circle(rightWristX,rightWristY,20);
            song2.stop();
            if(song1_status == false){
                song1.play();
                son
                document.getElementById("song_name").innerHTML="Song Name:Stay song"
            }
        
     }
    
    }
         }
 function play(){
             song.play()
             song.setVolume(1);
             song.rate(1);
             
         }
     
    
