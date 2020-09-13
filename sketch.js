var a, b;

function setup() {
  createCanvas(800,400);
  
  //create a and b variables
  a = createSprite(400, 400, 50, 80);
  b = createSprite(400, 0, 50, 80);

  //set the rectangles colors
  a.shapeColor = 'blue';
  b.shapeColor = 'blue';
}

function draw() {
  //background color
  background(177, 255, 255); 
  
  //chow colider of a and b variables
  a.debug = true;
  b.debug = true;
 
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(touch(a, b)){
    a.shapeColor = 'red';
    b.shapeColor = 'yellow';
  }
  else{
    a.shapeColor = 'blue';
    b.shapeColor = 'blue';
  }

  drawSprites();
}

