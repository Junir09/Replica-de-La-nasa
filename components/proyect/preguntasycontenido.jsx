export const contenidosEspaciales = [
  {
    titulo: "Sistema Solar",

    niveles: {
      /* ───────────────────────────── FÁCIL ───────────────────────────── */
      facil: {
        texto: `
El Sistema Solar es nuestra “vecindad” cósmica. Está formado por el Sol y ocho planetas:
Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.
Los cuatro primeros son pequeños y rocosos; los cuatro últimos, grandes y gaseosos.
Algunos planetas poseen lunas, y Saturno es famoso por sus anillos.
Todo gira alrededor del Sol, que les da luz y calor.`,
        preguntas: [
          {
            texto: "¿Cuántos planetas hay en el Sistema Solar?",
            opciones: ["7", "8", "9", "10"],
            correcta: 1,
          },
          {
            texto: "¿Cuál es el planeta más cercano al Sol?",
            opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta se conoce como el planeta rojo?",
            opciones: ["Júpiter", "Marte", "Saturno", "Urano"],
            correcta: 1,
          },
          {
            texto: "¿Cuál es el planeta más grande?",
            opciones: ["Saturno", "Júpiter", "Tierra", "Neptuno"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta tiene famosos anillos visibles?",
            opciones: ["Júpiter", "Saturno", "Urano", "Neptuno"],
            correcta: 1,
          },
          {
            texto: "¿Cuál de estos NO es un planeta?",
            opciones: ["Plutón", "Mercurio", "Venus", "Urano"],
            correcta: 0,
          },
          {
            texto: "¿Qué estrella está en el centro del Sistema Solar?",
            opciones: ["Sirio", "El Sol", "Betelgeuse", "Proxima Centauri"],
            correcta: 1,
          },
          {
            texto: "¿Cuál planeta es conocido por su color amarillo‑dorado?",
            opciones: ["Venus", "Saturno", "Marte", "Urano"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta es “hermano” de la Tierra en tamaño y composición?",
            opciones: ["Venus", "Mercurio", "Neptuno", "Marte"],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta azul es el más lejano?",
            opciones: ["Urano", "Neptuno", "Saturno", "Júpiter"],
            correcta: 1,
          },
        ],
      },

      /* ──────────────────────────── ESTÁNDAR ─────────────────────────── */
      estandar: {
        texto: `
Los planetas se dividen en dos grupos: rocosos (Mercurio, Venus, Tierra, Marte) y gaseosos
(Júpiter, Saturno, Urano, Neptuno).  
Los rocosos tienen superficies sólidas; los gaseosos están compuestos de hidrógeno y helio.
Júpiter y Saturno destacan por su gran masa; Urano y Neptuno son “gigantes de hielo”.
Marte posee dos lunas pequeñas (Fobos y Deimos) y un gran volcán llamado Olimpo.
La Tierra tiene una sola luna, la Luna, que regula las mareas.
Entre Marte y Júpiter se encuentra el cinturón de asteroides.`,
        preguntas: [
          {
            texto: "¿Cuáles son los planetas rocosos?",
            opciones: [
              "Mercurio, Venus, Tierra, Marte",
              "Júpiter, Saturno, Urano, Neptuno",
              "Venus, Marte, Júpiter, Saturno",
              "Tierra, Urano, Neptuno, Mercurio",
            ],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta tiene los volcanes más grandes conocidos?",
            opciones: ["Tierra", "Marte", "Venus", "Mercurio"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta posee la Gran Mancha Roja?",
            opciones: ["Saturno", "Neptuno", "Júpiter", "Urano"],
            correcta: 2,
          },
          {
            texto: "¿Qué planeta tiene dos lunas llamadas Fobos y Deimos?",
            opciones: ["Mercurio", "Marte", "Urano", "Venus"],
            correcta: 1,
          },
          {
            texto: "¿Cómo se llama la única luna de la Tierra?",
            opciones: ["Luna", "Titán", "Europa", "Ío"],
            correcta: 0,
          },
          {
            texto: "¿Entre qué planetas se localiza el cinturón de asteroides?",
            opciones: [
              "Venus y Tierra",
              "Marte y Júpiter",
              "Júpiter y Saturno",
              "Saturno y Urano",
            ],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta gaseoso tiene un sistema de anillos menos visible?",
            opciones: ["Urano", "Neptuno", "Júpiter", "Saturno"],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta es conocido por su atmósfera densa de CO₂ y nubes de ácido sulfúrico?",
            opciones: ["Venus", "Mercurio", "Tierra", "Marte"],
            correcta: 0,
          },
          {
            texto: "¿Cuál de estos planetas tiene la rotación más rápida (día más corto)?",
            opciones: ["Júpiter", "Saturno", "Urano", "Tierra"],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta se llama “gigante de hielo” junto con Neptuno?",
            opciones: ["Júpiter", "Urano", "Saturno", "Plutón"],
            correcta: 1,
          },
        ],
      },

      /* ───────────────────────────── DIFÍCIL ──────────────────────────── */
      dificil: {
        texto: `
Algunos planetas presentan peculiaridades extremas:  
• Venus rota en sentido retrógrado y su día es más largo que su año.  
• Mercurio tiene la órbita más excéntrica y experimenta grandes variaciones térmicas.  
• Urano está inclinado 98°, “acostado” sobre su órbita.  
• Júpiter tiene el campo magnético más fuerte; Saturno, la densidad más baja (flotaría en agua).  
• Lunas como Europa (Júpiter) y Encélado (Saturno) poseen océanos subterráneos, potencialmente habitables.  
La Voyager 2 es la única nave que ha visitado Urano y Neptuno.`,
        preguntas: [
          {
            texto: "¿Qué planeta rota “al revés” (sentido retrógrado)?",
            opciones: ["Venus", "Mercurio", "Urano", "Saturno"],
            correcta: 0,
          },
          {
            texto: "¿Qué planeta tiene un día más largo que su año?",
            opciones: ["Mercurio", "Venus", "Tierra", "Marte"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta posee el campo magnético más fuerte?",
            opciones: ["Saturno", "Tierra", "Júpiter", "Neptuno"],
            correcta: 2,
          },
          {
            texto: "¿Cuál planeta tiene inclinación axial de ~98°?",
            opciones: ["Urano", "Neptuno", "Venus", "Júpiter"],
            correcta: 0,
          },
          {
            texto: "¿Qué luna de Saturno tiene géiseres que expulsan agua?",
            opciones: ["Titán", "Encélado", "Ío", "Ganimedes"],
            correcta: 1,
          },
          {
            texto: "¿Cuál fue la única sonda que visitó Urano y Neptuno?",
            opciones: ["Voyager 1", "Cassini", "Voyager 2", "New Horizons"],
            correcta: 2,
          },
          {
            texto: "¿Qué planeta tiene densidad menor que el agua?",
            opciones: ["Saturno", "Marte", "Mercurio", "Tierra"],
            correcta: 0,
          },
          {
            texto: "¿Qué lugar del Sistema Solar alberga la Gran Mancha Roja?",
            opciones: ["Urano", "Júpiter", "Neptuno", "Saturno"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta experimenta las mayores variaciones térmicas diarias?",
            opciones: ["Mercurio", "Venus", "Marte", "Tierra"],
            correcta: 0,
          },
          {
            texto: "¿Qué luna de Júpiter es famosa por su océano subterráneo?",
            opciones: ["Europa", "Ío", "Ganimedes", "Calisto"],
            correcta: 0,
          },
        ],
      },

      /* ──────────────────────────── HARDCORE ──────────────────────────── */
      hardcore: {
        texto: `
Los estudios más avanzados se centran en:  
• Plutón y otros objetos transneptunianos (OTN) del cinturón de Kuiper.  
• La dinámica de resonancia 3:2 entre Plutón y Neptuno.  
• El campo magnético desplazado y altamente inclinado de Neptuno.  
• Encélado (Saturno) y Europa (Júpiter) como mundos oceánicos potencialmente habitables.  
• Las sondas pioneras: Pioneer 10 (primer planeta exterior), Voyager 1 (llegó al espacio interestelar) y New Horizons (sobrevoló Plutón en 2015).`,
        preguntas: [
          {
            texto: "¿Qué sonda fue la primera en visitar Júpiter y salir del Sistema Solar interior?",
            opciones: ["Voyager 1", "Pioneer 10", "Cassini", "Galileo"],
            correcta: 1,
          },
          {
            texto: "¿Qué resonancia mantiene Plutón con Neptuno?",
            opciones: ["1:1", "3:2", "2:1", "5:3"],
            correcta: 1,
          },
          {
            texto: "¿En qué año sobrevoló New Horizons a Plutón?",
            opciones: ["2006", "2015", "2019", "1997"],
            correcta: 1,
          },
          {
            texto: "¿Qué satélite presenta géiseres de agua en su polo sur?",
            opciones: ["Europa", "Encélado", "Ío", "Titán"],
            correcta: 1,
          },
          {
            texto: "¿Cuál es la luna más grande del sistema solar?",
            opciones: ["Titán", "Ganimedes", "Calisto", "Europa"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta tiene el campo magnético más desplazado y con eje inclinado 47°?",
            opciones: ["Urano", "Neptuno", "Saturno", "Júpiter"],
            correcta: 1,
          },
          {
            texto: "¿Qué misión llegó al espacio interestelar en 2012?",
            opciones: ["Voyager 2", "Pioneer 11", "Voyager 1", "New Horizons"],
            correcta: 2,
          },
          {
            texto: "¿Cuál de estos OTN es el más masivo conocido?",
            opciones: ["Haumea", "Eris", "Makemake", "Sedna"],
            correcta: 1,
          },
          {
            texto: "¿Qué planeta fue reclasificado como planeta enano en 2006?",
            opciones: ["Ceres", "Plutón", "Eris", "Haumea"],
            correcta: 1,
          },
          {
            texto: "¿Qué luna joviana muestra intensa actividad volcánica impulsada por marea?",
            opciones: ["Europa", "Ío", "Ganimedes", "Callisto"],
            correcta: 1,
          },
        ],
      },
    },
  },
];
