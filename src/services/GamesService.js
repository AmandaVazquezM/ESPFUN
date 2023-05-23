// GameService.js

export default {
    getGames() {
      return [
        /*{
          name: '¿Sabes el significado?',
          category: 'semantica',
          image: 'alumno.PNG',
          component:'a'
        },*/
        {
          name: 'Verdadero o falso',
          category: 'gramatica',
          image: 'VerdaderoFalso.PNG',
          component: 'true'
        },
        {
          name: 'Adivina la palabra',
          category: 'comprension_lectora',
          image: 'palabras.PNG',
          component: 'phrase'
        },
        {
          name: 'Trivia',
          category: 'ortografia',
          image: 'Trivia.PNG',
          component: 'trivia'
        },
        {
          name: 'Elige la opción correcta',
          category: 'comprension_lectora',
          image: 'AoB.PNG',
          component: 'choose'
        },
        {
          name: 'Elige la letra correcta',
          category: 'ortografia',
          image: 'letras.PNG',
          component: 'character'
        },
      ];
    },
  };
  