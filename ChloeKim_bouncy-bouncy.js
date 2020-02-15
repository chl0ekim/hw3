var ballY = 0;
var ballYSpeed = 3;

var ballX = 0;
var ballXSpeed = 5;

var ballY3 = 0;
var ballY3Speed = 7;

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220);
  ellipse(100,ballY, 20);
  ellipse(ballX,200,20);
  ellipse(300,ballY3,20);
 // ballX = ballX + 1; //moves the circle
  
  ballY = ballY + ballYSpeed;
    ballX = ballX + ballXSpeed;
  ballY3 = ballY3 + ballY3Speed;

  
  //teleports back to the og location
  if (ballY > height) {
    //ballX=0;
    //ballX=ballX-20; // keeps bouncing off the edge
    ballYSpeed=-ballYSpeed;
  }
  
  if (ballY < 0) {
    ballYSpeed = -ballYSpeed;
  }
  
  //bounce second ball
  if (ballX > height) {
    ballXSpeed=-ballXSpeed;
  }
  
  if (ballX < 0) {
    ballXSpeed = -ballXSpeed;
  }
  //bounce third ball
  if (ballY3 > height) {
    ballY3Speed=-ballY3Speed;
  }
  
  if (ballY3 < 0) {
    ballY3Speed = -ballY3Speed;
  }
} 
