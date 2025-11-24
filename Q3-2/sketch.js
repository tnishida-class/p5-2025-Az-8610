// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64);
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  if (keyIsDown(LEFT_ARROW)) { x -= 5; }
  if (keyIsDown(RIGHT_ARROW)) { x += 5; }
  if (keyIsDown("A".charCodeAt(0))) {
    if (keyIsDown(LEFT_ARROW)) { x -= 7; }
    if (keyIsDown(RIGHT_ARROW)) { x += 7; }
  }
  // BLANK[2] 重力とジャンプ


  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);
  y = constrain(y, 0, groundY - 48);

  // 位置を更新
  x += vx;
  y += vy;
  vy += g;

  if (y > groundY - 48 && keyIsDown("B".charCodeAt(0))) {
    vy = -1 * vy;
  }



  if (x > windowWidth) { x = 0; }
  else if (x < 0) { x = windowWidth; }


  // キャラクターを描く
  fill(255, 0, 0);
  ellipse(x, y, size, size);
  fill(255);
  textSize(40);
  text("M", x - 16, y - 20, size, size);
}