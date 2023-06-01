
export default {
    getGames() {
      return [
        {
          name: '¿Sabes el significado?',
          category: 'semantica',
          image: '../assets/imgs/sinonimos.png',
          component:'synom'
        },
        {
          name: 'Verdadero o falso',
          category: 'gramatica',
          image:'../assets/imgs/Captura.png',
          component: 'true'
        },
        {
          name: 'Adivina la palabra',
          category: 'comprension_lectora',
          image:'../assets/imgs/palabras.png',
          component: 'phrase'
        },
        {
          name: 'Trivia',
          category: 'ortografia',
          image:'../assets/imgs/Trivia.png',
          component: 'trivia'
        },
        {
          name: 'Elige la opción correcta',
          category: 'comprension_lectora',
          image:'../assets/imgs/AoB.png',
          component: 'choose'
        },
        {
          name: 'Elige la letra correcta',
          category: 'ortografia',
          image:'../assets/imgs/letras.png',
          component: 'character'
        }
      ];
    },
  };
  