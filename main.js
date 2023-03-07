let angle = 0;
let r = 150;

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  translate(width/2, height/2)
  let r = 150;
  //circle(0, 0, r * 2);

  strokeWeight(20);
  stroke(252,238, 33);
  let x = r * cos(angle);
  let y = r * sin(angle);
  point(x, y);

  let increment = map(mouseX, 0, width, 0.01, PI);
  //noLoop();
  strokeWeight(4);
  beginShape();
  for (let i = 0; i < TWO_PI; i += increment) {
    let r1 = r + random(-10, 10);
    let x = r1 * cos(i);
    let y = r1 * sin(i);
    vertex(x,y);
  }
  endShape();
  angle += 0.02;
  r += random(-2, 2);
}
