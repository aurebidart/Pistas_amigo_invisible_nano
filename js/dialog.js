const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialog-text");

function openDialog(dialogData) {
  currentDialog = dialogData.lines;
  dialogIndex = 0;

  dialogOpen = true;
  showDialogLine();
}

function showDialogLine() {
  const line = currentDialog[dialogIndex];

  dialogText.textContent = line.text;

  if (line.speaker === "friend") {
    positionDialogAboveFriend();
  } else {
    positionDialogAboveNano();
  }

  dialog.classList.remove("hidden");
}

function positionDialogAboveFriend() {
  const f = currentLevelData.friend;

  const x = f.x + f.width / 2;
  const y = f.y;

  dialog.style.left = x + "px";
  dialog.style.top = y + "px";
  dialog.style.transform = "translateX(-50%) translateY(-110%)";
}

function positionDialogAboveNano() {
  const x = nanoState.x + currentLevelData.nano.width / 2;
  const y = nanoState.y;

  dialog.style.left = x + "px";
  dialog.style.top = y + "px";
  dialog.style.transform = "translateX(-50%) translateY(-110%)";
}

function closeDialog() {
  dialog.classList.add("hidden");
  dialogOpen = false;
  currentDialog = null;
}

if (dialogOpen) {
  nanoImg.src = "assets/nano/nano_idle.png";
  return;
}
