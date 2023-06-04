<template>
  <br><br>
  <h1 class="section-title">Verdadero o Falso</h1>
  <div class="container d-flex flex-column min-vh-100 mt-5 ">
    <div v-if="!gameStarted" class="text-center">
      <button class="btn btn-primary btn-lg" @click="startGame">Comenzar</button>
    </div>

    <div v-else>
      <div class="card mb-3" v-if="currentQuestionIndex < currentQuestions.length">
        <div class="card-body">
          <h5 class="card-title">Pregunta {{ currentQuestionIndex + 1 }}/10</h5>
          <p class="card-text">{{ currentQuestions[currentQuestionIndex].sentence }}</p>
          <div class="btn-group">
            <div class="row">
              <div class="col">
                <button class="btn btn-success btn-block btn-lg" @click="checkAnswer(true)">Verdadero</button>
              </div>
              <div class="col">
                <button class="btn btn-danger btn-block btn-lg" @click="checkAnswer(false)">Falso</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="text-center">
          <h3>¡Juego completado!</h3>
          <p>Tu resultado: {{ correctAnswers }} respuestas correctas de {{ currentQuestions.length }}</p>
          <button class="btn btn-primary" @click="restartGame">Volver a jugar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSentences } from '@/services/SentenceService';

export default {
  data() {
    return {
      gameStarted: false,
      questions: [],
      currentQuestions: [],
      currentQuestionIndex: 0,
      correctAnswers: 0,
    };
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.questions = getSentences();
      this.shuffleQuestions();
      this.currentQuestions = this.questions.slice(0, 10);
    },
    shuffleQuestions() {
      for (let i = this.questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
      }
    },
    checkAnswer(userAnswer) {
      const currentQuestion = this.currentQuestions[this.currentQuestionIndex];
      if (userAnswer === currentQuestion.answer) {
        this.correctAnswers++;
      }
      this.currentQuestionIndex++;
    },
    restartGame() {
      this.currentQuestionIndex = 0;
      this.correctAnswers = 0;
      this.shuffleQuestions();
      this.currentQuestions = this.questions.slice(0, 10);
    }
  }
};
</script>
