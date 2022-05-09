song1=""
song2=""

function preload(){
        song1=loadSound("Stay.mp3");
        song2=loadSound("Shape_of_u.mp3");
   }
       
function setup(){
             canvas=createCanvas(450,450);
             canvas.center()
        
             video=createCapture(VIDEO)
             video.hide()
         }
 function draw(){
             image(video,0,0,450,450);
        
         }
 function play(){
             songs.play()
         }
     
