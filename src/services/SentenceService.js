const sentences = [
    { sentence: 'La palabra guión se escribe con tilde', answer: false },
    { sentence: '¿Oración y frase es lo mismo?', answer: false },
    { sentence: '¿Los sustantivos son palabras que nombran a personas, animales o cosas?', answer: true},
    { sentence: '¿Los adjetivos describen o califican a los sustantivos', answer: true},
    { sentence: '¿Los verbos son palabras que indican acciones o estados', answer: true},
    { sentence: '¿Los adverbios modifican a los verbos, adjetivos u otros adverbios?', answer: true},
    { sentence: '¿Los artículos son palabras que acompañan a los sustantivos para indicar si son conocidos o no conocidos?', answer: true},
    { sentence: '¿Los pronombres son palabras que reemplazan a los sustantivos?', answer: true},
    { sentence: '¿Las preposiciones son palabras que establecen una relación de tiempo, lugar o modo entre distintas partes de una oración?', answer: true},
    { sentence: '¿Las conjunciones son palabras que unen oraciones o palabras de la misma categoría gramatical?', answer: true},
    { sentence: '¿La tilde es un signo ortográfico que se coloca sobre algunas letras para indicar el acento de la palabra?', answer: true},
    { sentence: '¿Los sinónimos son palabras que tienen un significado similar?', answer: true},
    { sentence: '¿Los antónimos son palabras que tienen significados opuestos?', answer: true},
    { sentence: '¿Las mayúsculas se utilizan al inicio de una oración o para escribir nombres propios?', answer: true},
    { sentence: '¿Las minúsculas se utilizan para escribir todo el texto en general?', answer: false},
    { sentence: '¿Los puntos y aparte se utilizan para separar ideas principales en un texto? ', answer: true},
    { sentence: '¿Las comas se utilizan para separar elementos en una lista?', answer: true},
    { sentence: '¿Los puntos suspensivos se utilizan para indicar una pausa o suspensión en una frase?', answer: true},
    { sentence: '¿Las comillas se utilizan para indicar citas o palabras textuales?', answer: true},
    { sentence: '¿Los guiones se utilizan para separar elementos o palabras dentro de una frase?', answer: true},
    { sentence: '¿El sujeto de una oración es la persona, animal o cosa que realiza la acción del verbo?', answer: true},
    { sentence: '¿El predicado de una oración es la parte que expresa la acción o el estado del sujeto?', answer: true},
    { sentence: '¿El género de un sustantivo indica si es masculino o femenino?', answer: true},
    { sentence: '¿El número de un sustantivo indica si es singular o plural?', answer: true},
    { sentence: '¿El presente es un tiempo verbal que se utiliza para hablar de acciones que ocurren en el momento actual? ', answer: true},
    { sentence: '¿El pasado es un tiempo verbal que se utiliza para hablar de acciones que ya han ocurrido?', answer: true},
    { sentence: '¿El futuro es un tiempo verbal que se utiliza para hablar de acciones que van a ocurrir en el futuro? ', answer: true},
    { sentence: '¿El adjetivo concuerda en género y número con el sustantivo al que modifica?', answer: true},
    { sentence: '¿El verbo es la palabra más importante de la oración?', answer: true},
    { sentence: '¿Las onomatopeyas son palabras que imitan sonidos reales?', answer: true},
  ];
  
  export function getSentences() {
    return sentences;
  }
  