// 最終課題を制作しよう
//動き回るターゲットをクリックすればクリアになるゲーム

let x, y, i;
let vx, vy;
let g = 1;
let touched;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 3;
  vy = 2;
  touched = false;
  textAlign(CENTER, CENTER);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


//ボールに触ったという条件の設定
function mousePressed() {
  touched = dist(mouseX, mouseY, x, y) < 55
}



function draw() {
  background(160, 192, 255);
  const size = height * 0.1;

  //ゲームクリア表示
  if (touched) {
    for (i = 0; i < 1000; i++) {
      noFill();
      stroke(248, 180, 0);
      strokeWeight(3);
      ellipse((windowWidth) / 2, (windowHeight) / 2, i * 10, i * 10);
    }
    noStroke();
    fill(255);
    textSize(200);
    text("Clear!", (windowWidth) / 2, (windowHeight) / 2);
    return;　//以降の処理を無効化
  }

//Aを押すことでボールが加速し、難易度アップ
  if (keyIsDown("A".charCodeAt(0))) {
    if (vx > 0) { vx = 20; }
    else { vx = -20; }
  }
  else{
    if (vx > 0) { vx = 3; }
    else { vx = -3; }
  }

  //制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -35, 20);
  x = constrain(x, 0, windowWidth);
  y = constrain(y, 0, windowHeight);

  //運動の規則
  x += vx;
  y += vy;
  vy += g;

  //画面端での跳ね返り処理
  if (x < 0 || x > width) { vx = -1 * vx; }

  //バウンドの強さをランダム化
  if (y > windowHeight) {
    vy = (random(-30, -10));
  }

//ターゲットを描く
  fill(255, 100, 0);
  ellipse(x, y, size, size);





}


