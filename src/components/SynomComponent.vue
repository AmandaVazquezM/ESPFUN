<template>
  <div class="container">
    <h2 class="mt-4">Juego de Sinónimos</h2>

    <div v-if="!gameStarted" class="text-center">
      <button class="btn btn-primary" @click="startGame">Comenzar</button>
    </div>

    <div v-else>
      <h3 class="mt-4">Palabra</h3>
      <p>{{ currentWord }}</p>

      <h3 class="mt-4">Selecciona el sinónimo correcto:</h3>
      <div>
        <button
          v-for="(synonym, index) in shuffledSynonyms"
          :key="index"
          class="btn btn-primary m-2"
          @click="checkAnswer(synonym)"
        >
          {{ synonym }}
        </button>
      </div>

      <div v-if="gameCompleted">
        <h3 class="mt-4">¡Juego completado!</h3>
        <p>Puntaje: {{ score }} / {{ totalWords }}</p>
        <button class="btn btn-primary" @click="restartGame">Volver a Jugar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameStarted: false,
      gameCompleted: false,
      words: ["alegría", "caminar", "rápido", "feliz", "comer"],
      synonyms: [
        ["felicidad", "risa", "tristeza"],
        ["correr", "saltar", "nadar"],
        ["lento", "veloz", "pausado"],
        ["contento", "alegre", "enojado"],
        ["beber", "dormir", "reír"]
      ],
      currentWordIndex: 0,
      shuffledSynonyms: [],
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
      this.shuffledSynonyms = [];
      this.score = 0;
      this.shuffleSynonyms();
    },
    shuffleSynonyms() {
      this.shuffledSynonyms = this.synonyms[this.currentWordIndex].slice().sort(() => Math.random() - 0.5);
    },
    checkAnswer(selectedSynonym) {
      const correctSynonyms = this.synonyms[this.currentWordIndex];
      if (correctSynonyms.includes(selectedSynonym)) {
        this.score++;
      }
      this.currentWordIndex++;
      if (this.currentWordIndex === this.totalWords) {
        this.gameCompleted = true;
      } else {
        this.shuffleSynonyms();
      }
    },
    restartGame() {
      this.gameStarted = false;
      this.gameCompleted = false;
    }
  }
};
</script>
