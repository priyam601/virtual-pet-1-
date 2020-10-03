
var dog,happyDog,food,database;
var foodstock,dog_img;




function preload()
{
dog = loadImage("Dog.png");
dog_img = loadImage("Dog.png");
	
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  console.log(database);

  foodstock=database.ref('Food');
  foodstock.on("value",readStock,writeStock);
  
}


function draw() {  

  background(46, 139, 87);
  drawSprites();
  //add styles here
  image(dog,160,100,200,200)

  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage("dog",dog_img);


  }

  readStock();
  writeStock();

}

function readStock(data){

  var foodRef=database.ref('Food');
  foodRef.on("value",function(data){
  foodval=data.val();

  })
  


}
function writeStock(x){

  database.ref('/').update({
    Food:10

  })

}



