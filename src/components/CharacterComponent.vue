<template>
  <div class="container d-flex flex-column min-vh-100 mt-5">
    <table>
      <tr>
        <td v-for="(letter, index) in selectedWord" :key="index" :class="[{ activo: isActiveCell(0, index) }, 'celdas']"
          :contenteditable="isEditableCell(0, index)" @input="updateCellValue(0, index, $event.target.innerText)">
          {{ index === missingLetterIndex ? (selectedLetter ? selectedLetter : '_') : letter }}
        </td>
      </tr>
    </table>
    <br><br>
    <div id="teclado">
      <div class="teclado">
        <button v-for="(letter, index) in keyboard" :key="index" @click="fillCell(letter)">
          {{ letter }}
        </button>
        <button class="btn btn-enter" @click="checkWord">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedWord: [],
      missingLetterIndex: 0,
      activeRowIndex: 0,
      activeCellIndex: 0,
      selectedLetter: "",
      keyboard: [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Z", "X", "C", "V", "B", "N", "M"
      ]
    };
  },
  mounted() {
    this.selectRandomWord();
  },
  methods: {
    selectRandomWord() {
      const words = ["FOCAS", "COMER", "PALABRA", "TECLADO", "GATO", "COCODRILO", "DINOSAURIO", "ORDENADOR", "CEREBRO", "VACA", "REBANADA"];
      this.selectedWord = Array.from(words[Math.floor(Math.random() * words.length)]);
      this.missingLetterIndex = Math.floor(Math.random() * this.selectedWord.length);
    },
    isActiveCell(rowIndex, cellIndex) {
      return rowIndex === this.activeRowIndex && cellIndex === this.activeCellIndex;
    },
    isEditableCell(rowIndex, cellIndex) {
      return cellIndex === this.missingLetterIndex;
    },
    fillCell(letter) {
      if (this.isEditableCell(0, this.activeCellIndex)) {
    this.selectedLetter = letter;
    this.updateCellValue(0, this.missingLetterIndex, letter);
    this.moveToNextCell();
  }
    },
    moveToNextCell() {
      if (this.activeCellIndex < this.selectedWord.length - 1) {
        this.activeCellIndex++;
      }
    },
    updateCellValue(rowIndex, cellIndex, value) {
      this.selectedWord.splice(cellIndex, 1, value.toUpperCase());
    },
    checkWord() {
   const filledWord = this.selectedWord.join("");
  const isCorrect = filledWord === this.selectedWord.join("") && this.selectedWord.includes(this.selectedLetter);

      if (isCorrect) {
        alert("¡Has acertado!");
      } else {
        alert("La palabra es incorrecta.");
      }
      this.nextWord();
    },
    nextWord() {
  this.selectRandomWord();
  this.activeCellIndex = 0;
  this.selectedLetter = "";
},
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.celdas {
  background-color: #f9f5f5;
  width: 50px;
  height: 50px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  border-radius: 0.5rem;
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

table {
  margin-top: 10%;
  width: 20vw;
  height: 5vw;
  margin-left: 40%;
}
#teclado {
  margin-left: 25%;
  width: 590px;
  background-color: #aaa;
}

.teclado {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  border-radius: 5px;
  padding: 10px;
  background-color: #f5f5f5;
}

.teclado button {
  font-size: 20px;
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}
.teclado button:hover{
  font-size: 20px;
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #f6ec79;
  cursor: pointer;
}
.teclado button:active{
  font-size: 20px;
  padding: 10px 15px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #ffc2fd;
  cursor: pointer;
}



</style>
