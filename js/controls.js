const keys = {
  left: false,
  right: false,
  up: false,
  down: false,
  interact: false
};

document.addEventListener("keydown", (e) => {
  switch (e.key.toLowerCase()) {
    case "a":
    case "arrowleft":
      keys.left = true;
      break;

    case "d":
    case "arrowright":
      keys.right = true;
      break;

    case "w":
    case "arrowup":
      keys.up = true;
      break;

    case "s":
    case "arrowdown":
      keys.down = true;
      break;

    case "e":
      keys.interact = true;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  switch (e.key.toLowerCase()) {
    case "a":
    case "arrowleft":
      keys.left = false;
      break;

    case "d":
    case "arrowright":
      keys.right = false;
      break;

    case "w":
    case "arrowup":
      keys.up = false;
      break;

    case "s":
    case "arrowdown":
      keys.down = false;
      break;

    case "e":
      keys.interact = false;
      break;
  }
});
