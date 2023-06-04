import sinonimosImage from '../assets/imgs/sinonimos.png';
import palabrasImage from '../assets/imgs/palabras.png';
import triviaImage from '../assets/imgs/Trivia.png';
import aobImage from '../assets/imgs/AoB.png';
import trueImage from '../assets/imgs/Captura.png';

export default {
    getGames() {
      return [
        {
          name: '¿Sabes el significado?',
          category: 'semantica',
          image: require(sinonimosImage),
          component:'synom'
        },
        {
          name: 'Verdadero o falso',
          category: 'gramatica',
          image:require(trueImage),
          component: 'true'
        },
        {
          name: 'Adivina la palabra',
          category: 'comprension_lectora',
          image:require(palabrasImage),
          component: 'phrase'
        },
        {
          name: 'Trivia',
          category: 'ortografia',
          image:require(triviaImage),
          component: 'trivia'
        },
        {
          name: 'Elige la opción correcta',
          category: 'comprension_lectora',
          image:require(aobImage),
          component: 'choose'
        },
      ];
    },
  };
  