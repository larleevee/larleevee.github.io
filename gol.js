// 1 == alive
// 0 == dead

let cols;
let rows;
let main_grid;

//helper function to generate random RGB colour value
function generate_rand(){
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  return(color(R,G,B));
}

//helper function to make matrices
function generate_matrix(cols, rows) {
  let matrix = new Array(cols);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(rows);
  }
  return matrix;
}

// reset board when mouse is pressed
function mousePressed() {
  rand_fill();
}

//create canvas + define globals
function setup() {
  frameRate(10);
  createCanvas(1000, 700);
  resolution = 20;

  //make the squares
  rows = height / resolution;
  cols = width / resolution;
  rand_fill();
}

//randomly fill grid
function rand_fill() {
  main_grid = generate_matrix(cols, rows);
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {
      main_grid[x][y] = floor(random(2)); //either alive or dead, 1 or 2
    }
  }
}

function draw() {
  background(color(0,0,0));
  create_next()
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x_coord = i * resolution;
      let y_coord = j * resolution;
      if (main_grid[i][j] == 1) {
        fill(generate_rand());
        stroke(0);
        rect(x_coord, y_coord, resolution - 1, resolution - 1); //draws rect in the right place
      }
    }
  }
}

function create_next(){
  let next_iteration = generate_matrix(cols, rows); //blank grid

  //loop through to work out state of next iteration
  for (let x = 0; x < cols; x++) {
    for (let y = 0; y < rows; y++) {

      let current_iteration = main_grid[x][y];
      let neighbours = count_neighbours(main_grid, x, y);

      //rule 4: reproduction
      if (current_iteration == 0 && neighbours == 3) {
        next_iteration[x][y] = 1;
      } 

      //rules 1 & 3: underpopulation & overpopulation
      else if (current_iteration == 1 && (neighbours < 2 || neighbours > 3)) {
        next_iteration[x][y] = 0;
      }

      //rule 2: is alive with 2 or 3 live neighbours, lives on
      else {
        next_iteration[x][y] = current_iteration;
      }

    }
  }

  main_grid = next_iteration; //update
}

//count how many alive cells around a given cell
function count_neighbours(main_grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      //mod to wrap around grid :)
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += main_grid[col][row];
    }
  }
  sum -= main_grid[x][y];
  return sum;
}