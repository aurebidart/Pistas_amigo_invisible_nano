const nanoImg = document.getElementById("nano-img");

const nanoIdle = new Image();
nanoIdle.src = "assets/nano/nano_idle.png";

const nanoWalk = new Image();
nanoWalk.src = "assets/nano/nano_walk.png";

const nanoState = {
  x: 0,
  y: 0,
  speed: 3,
  moving: false,
  direction: "right", // "left" | "right"
};

function updateNanoPosition() {
  let isMoving = false;

  // ⬅️ izquierda
  if (keys.left) {
    nanoState.x -= nanoState.speed;
    nanoState.direction = "left";
    isMoving = true;
  }

  // ➡️ derecha
  if (keys.right) {
    nanoState.x += nanoState.speed;
    nanoState.direction = "right";
    isMoving = true;
  }

  // ⬆️ arriba
  if (keys.up) {
    nanoState.y -= nanoState.speed;
    isMoving = true;
  }

  // ⬇️ abajo
  if (keys.down) {
    nanoState.y += nanoState.speed;
    isMoving = true;
  }

  // 🧱 límites del nivel
  nanoState.x = Math.max(
    0,
    Math.min(
      nanoState.x,
      currentLevelData.size.width - currentLevelData.nano.width
    )
  );

  nanoState.y = Math.max(
    0,
    Math.min(
      nanoState.y,
      currentLevelData.size.height - currentLevelData.nano.height
    )
  );

  // aplicar posición
  nano.style.left = nanoState.x + "px";
  nano.style.top = nanoState.y + "px";

  // 🎨 sprite
  nanoImg.src = isMoving ? nanoWalk.src : nanoIdle.src;

  // 🔄 orientación
  nanoImg.style.transform =
    nanoState.direction === "left" ? "scaleX(-1)" : "scaleX(1)";

  nanoState.moving = isMoving;
}
