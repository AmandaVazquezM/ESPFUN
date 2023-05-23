<template>
  <div class="container">
    <h2 class="mt-4">Trivia de Lengua y Literatura</h2>
    <div class="card mt-4" v-if="currentQuestionIndex === -1">
      <div class="card-body">
        <button class="btn btn-primary" @click="startTrivia">Comenzar</button>
      </div>
    </div>
    <div class="card mt-4" v-else-if="currentQuestionIndex >= 0 && currentQuestionIndex < totalQuestions">
      <div class="card-body">
        <h3>{{ currentQuestion.question }}</h3>
        <div v-for="(option, index) in currentQuestion.options" :key="index" class="form-check">
          <input class="form-check-input" type="radio" v-model="userAnswer" :value="index" :id="'option-' + index">
          <label class="form-check-label" :for="'option-' + index">
            {{ option }}
          </label>
        </div>
        <button class="btn btn-primary mt-4" @click="submitAnswer">OK</button>
      </div>
    </div>
    <div class="card mt-4" v-else>
      <div class="card-body">
        <h3>¡Trivia completada!</h3>
        <p>Puntaje: {{ score }} / {{ totalQuestions }}</p>
        <button class="btn btn-primary" @click="restartTrivia">Volver a Jugar</button>
      </div>
    </div>
  </div>
</template>


  
  <script>
  import  TriviaService  from "../services/TriviaService.js";
  export default {
    data() {
      return {
        currentQuestionIndex: -1,
        score: 0,
        userAnswer: null,
        questions: []
      };
    },
    computed: {
      totalQuestions() {
        return this.questions.length;
      },
      currentQuestion() {
        return this.questions[this.currentQuestionIndex];
      }
    },
    methods: {
      async startTrivia() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswer = null;
        this.questions = await TriviaService.getQuestions();
        this.shuffleQuestions();
      },
      shuffleQuestions() {
        const shuffledQuestions = this.questions.sort(() => Math.random() - 0.5);
        this.questions = shuffledQuestions.slice(0, 10);
      },
      submitAnswer() {
        if (this.userAnswer !== null) {
          const currentQuestion = this.currentQuestion;
          if (this.userAnswer === currentQuestion.answer) {
            this.score++;
          }
          this.userAnswer = null;
          this.currentQuestionIndex++;
        }
      },
      restartTrivia() {
    this.currentQuestionIndex = -1;
    this.score = 0;
    this.userAnswer = null;
    this.shuffleQuestions();
  },
    }
  };
  </script>
  