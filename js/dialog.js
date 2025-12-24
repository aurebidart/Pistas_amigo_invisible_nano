const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialog-text");

function openDialog(text) {
  const friend = currentLevelData.friend;

  dialogText.textContent = text;

  const x = friend.x + friend.width / 2;
  const y = friend.y;

  dialog.style.left = x + "px";
  dialog.style.top = y + "px";
  dialog.style.transform = "translateX(-50%) translateY(-110%)";

  dialog.classList.remove("hidden");
  dialogOpen = true;
}

function closeDialog() {
  dialog.classList.add("hidden");
  dialogOpen = false;
}
