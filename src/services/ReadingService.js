const tails = [
    {
        type: 'fillInTheBlanks',
        text: 'El sol comenzaba a asomarse en el horizonte, tiñendo el cielo de tonos dorados. El bosque despertaba lentamente de su sueño nocturno. Los pájaros entonaban sus melodías matutinas, mientras las hojas de los árboles bailaban con la brisa. El arroyo fluía cristalino, sus aguas reflejando la belleza del entorno. Los animales empezaban a salir de sus madrigueras, buscando alimento y explorando su territorio. Era un nuevo día lleno de vida y aventuras en la naturaleza.',
        blanks: [
          { placeholder: '¿Qué despertaba lentamente en el bosque al amanecer?' },
         
        ],
        answers: ['El bosque']
      },
      {
        type: 'fillInTheBlanks',
        text: 'La nave espacial despegó con un rugido ensordecedor, rompiendo la atmósfera terrestre. A medida que ascendía, la gravedad disminuía y los astronautas flotaban en el interior de la nave. Atravesaron las estrellas, contemplando la inmensidad del universo. La Luna se acercaba rápidamente, revelando sus cráteres y montañas. Al llegar a Marte, el paisaje rojizo y desértico cautivó su atención. Era un viaje increíble, explorando el espacio y descubriendo los secretos del universo.',
        blanks: [
          { placeholder: '¿Qué paisaje cautivó la atención de los astronautas al llegar a Marte?' },
         
        ],
        answers: ['El paisaje rojizo y desértico', 'El paisaje rojizo y desertico']
      },
      {
        type: 'fillInTheBlanks',
        text: 'Sumergirse en las profundidades del océano era como entrar en un mundo completamente nuevo. Los corales multicolores y los peces exóticos creaban un espectáculo visual impresionante. Nadar junto a las tortugas marinas era una experiencia única, mientras los delfines juguetones saltaban por encima de las olas. Descubrieron un antiguo naufragio cubierto de algas, lleno de tesoros perdidos. La belleza y el misterio del océano los dejaron sin aliento.',
        blanks: [
          { placeholder: '¿Qué encontraron en su aventura submarina que les dejó sin aliento?' },
         
        ],
        answers: ['La belleza y el misterio del océano','La belleza y el misterio del oceano']
      }
  ];
  
  export function getTails() {
    return tails;
  }
  