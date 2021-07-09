var hr, mn, sc;

var hrAngle , mnAngle , scAngle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate (200,200)
  rotate(-90)

  hr = hour();
  mn = minute();
  sc = second();

  //this is the second's hand
  scAngle = map(sc,0,60,0,360);
  push()
  rotate(scAngle)  
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  //minute arm
  mnAngle = map(mn,0,60,0,360)
  push()
  rotate(mnAngle)  
  stroke("green")
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  //hour arm
  hrAngle = map(hr%12,0,12 ,0,360)
  push()
  rotate(hrAngle)  
  stroke("blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
  strokeWeight(10)

  noFill()
  // drawind are for sec hand
stroke("red")
arc(0,0,300,300,0,scAngle)

stroke("green")
arc(0,0,275,275,0,mnAngle)

stroke("blue")
arc(0,0,250,250,0,hrAngle)


}