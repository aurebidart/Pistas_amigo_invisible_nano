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
      width: 200,
      height: 200,
      x: 70,
      y: 300,
    },

    // 🗨️ Zona de diálogo (para la tecla E)
    dialog: {
      width: 150,
      height: 150,
      x: 40,
      y: 250,
      lines: [
        {
          speaker: "friend",
          text: "Bienvenido al primer círculo del Infierno.",
        },
        { speaker: "nano", text: "No recuerdo haber comprado entrada." },
        { speaker: "friend", text: "Acá nadie lo hace." },
      ],
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
];
