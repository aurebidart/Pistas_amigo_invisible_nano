const levels = [
  {
    id: 1,

    // 📐 Tamaño del nivel (coincide con el PNG)
    size: {
      width: 1000,
      height: 610,
    },

    // 🖼️ Fondo
    background: "./assets/levels/gimnasio.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 400,
      startY: 320,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/juanchi_idle.png",
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
          speaker: "friend",
          text: "¡Hola brooo!!! Que onda? Viste estoy levantando una banda de peso.",
        },
        {
          speaker: "fiend",
          text: "¿Vas a la fiesta de hoy?",
        },
        {
          speaker: "nano",
          text: "¡Faaa, un monton!",
        },
        {
          speaker: "nano",
          text: "Si quiero ir pero primero tengo que adivinar quien es mi amigo invisible para entrar a la fiesta.",
        },
        {
          speaker: "friend",
          text: "Mmm, no te puedo ayudar mucho..."
        },
        {
          speaker: "friend",
          text: "Pero si te enteras quien es, decile que venga a entrenar.",
        },
        {
          speaker: "friend",
          text: "Hace rato me viene prometiendo que va a arrancar",
        },
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
    background: "./assets/levels/construccion.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 400,
      startY: 360,
    },

    // 🧑‍🤝‍🧑 Amiga del piso
    friend: {
      img: "./assets/friends/cata_idle.png",
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
          text: "¡Hola Cata! Muy cheeeeto tu edificio, hoy no tenías showcito?",
        },
        {
          speaker: "friend",
          text: "Sisi tengo el show nro 196 del año, pero termino acá y me voy a la fiesta. ¿Vos vas?",
        },
        {
          speaker: "nano",
          text: "Si... ¿Por esas casualidades viste a mi amigo invisible hoy?",
        },
        {
          speaker: "friend",
          text: "De hecho, no. Me dijo que me iba a acompañar al showcito para ir a primera fila.",
        },
        {
          speaker: "friend",
          text: "¡Buena suerte!",
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
    background: "./assets/levels/salon.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 200,
      startY: 350,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/azul_idle.png",
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
          text: "Giro, giro, pata arriba. Vuelo giro como mariposssssaaaaa",
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
    background: "./assets/levels/pieza_aure.png",

    // 🧍 Nano
    nano: {
      width: 250,
      height: 250,
      startX: 0,
      startY: 400,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/aure_idle.png",
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
          text: "La respuesta puede estar en cualquier rincón",
        },
        {
          speaker: "friend",
          text: "Tate atento,",
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
    background: "./assets/levels/cocina.png",

    // 🧍 Nano
    nano: {
      width: 250,
      height: 250,
      startX: 370,
      startY: 330,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/zoe_idle.png",
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
      lines: [
        {
          speaker: "friend",
          text: "¡Hola Nano!",
        },
        {
          speaker: "nano",
          text: "¡Zoe! Qué bueno verte por acá, ¿cómo andás?",
        },
        {
          speaker: "friend",
          text: "Bien, acá preparando unos postres para la fiesta de esta noche.",
        },
        {
          speaker: "nano",
          text: "Si queres te ayudo con los postres.",
        },
        {
          speaker: "friend",
          text: "No te preocupes. Ponete linda para esta noche nomás.",
        },
        {
          speaker: "nano",
          text: "Dale, nos vemos más tarde entonces.",
        }
      ],
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
    background: "./assets/levels/australia.png",

    // 🧍 Nano
    nano: {
      width: 200,
      height: 200,
      startX: 10,
      startY: 150,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/igna_idle.png",
      width: 200,
      height: 200,
      x: 750,
      y: 200,
    },

    // 🗨️ Zona de diálogo
    dialog: {
      width: 200,
      height: 200,
      x: 750,
      y: 200,
      lines: [
        {
          speaker: "nano",
          text: "¡Hola Igna! Qué bueno verte por acá, ¿cómo andás?",
        },
        {
          speaker: "friend",
          text: "¡Nano! Todo bien, acá explorando un poco Australia antes de la fiesta.",
        },
        {
          speaker: "friend",
          text: "Vi un canguro hace un rato, re loco.",
        },
        {
          speaker: "friend",
          text: "¿No viste nada?",
        },
        {
          speaker: "nano",
          text: "No, nada por ahora. Pero sigo buscando a mi amigo invisible.",
        },
        {
          speaker: "friend",
          text: "Bueno, suerte con eso. Nos vemos en la fiesta.",
        },
      ],
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
    background: "./assets/levels/pieza_gaston.png",

    // 🧍 Nano
    nano: {
      width: 230,
      height: 230,
      startX: 550,
      startY: 350,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/gaston_idle.png",
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
      lines: [
        {
          speaker: "nano",
          text: "¡Gasti! Tenía entendido que te ibas a quedar en Argentina",
        },
        {
          speaker: "friend",
          text: "¡Nano! Sí, tuve que venirme unos días.",
        },
        {
          speaker: "friend",
          text: "Igual aca aprovecho para estar con el gato. Alla tuve que limpiar y desinfectar todo",
        },
        {
          speaker: "nano",
          text: "Jaja, ¿Por qué? ¿Qué pasó?",
        },
        {
          speaker: "friend",
          text: "Pasa que tu amigo invisible... la alergía hace que no pueda parar de estornudar.",
        },
        {
          speaker: "nano",
          text: "¡No puede ser! Justo a mi me toca un amigo invisible con alergía a los gatos...",
        },
      ],
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
    background: "./assets/levels/biblioteca.png",

    // 🧍 Nano
    nano: {
      width: 150,
      height: 150,
      startX: 420,
      startY: 50,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/coti_idle.png",
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
      lines: [
        {
          speaker: "friend",
          text: "Podrá ser Alicia tan tonta de caerse al pozo?",
        },
        {
          speaker: "friend",
          text: "¡Nano! ¿Buscando algo interesante?",
        },
        {
          speaker: "nano",
          text: "¡Coti! Sí, estoy tratando de encontrar la contraseña para entrar a la fiesta.",
        },
        {
          speaker: "friend",
          text: "Mmm, no sé si acá vas a encontrar algo...",
        },
        {
          speaker: "friend",
          text: "Yo paso a buscar a Gastoncito y vamos juntos. Seguro lleve un poco de comida árabe.",
        },
        {
          speaker: "nano",
          text: "Dale, nos vemos allá entonces.",
        },
        {
          speaker: "friend",
          text: "Si encontras a tu amigo secreto, dejale esta bolsa que es para el martes"
        }
      ],
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
    background: "./assets/levels/cielo.png",

    // 🧍 Nano
    nano: {
      width: 300,
      height: 300,
      startX: 800,
      startY: 400,
    },

    // 🧑‍🤝‍🧑 Amigo del piso
    friend: {
      img: "./assets/friends/flor_idle.png",
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
          text: "¡Nanitooo! ¿Cómo estás?",
        },
        {
          speaker: "friend",
          text: "Llegaste al cielo FLORITOCRATICO",
        },
        {
          speaker: "friend",
          text: "Ando a mil, tengo la cabeza en las nubes",
        },
        {
          speaker: "friend",
          text: "¿Ya sabés quien es tu amigo invisible? Con tantas pistas creo que está claro",
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