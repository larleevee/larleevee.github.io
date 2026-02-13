let x = 320;
let y = 180;
let xstep = 2;
let ystep = 2;

let r = 50;

function setup() {
    createCanvas(window.innerWidth-80, window.innerHeight-200);
    //createCanvas(600,600)
}

function draw() {
  background(0);
  //ellipse(x,y,width,height)
  ellipse(x, y, r*2, r*2);
  x += xstep;
  y += ystep;
  if (x > width - r || x < r) {
    xstep = -xstep;
    fill(rand_colour());
    
  }
  if (y > height - r || y < r) {
    ystep = -ystep;
    fill(rand_colour());
  } 
}

//math.floor returns nearest integer
function rand_colour(){
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  return(color(R,G,B));
  }