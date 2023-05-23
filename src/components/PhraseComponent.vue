<template>
    <div>
      <h2>Juego de Lectura</h2>
      <div v-if="currentQuestionIndex >= 0">
        <h3>{{ currentQuestion.text }}</h3>
        <div v-if="currentQuestion.type === 'fillInTheBlanks'">
          <p>{{ currentQuestion.question }}</p>
          <div v-for="(blank, index) in currentQuestion.blanks" :key="index">
            <label>{{ blank.placeholder }}</label>
            <input type="text" v-model="userAnswers[index]">
          </div>
          <div>
            <button @click="undoAnswer">Deshacer</button>
            <button @click="submitAnswer">OK</button>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>¡Juego completado!</h3>
        <p>Puntaje: {{ score }} / {{ totalQuestions }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentQuestionIndex: 0,
        score: 0,
        userAnswers: [],
        questions: [
          {
            type: 'fillInTheBlanks',
            text: 'Documento 1',
            documentUrl: 'ruta-al-documento-1.txt',
            blanks: [
              { placeholder: 'respuesta 1' },
              { placeholder: 'respuesta 2' },
              // Agrega más espacios en blanco aquí
            ],
            answers: ['respuesta 1 correcta', 'respuesta 2 correcta'] // Agrega más respuestas aquí
          },
          {
            type: 'fillInTheBlanks',
            text: 'Documento 2',
            documentUrl: 'ruta-al-documento-2.txt',
            blanks: [
              { placeholder: 'respuesta 1' },
              { placeholder: 'respuesta 2' },
              // Agrega más espacios en blanco aquí
            ],
            answers: ['respuesta 1 correcta', 'respuesta 2 correcta'] // Agrega más respuestas aquí
          },
          // Agrega más documentos y preguntas aquí
        ]
      };
    },
    computed: {
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      },
      totalQuestions() {
        return this.questions.length;
      }
    },
    methods: {
      undoAnswer() {
        this.userAnswers.pop();
      },
      submitAnswer() {
        const currentQuestion = this.questions[this.currentQuestionIndex];
        const isCorrect = currentQuestion.answers.every(
          (answer, index) => answer.toLowerCase() === this.userAnswers[index].toLowerCase()
        );
        if (isCorrect) {
          this.score++;
        }
        this.userAnswers = [];
        this.currentQuestionIndex++;
      }
    }
  };
  </script>
  