

  var pizLeftX = 125
  var pizLeftY = 100
  
  var pizRightX = 375
  var pizRightY = 100
  
  var pepColor = 'rgb(100%,0%,10%)'; 
  var pepSize = 67
  
  var offsetX = 0;
  var offsetY = 0;
  
  var backgroundCounter = 0;


console.log(pizRightY)


function setup() {
  createCanvas(500,500)

   
}



function draw() {

 // background(0, 0, 255);
 if (backgroundCounter == 0) {
    background('#fae');
  } else if (backgroundCounter == 1) {
    background('rgb(0,255,100)');
  } else if (backgroundCounter == 2) {
    background(0, 200, 255);
  } else {
    backgroundCounter = 0;
  }

  
  offsetX = map(mouseX, 0, width, -10,10);
  offsetY = map(mouseY, 0, height, -10,10);

  //pizza
  fill(255, 204, 0);
  triangle(250, 400, pizLeftX, pizLeftY, pizRightX, pizRightY);
 
  
  
  //crust
  fill(230,150,0);
  quad(145,150, 355, 150, pizRightX, pizRightY, pizLeftX, pizLeftY)
  

  
  //perperoni
  fill(pepColor);
  //ellipse(275,187,pepSize,pepSize);
  ellipse (275 + offsetX,187 + offsetY,pepSize,pepSize)
  //arc(200, 200, pepSize, pepSize,PI, HALF_PI+QUARTER_PI, CHORD);
  arc(200 + offsetX, 200 + offsetY, pepSize, pepSize, PI, HALF_PI+QUARTER_PI, CHORD)
  arc(258 + offsetX, 300 + offsetY, pepSize, pepSize, QUARTER_PI, 0, CHORD);
  
  
  
}


function mouseReleased() {
 backgroundCounter = backgroundCounter + 1;
}
  