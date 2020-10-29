var umbrella
var thunderboltImage;
var walkingManImage;
var thunderbolt1Image,thunderbolt2Image,thunderbolt3Image,thunderbolt4Image;
var walkingImage1,walkingImage2,walkingImage3,walkingImage4,walkingImage5,walkingImage6,walkingImage7,walkingImage8;

function preload(){
   // thunderBoltImages
    thunderbolt1Image.loadImage("proc41images/images/thunderbolt/1.png");
    thunderbolt2Image.loadImage("proc41images/images/thunderbolt/2.png");
    thunderbolt3Image.loadImage("proc41images/images/thunderbolt/3.png");
    thunderbolt4Image.loadImage("proc41images/images/thunderbolt/4.png");
    //Walking with umbrella images
    walkingImage1.loadImage("proc41Images/images/Walking Frame/walking_1.png");
    walkingImage2.loadImage("proc41Images/images/Walking Frame/walking_2.png");
    walkingImage3.loadImage("proc41Images/images/Walking Frame/walking_3.png");
    walkingImage4.loadImage("proc41Images/images/Walking Frame/walking_4.png");
    walkingImage5.loadImage("proc41Images/images/Walking Frame/walking_5.png");
    walkingImage6.loadImage("proc41Images/images/Walking Frame/walking_6.png");
    walkingImage7.loadImage("proc41Images/images/Walking Frame/walking_7.png");
    walkingImage8.loadImage("proc41Images/images/Walking Frame/walking_8.png");
    
}

function setup(){
   createCanvas(250,1000);
    image(walkingManImage,600,10,50,50);
    image(thunderboltImage,100,50,50,50);

    var umbrella= createSprite(100,200,30,40);

}


function draw(){
    umbrella.display();
    drop.display();
}   

function spawnThunderbolts() {
    if(World.frameCount % 10 === 0) {
        var thunderbolt = createSprite(400,365,10,40);
          
          //generate random thunderbolts
        var rand = randomNumber(1,4);
        thunderbolt.addImage("thunderbolt" + rand);
          
          //assign lifetime to the thunderbolts           
        thunderbolt.lifetime = 70;
        }
      }
