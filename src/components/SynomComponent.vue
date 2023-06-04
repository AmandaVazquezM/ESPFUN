<template>
  <div class="container d-flex flex-column min-vh-100 mt-5">
    <h2 class="section-title mt-4">Juego de Sinónimos</h2>

    <div v-if="!gameStarted" class="text-center">
      <button class="btn btn-primary" @click="startGame">Comenzar</button>
    </div>

    <div v-else-if="gameStarted && !gameCompleted">

      <h3>{{ currentWord }}</h3>

      <h3 class="mt-4">Selecciona el sinónimo correcto:</h3>
      <div>
        <button v-for="(option, index) in options" :key="index" class="btn btn-primary m-2" @click="checkAnswer(option)">
          {{ option }}
        </button>
      </div>
    </div>
    <div v-if="gameCompleted">
      <h3 class="mt-4">¡Juego completado!</h3>
      <p>Tu resultado: {{ score }} / {{ totalWords }}</p>
      <button class="btn btn-primary" @click="restartGame">Volver a Jugar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameCompleted: false,
      words: ["alegría", "caminar", "rápido", "alimento", "grande", "brillante", "diferente", "adicional", "nervioso", "listo"],
      synonyms: [
        ["felicidad", "andar", "veloz", "comida", "amplio", "resplandeciente", "distinto", "suplementario", "inquieto", "inteligente"]
      ],
      currentWordIndex: 0,
      options: [],
      correctOption: "",
      score: 0
    };
  },
  computed: {
    currentWord() {
      return this.words[this.currentWordIndex];
    },
    totalWords() {
      return this.words.length;
    }
  },
  methods: {
    startGame() {
      this.gameStarted = true;
      this.currentWordIndex = 0;
      this.score = 0;
      this.nextWord();
    },
    nextWord() {
      const currentSynonyms = this.synonyms[0];
      const correctSynonym = currentSynonyms[this.currentWordIndex];
      const otherSynonyms = currentSynonyms.filter(synonym => synonym !== correctSynonym);
      const shuffledOptions = this.shuffleArray([correctSynonym, ...otherSynonyms]);
      this.options = shuffledOptions;
      this.correctOption = correctSynonym;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    checkAnswer(selectedOption) {
      if (selectedOption === this.correctOption) {
        this.score++;
      }
      this.currentWordIndex++;
      if (this.currentWordIndex === this.totalWords) {
        this.gameCompleted = true;
      } else {
        this.nextWord();
      }
    },
    restartGame() {
      this.gameStarted = false;
      this.gameCompleted = false;
    }
  }
};
</script>
