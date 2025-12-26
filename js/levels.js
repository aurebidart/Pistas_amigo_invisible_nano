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
      startX: 400,
      startY: 360,
    },

    // 🧑‍🤝‍🧑 Amiga del piso
    friend: {
      img: "assets/friends/cata_idle.png",
      width: 200,
      height: 200,
      x: 140,
      y: 220,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 100,
      x: 140,
      y: 220,
      text: "En construcción permanente, como este infierno.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        width: 160,
        height: 60,
        x: 800,
        y: 270,
      },
      down: {
        width: 100,
        height: 70,
        x: 450,
        y: 500,
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
      width: 200,
      height: 200,
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
      width: 100,
      height: 50,
      x: 150,
      y: 200,
      text: "No toques nada… todo está exactamente como debería estar.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 880,
        y: 500,
        width: 100,
        height: 90,
      },
      down: {
        x: 10,
        y: 500,
        width: 100,
        height: 90,
      },
    },
  },
  {
    id: 5,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/cocina.png",

    // 🧍 Nano
    nano: {
      width: 250,
      height: 250,
      startX: 370,
      startY: 330,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/zoe_idle.png",
      width: 250,
      height: 250,
      x: 150,
      y: 100,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 150,
      height: 50,
      x: 150,
      y: 100,
      text: "Un gusto a verga lo que cocinan aca.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 750,
        y: 300,
        width: 100,
        height: 90,
      },
      down: {
        x: 450,
        y: 500,
        width: 100,
        height: 90,
      },
    },
  },
  {
    id: 6,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/australia.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 10,
      startY: 150,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/igna_idle.png",
      width: 200,
      height: 200,
      x: 750,
      y: 100,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 200,
      x: 750,
      y: 100,
      text: "Un gusto a verga lo que cocinan aca.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 472,
        y: 35,
        width: 100,
        height: 90,
      },
      down: {
        x: 450,
        y: 350,
        width: 100,
        height: 90,
      },
    },
  },
  {
    id: 7,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/pieza_gaston.png",

    // 🧍 Nano
    nano: {
      width: 230,
      height: 230,
      startX: 550,
      startY: 350,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/gaston_idle.png",
      width: 200,
      height: 200,
      x: 250,
      y: 300,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 100,
      x: 250,
      y: 300,
      text: "Un gusto a verga lo que cocinan aca.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 790,
        y: 180,
        width: 100,
        height: 90,
      },
      down: {
        x: 790,
        y: 450,
        width: 100,
        height: 90,
      },
    },
  },
  {
    id: 8,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/biblioteca.png",

    // 🧍 Nano
    nano: {
      width: 150,
      height: 150,
      startX: 420,
      startY: 50,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/coti_idle.png",
      width: 150,
      height: 150,
      x: 200,
      y: 350,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 150,
      height: 100,
      x: 200,
      y: 350,
      text: "Un gusto a verga lo que cocinan aca.",
    },

    // 🪜 Escaleras
    ladders: {
      up: {
        x: 700,
        y: 440,
        width: 80,
        height: 60,
      },
      down: {
        x: 460,
        y: 50,
        width: 70,
        height: 60,
      },
    },
  },
  {
    id: 9,

    // 📐 Tamaño del nivel
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "assets/levels/cielo.png",

    // 🧍 Nano
    nano: {
      width: 300,
      height: 300,
      startX: 800,
      startY: 400,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "assets/friends/flor_idle.png",
      width: 300,
      height: 300,
      x: 350,
      y: 150,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 300,
      height: 100,
      x: 350,
      y: 150,
      text: "Un gusto a verga lo que cocinan aca.",
    },

    // 🪜 Escaleras
    ladders: {
      up: null,
      down: {
        x: 50,
        y: 470,
        width: 100,
        height: 100,
      },
    },
  },
];
