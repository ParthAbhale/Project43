function setup() {
  createCanvas(600,600);
  
}

function draw() {
  background("black");  
  let hr = hour();
  let mn = minute();
  let sc = second();

  fill("white")
  textSize(15)
  text( hr + ':' + mn + ':' + sc,width/2-30,50)

  translate(300,300)
  rotate(-90)

  strokeWeight(8)
  stroke("red")
  noFill();
  let secondAngle = map(sc,0,60,0,360)
  arc(0,0,400,400,0,secondAngle)

  push()
  rotate(secondAngle)
  stroke("red")
  line(0,0,150,0)
  pop()

  stroke("green")
  noFill();
  let minuteAngle = map(mn,0,60,0,360)
  arc(0,0,380,380,0,minuteAngle)

  push()
  rotate(minuteAngle)
  stroke("green")
  line(0,0,100,0)
  pop()

  stroke("blue")
  noFill();
  let hourAngle = map(hr % 12,0,12,0,360)
  arc(0,0,360,360,0,hourAngle)

  push()
  rotate(hourAngle)
  stroke("blue")
  line(0,0,70,0)
  pop()

  

}