<template>
  <div class="container">
    <h2 class="my-4">Juego de Rellenar Letras</h2>
    <div v-if="currentQuestionIndex >= 0">
      <h3>{{ currentQuestion.text }}</h3>
      <div class="mb-4">
        <p class="mb-0">
          <span v-for="(letter, index) in currentQuestion.blanks" :key="index">
            <template v-if="letter !== '_'">{{ letter }}</template>
            <template v-else>
              <button class="btn btn-secondary me-2 mb-2" @click="fillBlank(letter)">{{ letter }}</button>
            </template>
          </span>
        </p>
      </div>
    </div>
    <div v-else>
      <h3>¡Juego completado!</h3>
      <p>Puntaje: {{ score }} / {{ totalQuestions }}</p>
    </div>
    <div class="keyboard mt-4">
      <button class="btn btn-secondary me-2 mb-2" v-for="(letter, index) in filteredKeyboard" :key="index" @click="fillBlank(letter)">{{ letter }}</button>
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
          text: 'La __sa marr__n salt_ s_ _ver e_ _osa.',
          blanks: ['_', '_', '_', '_', '_', '_', '_'],
          answer: ['g', 'a', 't', 'a', 's', 'a', 'o']
        },
        {
          text: '__y un __s__ra __taq__lla.',
          blanks: ['_', '_', '_', '_', '_', '_', '_', '_', '_', '_'],
          answer: ['H', 'a', 'b', 'í', 'a', ' ', 'u', 'n', 'a', 's']
        },
        // Agrega más frases y respuestas aquí
      ],
      keyboard: [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', ' '
      ]
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    totalQuestions() {
      return this.questions.length;
    },
    filteredKeyboard() {
      return this.keyboard.filter(letter => !this.currentQuestion.blanks.includes(letter));
    }
  },
  methods: {
    fillBlank(letter) {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      const blankIndex = currentQuestion.blanks.findIndex(blank => blank === '_');
      if (blankIndex !== -1) {
        this.$set(currentQuestion.blanks, blankIndex, letter);
        if (this.checkAnswer(currentQuestion.blanks, currentQuestion.answer)) {
          this.score++;
          this.currentQuestionIndex++;
          this.resetBlanks();
        }
      }
    },
    checkAnswer(blanks, answer) {
      return blanks.join('') === answer.join('');
    },
    resetBlanks() {
      const currentQuestion = this.questions[this.currentQuestionIndex];
      currentQuestion.blanks = Array(currentQuestion.answer.length).fill('_');
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.btn-secondary {
  font-size: 18px;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #e9ecef;
}
</style>