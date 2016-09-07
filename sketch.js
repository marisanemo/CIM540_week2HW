

  var pizLeftX = 125
  var pizLeftY = 100
  
  var pizRightX = 375
  var pizRightY = 100
  
  var pepColor = 'rgb(100%,0%,10%)'; 
  var pepSize = 70
  


console.log(pizRightY)


function setup() {
  createCanvas(500,500)

   background(0, 0, 255);
}



function draw() {


  //pizza
  fill(255, 204, 0);
  triangle(250, 400, pizLeftX, pizLeftY, pizRightX, pizRightY);
 
  
  
  //crust
  fill(230,150,0);
  quad(145,150, 355, 150, pizRightX, pizRightY, pizLeftX, pizLeftY)
  

  
  //perperoni
  fill(pepColor);
  ellipse(275,187,pepSize,pepSize);
  arc(200, 200, pepSize, pepSize,PI, HALF_PI+QUARTER_PI, CHORD);
  arc(258, 300, pepSize, pepSize, QUARTER_PI, 0, CHORD);
  

  
  
}
  