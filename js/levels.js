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
      x: 100,
      y: 300,
    },

    // 🗨️ Zona de diálogo (para la tecla E)
    dialog: {
      width: 200,
      height: 100,
      x: 100,
      y: 300,
      lines: [
        {
          speaker: "nano",
          text: "¡Hola Juanchi! Hoy lo viste? UwU",
        },
        {
          speaker: "friend",
          text: "¡Hola brooo!!! Que onda? Viste estoy levantando una banda de peso. Pero la verdad que no se donde está, hoy no vino a entrenar.",
        },
        {
          speaker: "nano",
          text: "oh! Bueno voy a seguir buscando",
        },
        {
          speaker: "friend",
          text: "¡Preguntale a los chicos! Hoy nos encontramos todos a la noche en la fiesta",
        },
        {
          speaker: "nano",
          text: "¿Qué fiesta?",
        },
        {
          speaker: "friend",
          text: "No te regale bichito de luz. No te olvides de la contraseña para entrar",
        },
        {
          speaker: "nano",
          text: "¡Ahhh claro! ¿Qué contraseña era?",
        },
        {
          speaker: "nano",
          text: "...",
        },
        {
          speaker: "nano",
          text: "Bueno, voy a seguir buscando a ver si la averiguo",
        }
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
      width: 180,
      height: 180,
      x: 170,
      y: 250,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 100,
      x: 140,
      y: 220,
      lines: [
        {
          speaker: "friend",
          text: "Estoooo eeee esto por acá, y una columna por allá.",
        },
        {
          speaker: "friend",
          text: "¡Nano! ¿Cómo estás? ¿Te gusta mi edificio?",
        },
        {
          speaker: "nano",
          text: "¡Hola Cata! Muy cheeeeto tu edificio, hoy no tenías showcito? Me dijeron de una fiesta para ir",
        },
        {
          speaker: "friend",
          text: "Sisi tengo el show nro 196 del año, pero termino acá y me voy a la fiesta. Ya encontraste a tu amigo? Sin esa persona no vas a poder entrar mepa, una poronga la verdad. Yo lo necesito para algunas ideas.",
        },
        {
          speaker: "nano",
          text: "Aún no pipipipi, pero tengo que seguir. Mandá foto cuando estes en primera fila.",
        },
      ],
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
      lines: [
        {
          speaker: "friend",
          text: "Giro giro, pata arriba. Vuelo giro como mariposssssaaaaa",
        },
        {
          speaker: "friend",
          text: "NANO! Cuando venís a hacer pol conmigo?, alguien que conozco me viene prometiendo hace mucho.",
        },
        {
          speaker: "nano",
          text: "¡Hola Azullll! Yyy mira, si Queres hago unas paralelas o me paro de manos",
        },
        {
          speaker: "friend",
          text: "Es solo cuestión de flexibilidad! O no Leoooon?",
        },
        {
          speaker: "nano",
          text: "Vas hoy?",
        },
        {
          speaker: "friend",
          text: "Si hay mate si, pero tengo que pasar a buscar a los chicos antes en la albóndiga",
        },
        {
          speaker: "nano",
          text: "Perfecto, nos vemos más tarde",
        },
      ],
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
      lines: [
        {
          speaker: "friend",
          text: "Bueeeenas! ¿Qué hacés Nano? Salen unas partidas?",
        },
        {
          speaker: "nano",
          text: "¡Pibeee! No traje el bolso hoy, pero voy a la fiesta más tarde. Vos vas?",
        },
        {
          speaker: "friend",
          text: "Tengo que terminar un par de cosas y me prendo. ¿Tenés la contraseña?",
        },
        {
          speaker: "nano",
          text: "Todavía no la tengo, pero sigo buscando",
        },
        {
          speaker: "friend",
          text: "Si te sirve de algo, cada persona tiene una contraseña diferente. La tuya era algo relacionado con taranana taranana taranana taranana...",
        },
        {
          speaker: "nano",
          text: "Mmm interesante, voy a seguir buscando. Nos vemos más tarde entonces",
        },
      ],
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
      width: 200,
      height: 200,
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
    final: true,

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
      lines: [
        {
          speaker: "friend",
          text: "¡Nano! ¡Por fin te encuentro!",
        },
        {
          speaker: "nano",
          text: "¡Flor! Vamos a la fiesta? Ya se la contraseña",
        },
        {
          speaker: "friend",
          text: "¡Claro! Me alegro que hayas encontrado la contraseña. Vení, te estaba esperando",
        },
      ],
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