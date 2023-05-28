<template>
  <div class="container">
    <h2 class="mt-4">Juego de Lectura</h2>
    <div v-if="currentQuestion">
      <h3 class="mt-4">{{ currentQuestion.text }}</h3>
      <div v-if="currentQuestion.type === 'fillInTheBlanks'" class="mt-4">
        <p>{{ currentQuestion.question }}</p>
        <div v-for="(blank, index) in currentQuestion.blanks" :key="index" class="form-group">
          <label>{{ blank.placeholder }}</label>
          <input type="text" class="form-control" v-model="userAnswers[index]">
        </div>
        <div class="mt-4">
          <button class="btn btn-secondary" @click="undoAnswer">Deshacer</button>
          <button class="btn btn-primary" @click="submitAnswer">OK</button>
        </div>
      </div>
    </div>
    <div v-else>
      <h3 class="mt-4">¡Juego completado!</h3>
      <p>Puntaje: {{ score }} / {{ totalQuestions }}</p>
      <button class="btn btn-primary" @click="restartGame">Jugar de Nuevo</button>
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
          text: 'Pregunta 1',
          documentUrl: 'ruta-al-documento-1.txt',
          blanks: [
            { placeholder: 'respuesta:' },
            // Agrega más espacios en blanco aquí
          ],
          answers: ['respuesta']
        },
        {
          type: 'fillInTheBlanks',
          text: 'Pregunta 2',
          documentUrl: 'ruta-al-documento-2.txt',
          blanks: [
            { placeholder: 'respuesta:' },
            // Agrega más espacios en blanco aquí
          ],
          answers: ['respuesta']
        },
        // Agrega más documentos y preguntas aquí
      ]
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex] || null;
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
    },
    restartGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.userAnswers = [];
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>

