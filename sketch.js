function setup() {
    createCanvas(650, 450);
    background("pink");
  }
  
  function draw() {
    stroke("Black");
    fill("rgb(62,10,10))");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 29, 19);
    }
  }