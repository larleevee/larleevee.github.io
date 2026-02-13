//number of folds in the "paper"
let folds = 6;   

let angle = 360 / folds;

function setup() { 
  createCanvas(window.innerWidth-80, window.innerHeight-200);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  translate(width / 2, height / 2);
  strokeWeight(5);
  stroke(color(204,229,255))

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) { //if mouse in canvas

    //get values so line can be drawn between two points
    let currentX = mouseX - width / 2;
    let prevX = pmouseX - width / 2;

    let currentY = mouseY - height / 2;
    let prevY = pmouseY - height / 2;
    
    //if held down, draw the line between the two points
    if (mouseIsPressed) {

      //for each segment of the "paper"
      for (let i = 0; i < folds; i++) {
        rotate(angle); //get in starting position
        line(currentX, currentY, prevX, prevY); //line between these two points
        push(); //grp start
        scale(1, -1); //reflect on "fold line"
        line(currentX, currentY, prevX, prevY); //draw the same line again, reflected on the fold
        pop(); //grp end

      }
    }
  }
}