

export default {
    getGames() {
      return [
        {
          name: '¿Sabes el significado?',
          category: 'semantica',
          component:'synom'
        },
        {
          name: 'Verdadero o falso',
          category: 'gramatica',
          component: 'true'
        },
        {
          name: 'Adivina la palabra',
          category: 'comprension_lectora',
          component: 'phrase'
        },
        {
          name: 'Trivia',
          category: 'ortografia',
          component: 'trivia'
        },
        {
          name: 'Elige la opción correcta',
          category: 'comprension_lectora',
          component: 'choose'
        },
      ];
    },
  };
  