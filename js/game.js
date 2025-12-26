const scene = document.getElementById("scene");
const sceneBg = document.getElementById("scene-bg");
const nano = document.getElementById("nano");
const friend = document.getElementById("friend");
const friendImg = document.getElementById("friend-img");

let currentLevel = 0;
let currentLevelData = null;
let activeZone = null;
let dialogOpen = false;
let ladderLock = false;
let dialogIndex = 0;
let currentDialog = null;

function loadLevel(levelIndex) {
  const level = levels[levelIndex];

  // Tamaño del nivel
  scene.style.width = level.size.width + "px";
  scene.style.height = level.size.height + "px";

  // Fondo
  sceneBg.src = level.background;
  sceneBg.style.width = "100%";
  sceneBg.style.height = "100%";

  // Nano
  nano.style.width = level.nano.width + "px";
  nano.style.height = level.nano.height + "px";
  nano.style.left = level.nano.startX + "px";
  nano.style.top = level.nano.startY + "px";

  // Amigo
  friendImg.src = level.friend.img;
  friend.style.width = level.friend.width + "px";
  friend.style.height = level.friend.height + "px";
  friend.style.left = level.friend.x + "px";
  friend.style.top = level.friend.y + "px";

  const ladderUpEl = document.getElementById("ladder-up");
  const ladderDownEl = document.getElementById("ladder-down");

  // LADDER UP
  if (level.ladders.up) {
    ladderUpEl.style.display = "block";
    ladderUpEl.style.left = level.ladders.up.x + "px";
    ladderUpEl.style.top = level.ladders.up.y + "px";
    ladderUpEl.style.width = level.ladders.up.width + "px";
    ladderUpEl.style.height = level.ladders.up.height + "px";
  } else {
    ladderUpEl.style.display = "none";
  }

  // LADDER DOWN
  if (level.ladders.down) {
    ladderDownEl.style.display = "block";
    ladderDownEl.style.left = level.ladders.down.x + "px";
    ladderDownEl.style.top = level.ladders.down.y + "px";
    ladderDownEl.style.width = level.ladders.down.width + "px";
    ladderDownEl.style.height = level.ladders.down.height + "px";
  } else {
    ladderDownEl.style.display = "none";
  }

  currentLevelData = level;

  nanoState.x = level.nano.startX;
  nanoState.y = level.nano.startY;

  nano.style.top = nanoState.y + "px";

  console.log("Nivel cargado:", level.id);
}

function gameLoop() {
  if (!dialogOpen && !passwordOpen) {
    updateNanoPosition();
    checkInteractions();
  }
  handleInteractionKey();
  requestAnimationFrame(gameLoop);
}

function checkInteractions() {
  activeZone = null;

  // zona de diálogo
  if (currentLevelData.dialog && isInsideZone(currentLevelData.dialog)) {
    activeZone = {
      type: "dialog",
      data: currentLevelData.dialog,
    };
    showHint("Presioná E para hablar");
    return;
  }

  // ladder up
  if (
    currentLevelData.ladders.up &&
    isInsideZone(currentLevelData.ladders.up)
  ) {
    activeZone = {
      type: "ladderUp",
    };
    showHint("Presioná E para subir");
    return;
  }

  // ladder down
  if (
    currentLevelData.ladders.down &&
    isInsideZone(currentLevelData.ladders.down)
  ) {
    activeZone = {
      type: "ladderDown",
    };
    showHint("Presioná E para bajar");
    return;
  }

  hideHint();
}

function changeLevel(direction) {
  const nextLevel = currentLevel + direction;

  if (nextLevel < 0 || nextLevel >= levels.length) return;

  currentLevel = nextLevel;
  loadLevel(currentLevel);
}

function isInsideZone(zone) {
  return (
    nanoState.x + currentLevelData.nano.width > zone.x &&
    nanoState.x < zone.x + zone.width &&
    nanoState.y + currentLevelData.nano.height > zone.y &&
    nanoState.y < zone.y + zone.height
  );
}

const hint = document.getElementById("hint");

function showHint(text) {
  hint.textContent = text;
  hint.classList.remove("hidden");
}

function hideHint() {
  hint.classList.add("hidden");
}

let eWasPressed = false;

function handleInteractionKey() {
  if (keys.interact && !eWasPressed) {
    eWasPressed = true;

    if (!activeZone) return;

    // Diálogo
    if (activeZone.type === "dialog") {
      if (!dialogOpen) {
        openDialog(activeZone.data);
      } else {
        advanceDialog();
      }
      return;
    }

    // Subir
    if (activeZone.type === "ladderUp") {
      changeLevel(1);
    }

    // Bajar
    if (activeZone.type === "ladderDown") {
      changeLevel(-1);
    }
  }

  if (!keys.interact) {
    eWasPressed = false;
  }
}

function winGame() {
  passwordModal.innerHTML = `
    <div class="password-box">
      <p>🎉 ¡Ganaste el juego! 🎉</p>
      <p>Gracias por jugar</p>
    </div>
  `;
}

// 🚀 arrancamos el juego
loadLevel(currentLevel);

gameLoop();
