<template>
  <div class="container d-flex flex-column min-vh-100 mt-5 ">
    <div v-if="!gameStarted">
      <h3>¡Bienvenido al juego de preguntas!</h3>
      <button class="btn btn-primary" @click="startGame">Comenzar juego</button>
    </div>
    <div v-else>
      <div v-if="currentQuestionIndex < currentQuestions.length">
        <h2 class="section-title">Elige la respuesta correcta</h2>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Pregunta {{ currentQuestionIndex + 1 }}/{{ totalQuestions }}</h5>
            <h3 class="card-text">{{ currentQuestions[currentQuestionIndex].text }}</h3>
            <div class="d-flex justify-content-around">
              <button v-for="(option, index) in currentQuestions[currentQuestionIndex].options" :key="index"
                class="btn btn-primary btn-lg mb-2 mt-5 mr-4" @click="answerQuestion(option)">{{ option }}</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <h3>¡Juego completado!</h3>
        <p>Tu resultado: {{ score }} / {{ totalQuestions }}</p>
        <button class="btn btn-primary" @click="resetGame">Volver a jugar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuestions } from '../services/OptionService';

export default {
  data() {
    return {
      gameStarted: false,
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
      currentQuestions: [],
      totalQuestions: 10
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.questions = getQuestions();
      this.shuffleQuestions();
      this.currentQuestions = this.questions.slice(0, this.totalQuestions);
    },
    shuffleQuestions() {
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    },
    answerQuestion(selectedOption) {
      if (selectedOption === this.currentQuestions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }
      this.currentQuestionIndex++;
    },
    resetGame() {
      this.gameStarted = false;
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  }
};
</script>
