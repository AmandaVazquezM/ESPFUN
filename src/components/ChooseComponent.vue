<template>
  <div class="container mt-4">
    <div v-if="currentQuestion">
      <h2>Juego de Elección</h2>
      <div class="card mb-3">
        <div class="card-body">
          <h3 class="card-title">{{ currentQuestion.text }}</h3>
          <div>
            <button
              v-for="(option, index) in currentQuestion.options"
              :key="index"
              class="btn btn-primary mr-2"
              @click="answerQuestion(option)"
            >
              {{ option }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h3>¡Juego completado!</h3>
      <p>Puntaje: {{ score }} / {{ totalQuestions }}</p>
      <button class="btn btn-primary" @click="resetGame">Volver a jugar</button>
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
    },
    resetGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  }
};
</script>
