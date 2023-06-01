
export default {
    getGames() {
      return [
        {
          name: '¿Sabes el significado?',
          category: 'semantica',
          image: 'sinonimos.png',
          component:'synom'
        },
        {
          name: 'Verdadero o falso',
          category: 'gramatica',
          image:'Captura.png',
          component: 'true'
        },
        {
          name: 'Adivina la palabra',
          category: 'comprension_lectora',
          image:'palabras.png',
          component: 'phrase'
        },
        {
          name: 'Trivia',
          category: 'ortografia',
          image:'Trivia.png',
          component: 'trivia'
        },
        {
          name: 'Elige la opción correcta',
          category: 'comprension_lectora',
          image:'AoB.png',
          component: 'choose'
        },
        {
          name: 'Elige la letra correcta',
          category: 'ortografia',
          image:'letras.png',
          component: 'character'
        }
      ];
    },
  };
  