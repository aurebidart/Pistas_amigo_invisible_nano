const dialog = document.getElementById("dialog");
const dialogText = document.getElementById("dialog-text");
const passwordModal = document.getElementById("password-modal");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const passwordError = document.getElementById("password-error");
const passwordCancel = document.getElementById("password-cancel");

passwordCancel.addEventListener("click", closePasswordModal);
passwordSubmit.addEventListener("click", checkPassword);

let passwordOpen = false;

function openDialog(dialogData) {
  currentDialog = dialogData.lines;
  dialogIndex = 0;
  dialogOpen = true;

  nanoImg.src = "./assets/nano/nano_idle.png";
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

function advanceDialog() {
  dialogIndex++;

  if (dialogIndex >= currentDialog.length) {
    closeDialog();
    return;
  }

  showDialogLine();
}

function closeDialog() {
  dialog.classList.add("hidden");
  dialogOpen = false;
  currentDialog = null;

  // 🔐 SOLO si el diálogo fue con Flor
  if (currentLevelData.final) {
    openPasswordModal();
  }
}

const validPasswords = [
  "flor",
  "florci",
  "flordios",
  "florencia",
];

function openPasswordModal() {
  passwordOpen = true;
  passwordModal.classList.remove("hidden");
  passwordInput.value = "";
  passwordError.classList.add("hidden");
  passwordInput.focus();
}

function checkPassword() {
  const value = passwordInput.value.trim().toLowerCase();

  if (validPasswords.includes(value)) {
    winGame();
  } else {
    passwordError.classList.remove("hidden");
  }
}

passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPassword();
  }
});

function closePasswordModal() {
  passwordOpen = false;
  passwordModal.classList.add("hidden");
}
