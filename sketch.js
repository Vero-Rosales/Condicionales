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
  drawHeart(mouseX, mouseY, 50);
}

function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);

  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);

  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
