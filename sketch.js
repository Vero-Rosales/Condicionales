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
  drawHeart(mouseX, mouseY, 50); // Dibuja un corazón en lugar de un círculo
}

// Función para dibujar un corazón
function drawHeart(x, y, size) {
  beginShape();
  vertex(x, y);
  // Parte izquierda del corazón
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  // Parte derecha del corazón
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}
