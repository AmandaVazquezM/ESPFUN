<template>
  <div class="container d-flex flex-column min-vh-100 mt-5">
    <h2 class=" section-title mt-4">Juego de Lectura</h2>
    <h4 >Lee el texto y contesta la pregunta</h4>
    <div v-if="!gameStarted">
      <button class="btn btn-primary" @click="startGame">Comenzar Juego</button>
    </div>
    <div class="card" v-else>
      <div class="card-body" v-if="currentQuestion">
        <p class="card-tail mt-4">{{ currentQuestion.text }}</p>
        <div v-if="currentQuestion.type === 'fillInTheBlanks'" class="mt-4">
          <p class="card-text">{{ currentQuestion.question }}</p>
          <div v-for="(blank, index) in currentQuestion.blanks" :key="index" class="form-group">
            <label>{{ blank.placeholder }}</label>
            <input type="text" class="form-control" v-model="userAnswers[index]">
          </div>
          <div class="mt-4">
            <button class="btn btn-primary" @click="submitAnswer">Comprobar</button>
          </div>
        </div>
      </div>
      <div v-else>
        <h3 class="mt-4">¡Juego completado!</h3>
        <p v-if="score === 1">✌️¡Has acertado!✌️</p>
        <p v-else>❌Lo siento, has fallado❌</p>
        <button class="btn btn-primary" @click="restartGame">Jugar de Nuevo</button>
      </div>
    </div>
  </div>
</template>

<script>
import { getTails } from '@/services/ReadingService';

export default {
  data() {
    return {
      gameStarted: false,
      score: 0,
      userAnswers: [],
      questions: [],
      currentQuestion: null
    };
  },
  methods: {
    startGame() {
      this.questions = getTails();
      this.gameStarted = true;
      const randomIndex = Math.floor(Math.random() * this.questions.length);
      this.currentQuestion = this.questions[randomIndex];
    },
    submitAnswer() {
      const isCorrect = this.currentQuestion.answers.every(
        (answer, index) => answer.toLowerCase() === this.userAnswers[index].toLowerCase()
      );
      if (isCorrect) {
        this.score++;
      }
      this.userAnswers = [];
      this.currentQuestion = null;
    },
    restartGame() {
      this.gameStarted = false;
      this.score = 0;
      this.userAnswers = [];
      this.currentQuestion = null;
    }
  }
};
</script>
