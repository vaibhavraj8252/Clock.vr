var hour, minute, second;
var hangle, mangle, sangle;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES)
}

function draw() {
  background(200); 
  translate(250,250);
  rotate(-90)
  push()
  noFill()
  strokeWeight(5)
  ellipse (0,0,430)
  pop()
  push()
  textFont("audiowide")
  rotate(90)
  textSize(20)
  text("Vaibhav Raj",-40,-120)
  pop()
  push()
  rotate(90)
  textSize(40)
  strokeWeight(6)
  fill ("black")
  textFont ("algerian")
  text("XII",-15,-180)
  text("VI",-15,210)
  text("III",170,15)
  text("IX",-200,15)
  text()
  pop()
 h= hour()
 m= minute()
 s=second()
 console.log(hour%12,minute,second)
 mangle= map(m,0,60,0,360)
 sangle= map(s,0,60,0,360)
 hangle= map(h%12,0,12,0,360)
 

push ()
rotate (hangle)
 stroke ("red")
 strokeWeight (15)
line (0,0,100,0)
pop()

push ()
rotate (mangle)
 stroke ("blue")
 strokeWeight (10)
line (0,0,165,0)
pop()

push ()
 rotate (sangle)
 stroke ("green")
 strokeWeight (8)
line (0,0,180,0)
pop ()


  drawSprites();
}