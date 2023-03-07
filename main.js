let angle = 0;
let r = 150;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  background(0, 20);
  // stroke(255);
  // strokeWeight(4);
  // noFill();
  translate(width/2, height/2)
  // let r = 150;
  //circle(0, 0, r * 2);

  strokeWeight(20);
  stroke(252,238, 33);
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);
  
  angle += 0.02;
  r += random(-2, 2);
}
