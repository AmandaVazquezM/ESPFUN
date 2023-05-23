
const opinions = [
    { id: 1, name: "María", content: "“Hace dos años decidimos apostar por la plataforma y gamificar la lectura. ESPFUN y todo el plan lector se han convertido en el hilo conductor de todo el aprendizaje.”" },
    { id: 2, name: "Juan", content: "“Gracias a esta plataforma he conseguido que mi alumnado disfrute leyendo. En ESPFUN cada libro es una aventura, un reto y un juego lleno de emoción; leer se convierte en un placer.”" },
    { id: 3, name: "Sandra", content: "“Gracias a ESPFUN, he logrado despertar el amor por la lectura en mis estudiantes. Cada libro se convierte en una emocionante aventura que los motiva a sumergirse en el mundo de la lectura.”" },
    { id: 4, name: "Rosa", content: "“ESPFUN ha transformado la forma en que enseño lectura. Mis alumnos ahora ven cada libro como un desafío divertido y emocionante. Con esta plataforma, la lectura se ha convertido en un placer para ellos, y ver su entusiasmo es realmente gratificante.”" },
    { id: 5, name: "Manuel", content: "“Desde que incorporé ESPFUN en mis clases, el aprendizaje de la lectura ha dado un giro completo. Mis estudiantes no solo leen con entusiasmo, sino que también disfrutan de los retos y juegos que ofrece la plataforma. Gracias a ello, la lectura se ha convertido en una actividad llena de diversión y emoción para todos.”" },
    { id: 6, name: "José", content: "“ESPFUN ha mejorado mi español, ahora sé mucho más sobre gramática y puedo hacer bien mis análisis sintácticos.”" },
    
  ];
  
  export default {
    getOpinions() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(opinions);
        }, 500); 
      });
    },
  };
  