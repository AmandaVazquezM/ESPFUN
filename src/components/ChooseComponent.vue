<template>
    <div>
      <h2>Juego de Elección</h2>
      <div v-if="currentQuestion">
        <h3>{{ currentQuestion.text }}</h3>
        <div>
          <button v-for="(option, index) in currentQuestion.options" :key="index" @click="answerQuestion(option)">
            {{ option }}
          </button>
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
        questions: [
          {
            text: '¿Cuál es la capital de Francia?',
            options: ['París', 'Londres'],
            correctAnswer: 'París'
          },
          {
            text: '¿Cuál es el río más largo del mundo?',
            options: ['Nilo', 'Amazonas'],
            correctAnswer: 'Amazonas'
          },
          // Agrega más preguntas aquí
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
      answerQuestion(selectedOption) {
        if (selectedOption === this.currentQuestion.correctAnswer) {
          this.score++;
        }
        this.currentQuestionIndex++;
      }
    }
  };
  </script>
  