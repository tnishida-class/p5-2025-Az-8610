// チェッカー
function setup() {
  createCanvas(200, 200);

  const size = width / 8; // マスの一辺の長さ


  noStroke();
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j

      if ((i + j) % 2 == 1) {
        fill(100);

      }

      else {
        fill(255);
      }
      rect(size * i, size * j, size, size);

      if ((i + j) % 2 == 1 && j < 3) {
        fill(255, 0, 0);
        ellipse(size * i + 12.5, size * j + 12.5, size-3);

      }

      else if ((i + j) % 2 == 1 && 4 < j) {
        fill(0);
        ellipse(size * i + 12.5, size * j + 12.5, size-3);
      }


    }
  }
}





