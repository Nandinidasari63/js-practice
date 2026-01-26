let dino;
let velocity;
let gravity;
let ground = 300;
let obstacle;

let dinoBase;
let dinoImages = [];
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
    handleInput();
    updateDino();
    updateObstacle();

    if (checkCollision()) {
      endGame();
    }
  }

  drawScene();
  drawUI();
}

// ================= UPDATE LOGIC =================

function handleInput() {
  if (keyIsPressed && key === "ArrowUp" && dino.y === ground) {
    velocity.y = -28;
  }
}

function updateDino() {
  velocity.add(gravity);
  dino.add(velocity);

  if (dino.y > ground) {
    dino.y = ground;
    velocity.y = 0;
  }
}

function updateObstacle() {
  obstacle.x -= 6;

  if (obstacle.x < 0) {
    obstacle.x = width;
  }
}

// ================= COLLISION =================

function checkCollision() {
  let dinoBox = getDinoHitbox();
  let cactusBox = getCactusHitbox();

  let horizontal = dinoBox.right > cactusBox.left &&
                   dinoBox.left < cactusBox.right;

  let vertical = dinoBox.bottom > cactusBox.top &&
                 dinoBox.top < cactusBox.bottom;

  return horizontal && vertical;
}

function getDinoHitbox() {
  return {
    left: dino.x + DINO_PAD_X,
    right: dino.x + 60 - DINO_PAD_X,
    top: dino.y - 60 + DINO_PAD_Y,
    bottom: dino.y - DINO_PAD_Y
  };
}

function getCactusHitbox() {
  return {
    left: obstacle.x + CACTUS_PAD_X,
    right: obstacle.x + 20 - CACTUS_PAD_X,
    top: obstacle.y - 30 + CACTUS_PAD_Y,
    bottom: obstacle.y - CACTUS_PAD_Y
  };
}

// ================= DRAWING =================

function drawScene() {
  drawGround();
  drawDino();
  drawObstacle();
}

function drawGround() {
  stroke(0);
  line(0, ground, width, ground);
}

function drawDino() {
  let y = dino.y - 60;

  image(dinoBase, dino.x, y, 60, 60);

  if (dino.y === ground && !isGameOver) {
    let index = floor(frameCount / 8) % dinoImages.length;
    image(dinoImages[index], dino.x, y, 60, 60);
  }
}

function drawObstacle() {
  image(cactus, obstacle.x, obstacle.y - 30, 20, 30);
}

function drawUI() {
  let score = floor(frameCount / 5);

  fill(0);
  textSize(20);
  text("Score: " + score, 280, 30);

  if (isGameOver) {
    textSize(28);
    fill("tomato");
    text("GAME OVER", 120, 200);
    text("Score: " + score, 130, 230);
  }
}

// ================= GAME OVER =================

function endGame() {
  isGameOver = true;
  noLoop();
}
