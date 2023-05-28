<template>
  <div class="container mt-4 bg-light">
    <div v-if="!gameStarted" class="text-center">
      <button class="btn btn-primary" @click="startGame">Comenzar</button>
    </div>

    <div v-else>
      <div class="card mb-3" v-if="currentQuestionIndex < questions.length">
        <div class="card-body">
          <h5 class="card-title">Pregunta {{ currentQuestionIndex + 1 }}</h5>
          <p class="card-text">{{ questions[currentQuestionIndex].sentence }}</p>
          <div class="btn-group">
            <div class="row">
              <div class="col">
                <button class="btn btn-success btn-block" @click="checkAnswer(true)">Verdadero</button>
              </div>
              <div class="col">
                <button class="btn btn-danger btn-block" @click="checkAnswer(false)">Falso</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="text-center">
          <h3>¡Juego completado!</h3>
          <p>Tu resultado: {{ correctAnswers }} respuestas correctas de {{ questions.length }}</p>
          <button class="btn btn-primary" @click="restartGame">Volver a jugar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { obtenerOraciones } from '@/services/OracionesService';

export default {
  data() {
    return {
      gameStarted: false,
      questions: [],
      currentQuestionIndex: 0,
      correctAnswers: 0,
      showResultModal: false
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.questions = obtenerOraciones();
      this.shuffleQuestions();
    },
    shuffleQuestions() {
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    },
    checkAnswer(userAnswer) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      if (userAnswer === currentQuestion.answer) {
        this.correctAnswers++;
      }
      this.currentQuestionIndex++;
    },
    showModal() {
      this.showResultModal = true;
      const applauseSound = new Audio('path/to/applause.mp3');
      if (this.correctAnswers > this.questions.length / 2) {
        applauseSound.play();
      }
    },
    restartGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.userAnswers = [];
      this.correctAnswers = 0;
    }
  }
};
</script>
