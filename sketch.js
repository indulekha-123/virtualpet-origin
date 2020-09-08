

//Create variables here
var dog,happydog,database,foodS,foodStock;
var dogImg;
var database;


function preload()
{
  //load images here
  dogImg=loadImage("Dog.png");
 dogImg1=loadImage("happydog.png");

}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
  dog=createSprite(200,285,2,5);
dog.addImage
("dog",dogImg);
dog.scale=0.25;


foodStock=database.ref('Food');
foodStock.on("Value",readStock)

}


function draw() {  
background(46, 139, 87);


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
dog.addImage("dog",dogImg1);

}



  drawSprites();
  //add styles here
textSize(15);
fill ("red");
stroke (225);
text("Press UP_ARROW Key To Feed Dragon Milk !",110,85);

  dog.display();

}

function readStock(data){
  foodS=data.val();

}

function writeStock (x){

  if(x<=0){
    x=0;

  }else{
    x=x-1;

  }
  database.ref('/').update({
    Food:x

  })
}


