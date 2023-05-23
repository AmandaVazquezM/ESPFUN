const triviaQuestions = [
    {
      question: '¿Quién escribió "Don Quijote de la Mancha"?',
      options: ['Miguel de Cervantes', 'Gabriel García Márquez', 'Pablo Neruda'],
      answer: 0
    },
    {
      question: '¿Cuál es la figura retórica que consiste en exagerar?',
      options: ['Metáfora', 'Hipérbole', 'Anáfora'],
      answer: 1
    },
    {
      question: '¿Quién escribió "Romeo y Julieta"?',
      options: ['William Shakespeare', 'Federico García Lorca', 'Miguel de Cervantes'],
      answer: 0
    },
    {
      question: '¿Qué es un sinónimo?',
      options: ['Una palabra que suena igual que otra', 'Una palabra opuesta a otra', 'Una palabra similar a otra en significado'],
      answer: 2
    },
    {
      question: '¿Cuál es el verbo en la siguiente oración: "María come una manzana"?',
      options: ['María', 'come', 'manzana'],
      answer: 1
    },
    {
      question: '¿Qué es una vocal?',
      options: ['Una letra del abecedario', 'Un sonido gutural', 'Un tipo de comida'],
      answer: 0
    }, 
    {
      question: '¿Cuál es el género literario de "Cenicienta"?',
      options: ['Novela', 'Cuento de hadas', 'Poesía'],
      answer: 1
    },
    {
      question: '¿Quién escribió "Blancanieves y los siete enanitos"?',
      options: ['Hans Christian Andersen', 'Charles Perrault', 'Hermanos Grimm'],
      answer: 2
    },
    {
      question: '¿Qué es una sílaba?',
      options: ['Una parte de una palabra', 'Una oración completa', 'Un tipo de letra'],
      answer: 0
    },
    {
      question: '¿Cuál es el sustantivo en la siguiente oración: "El perro corre en el parque"?',
      options: ['perro', 'corre', 'parque'],
      answer: 0
    },
    {
      question: '¿Qué es una consonante?',
      options: ['Una letra del abecedario', 'Un sonido suave', 'Un tipo de canto'],
      answer: 0
    },
    {
      question: '¿Quién escribió "El principito"?',
      options: ['Antoine de Saint-Exupéry', 'J.K. Rowling', 'Roald Dahl'],
      answer: 0
    },
    {
      question: '¿Qué es una metáfora?',
      options: ['Una comparación usando "como"', 'Una repetición de sonidos', 'Una descripción exagerada'],
      answer: 0
    },
    {
      question: '¿Cuál es el adjetivo en la siguiente oración: "El gato negro es pequeño"?',
      options: ['gato', 'negro', 'pequeño'],
      answer: 1
    },
    {
      question: '¿Qué es una rima?',
      options: ['Un tipo de poema', 'Un final de palabra igual o similar', 'Una historia de amor'],
      answer: 1
    },
    {
      question: '¿Quién escribió "Las aventuras de Tom Sawyer"?',
      options: ['Mark Twain', 'Lewis Carroll', 'Jules Verne'],
      answer: 0
    },
    {
      question: '¿Qué es un verbo?',
      options: ['Una persona, lugar o cosa', 'Un sonido agradable', 'Una acción o estado'],
      answer: 2
    },
    {
      question: '¿Cuál es el adverbio en la siguiente oración: "Corro rápidamente"?',
      options: ['Corro', 'rápidamente'],
      answer: 1
    },
    {
      question: '¿Qué es una onomatopeya?',
      options: ['Un tipo de escritura', 'Una palabra inventada', 'Un sonido imitado'],
      answer: 2
    },
    {
      question: '¿Quién escribió "La sirenita"?',
      options: ['Hans Christian Andersen', 'Charles Perrault', 'Hermanos Grimm'],
      answer: 0
    },
    {
      question: '¿Qué es un sustantivo?',
      options: ['Un tipo de verbo', 'Un sonido fuerte', 'Una palabra que nombra a una persona, lugar o cosa'],
      answer: 2
    },
    {
      question: '¿Cuál es el género literario de "La Odisea"?',
      options: ['Novela', 'Drama', 'Poema épico'],
      answer: 2
    },
    {
      question: '¿Cuál es el antónimo de "alegre"?',
      options: ['Triste', 'Enojado', 'Asustado'],
      answer: 0
    },
    {
      question: '¿Qué es una oración interrogativa?',
      options: ['Una oración que da una orden', 'Una oración que expresa sorpresa', 'Una oración que hace una pregunta'],
      answer: 2
    },
    {
      question: '¿Cuál es el sinónimo de "amable"?',
      options: ['Malo', 'Gracioso', 'Bondadoso'],
      answer: 2
    },
    {
      question: '¿Qué es una fábula?',
      options: ['Un tipo de poema', 'Una historia real', 'Un cuento corto con una moraleja'],
      answer: 2
    },
    {
      question: '¿Quién escribió "Peter Pan"?',
      options: ['Lewis Carroll', 'J.M. Barrie', 'Roald Dahl'],
      answer: 1
    },
    {
      question: '¿Qué es un pronombre?',
      options: ['Una palabra que nombra a una persona, lugar o cosa', 'Un tipo de verbo', 'Una palabra que reemplaza a un sustantivo'],
      answer: 2
    },
    {
      question: '¿Cuál es el verbo en la siguiente oración: "El perro ladra"?',
      options: ['El', 'perro', 'ladra'],
      answer: 2
    },
    {
      question: '¿Cuál es el protagonista de "El Principito"?',
      options: ['El Principito', 'El Aviador', 'La Rosa'],
      answer: 0
    }
  ];
  
  export default {
    getQuestions() {
      // Simulamos una llamada asíncrona a un servicio con un retardo de 500ms
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(triviaQuestions);
        }, 500);
      });
    }
  };