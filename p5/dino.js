let dino;
let velocity;
let gravity;
let ground = 300;
let obstacle;

let dinoBase;        
let dinoImages = []; // only legs
let cactus;
let isGameOver = false;

// ---------- HITBOX PADDING ----------
const DINO_PAD_X = 15;
const DINO_PAD_Y = 10;

const CACTUS_PAD_X = 4;
const CACTUS_PAD_Y = 4;

function preload() {
  dinoBase = loadImage("dino.png");
  dinoImages[0] = loadImage("frontLeg.png");
  dinoImages[1] = loadImage("backLeg.png");
  cactus = loadImage("cactus.png");
}

function setup() {
  createCanvas(400, 400);

  dino = createVector(50, ground);
  velocity = createVector(0, 0);
  gravity = createVector(0, 1.8);

  obstacle = createVector(width, ground);
}

function draw() {
  background(255);

  if (!isGameOver) {
    velocity.add(gravity);
    dino.add(velocity);
  }

  if (dino.y > ground) {
    dino.y = ground;
    velocity.y = 0;
  }

  if (keyIsPressed && key === "ArrowUp" && dino.y === ground && !isGameOver) {
    velocity.y = -28;
  }

  if (!isGameOver) {
    obstacle.x -= 6;
  }

  if (obstacle.x < 0) {
    obstacle.x = width;
  }

  // ---------- DRAW GROUND ----------
  stroke(0);
  line(0, ground, width, ground);

  // ---------- DRAW DINO ----------
  if (dino.y === ground && !isGameOver) {
    let index = floor(frameCount / 8) % dinoImages.length;
    image(dinoBase, dino.x, dino.y - 60, 60, 60);
    image(dinoImages[index], dino.x, dino.y - 60, 60, 60);
  } else {
    image(dinoBase, dino.x, dino.y - 60, 60, 60);
  }

  // ---------- DRAW OBSTACLE ----------
  image(cactus, obstacle.x, obstacle.y - 30, 20, 30);

  // =================================================
  // HITBOX CALCULATION (THIS IS THE IMPORTANT PART)
  // =================================================

  // Dino hitbox (shrunken)
  let dinoLeft   = dino.x + DINO_PAD_X;
  let dinoRight  = dino.x + 60 - DINO_PAD_X;
  let dinoTop    = dino.y - 60 + DINO_PAD_Y;
  let dinoBottom = dino.y - DINO_PAD_Y;

  // Cactus hitbox (shrunken)
  let obsLeft   = obstacle.x + CACTUS_PAD_X;
  let obsRight  = obstacle.x + 20 - CACTUS_PAD_X;
  let obsTop    = obstacle.y - 30 + CACTUS_PAD_Y;
  let obsBottom = obstacle.y - CACTUS_PAD_Y;

  // ---------- AABB COLLISION ----------
  let horizontalOverlap = dinoRight > obsLeft && dinoLeft < obsRight;
  let verticalOverlap   = dinoBottom > obsTop && dinoTop < obsBottom;

  let collision = horizontalOverlap && verticalOverlap;

  // ---------- SCORE ----------
  let score = floor(frameCount / 5);
  fill(0);
  textSize(20);
  text("Score: " + score, 280, 30);

  // ---------- DEBUG HITBOXES (OPTIONAL) ----------
  /*
  noFill();
  stroke('red');
  rect(dinoLeft, dinoTop, dinoRight - dinoLeft, dinoBottom - dinoTop);

  stroke('blue');
  rect(obsLeft, obsTop, obsRight - obsLeft, obsBottom - obsTop);
  */

  // ---------- GAME OVER ----------
  if (collision && !isGameOver) {
    isGameOver = true;
    textSize(28);
    fill("tomato");
    text("GAME OVER", 120, 200);
    text("Score: " + score, 130, 230);
    noLoop();
  }
}
