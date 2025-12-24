const nanoState = {
  x: 0,
  y: 0,
  speed: 2,
};

function updateNanoPosition() {
  if (keys.left) {
    nanoState.x -= nanoState.speed;
  }

  if (keys.right) {
    nanoState.x += nanoState.speed;
  }

  if (keys.up) {
    nanoState.y -= nanoState.speed;
  }

  if (keys.down) {
    nanoState.y += nanoState.speed;
  }

  // límites del escenario
  nanoState.x = Math.max(0, nanoState.x);
  nanoState.x = Math.min(
    nanoState.x,
    currentLevelData.size.width - currentLevelData.nano.width
  );
  nanoState.y = Math.max(0, nanoState.y);
  nanoState.y = Math.min(
    nanoState.y,
    currentLevelData.size.height - currentLevelData.nano.height
  );

  nano.style.left = nanoState.x + "px";
  nano.style.top = nanoState.y + "px";
}
