const levels = [
  {
    id: 1,

    // 📐 Tamaño del nivel (coincide con el PNG)
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/gimnasio.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 400,
      startY: 320,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/juanchi_idle.png",
      width: 300,
      height: 300,
      x: 40,
      y: 250,
    },

    // 🗨️ Zona de diálogo (para la tecla E)
    dialog: {
      width: 150,
      height: 150,
      x: 40,
      y: 250,
      text: "Bienvenido al primer círculo del Infierno.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 850,
        y: 65,
        width: 100,
        height: 90,
      },
      down: null, // en el primer piso no hay bajar
    },
  },
  {
    id: 2,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/construccion.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 150,
      startY: 160,
    },

    // 🧑‍🤝‍🧑 Amiga del piso
    friend: {
      img: "assets/friends/cata_idle.png",
      width: 200,
      height: 200,
      x: 670,
      y: 360,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 200,
      x: 670,
      y: 360,
      text: "En construcción permanente, como este infierno.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        width: 100,
        height: 50,
        x: 810,
        y: 220,
      },
      down: {
        width: 100,
        height: 100,
        x: 160,
        y: 450,
      },
    },
  },
  {
    id: 3,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/salon.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 200,
      startY: 350,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/azul_idle.png",
      width: 250,
      height: 250,
      x: 400,
      y: 150,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 100,
      height: 100,
      x: 400,
      y: 150,
      text: "El salón siempre parece tranquilo… hasta que hablás demasiado.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 800,
        y: 250,
        width: 100,
        height: 90,
      },
      down: {
        x: 250,
        y: 450,
        width: 75,
        height: 75,
      },
    },
  },
  {
    id: 4,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/pieza_aure.png",

    // 🧍 Nano
    nano: {
      width: 250,
      height: 250,
      startX: 0,
      startY: 400,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/aure_idle.png",
      width: 250,
      height: 250,
      x: 150,
      y: 200,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 250,
      height: 250,
      x: 150,
      y: 200,
      text: "No toques nada… todo está exactamente como debería estar.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 10,
        y: 500,
        width: 100,
        height: 90,
      },
      down: {
        x: 850,
        y: 450,
        width: 100,
        height: 90,
      },
    },
  },
];
