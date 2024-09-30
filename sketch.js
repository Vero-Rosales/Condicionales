function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 0, 150, 150);
}

function draw() {
  if (mouseIsPressed) {
    fill("white");
  } else {
    fill("black");
  }
  drawStar(mouseX, mouseY, 30, 70, 5);
}

function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
