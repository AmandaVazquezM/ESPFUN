<template>
  <div class="container">
    <main>
      <table>
        <tr v-for="(row, rowIndex) in grid" :key="rowIndex">
          <td
            v-for="(cell, cellIndex) in row"
            :key="cellIndex"
            :class="[{ activo: isActiveCell(rowIndex, cellIndex) }, 'celdas']"
            :contenteditable="isEditableCell(rowIndex, cellIndex)"
            @input="updateCellValue(rowIndex, cellIndex, $event.target.innerText)"
          >
            {{ cell }}
          </td>
        </tr>
      </table>
    </main>
    <div id="teclado">
      <div class="teclado">
        <button
          v-for="(letter, index) in keyboard"
          :key="index"
          @click="fillCell(letter)"
          :class="{ borrar: letter === ' ', enter: letter === 'enter' }"
        >
          {{ letter === 'enter' ? 'Enter' : letter }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      grid: [],
      activeRowIndex: 0,
      activeCellIndex: 0,
      words: [ "FOCAS", "COMER"],
      selectedWord: ""
    };
  },
  computed: {
    keyboard() {
      return [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Ñ", "enter", "Z", "X", "C", "V", "B", "N", "M", " "
      ];
    }
  },
  mounted() {
    this.selectRandomWord();
  },
  methods: {
    generateGrid() {
      const rows = 1;
      const cols = this.selectedWord.length;
      this.grid = Array(rows)
        .fill("")
        .map(() => Array(cols).fill(""));
      for (let i = 0; i < cols - 1; i++) {
        this.grid[0][i] = this.selectedWord[i];
      }
    },
    selectRandomWord() {
      this.selectedWord = this.words[Math.floor(Math.random() * this.words.length)];
      this.generateGrid();
    },
    isActiveCell(rowIndex, cellIndex) {
      return rowIndex === this.activeRowIndex && cellIndex === this.activeCellIndex;
    },
    isEditableCell(rowIndex, cellIndex) {
      return rowIndex === 0 && cellIndex === this.grid[0].length - 1;
    },
    fillCell(letter) {
      if (letter === " ") {
        this.deleteLetter();
      } else if (letter === "enter") {
        this.checkWord();
      } else {
        const cellValue = this.grid[this.activeRowIndex][this.activeCellIndex];
        if (cellValue === "") {
          this.grid[this.activeRowIndex][this.activeCellIndex] = letter;
          this.moveToNextCell();
        }
      }
    },
    deleteLetter() {
      if (this.activeCellIndex > 0) {
        this.grid[this.activeRowIndex][this.activeCellIndex] = "";
        this.moveToPreviousCell();
      } else if (this.activeRowIndex > 0) {
        this.activeRowIndex--;
        this.activeCellIndex = this.grid[this.activeRowIndex].length - 1;
        this.grid[this.activeRowIndex][this.activeCellIndex] = "";
      }
    },
    moveToNextCell() {
      if (this.activeCellIndex < this.grid[this.activeRowIndex].length - 1) {
        this.activeCellIndex++;
      } else if (this.activeRowIndex < this.grid.length - 1) {
        this.activeRowIndex++;
        this.activeCellIndex = 0;
      }
    },
    moveToPreviousCell() {
      if (this.activeCellIndex > 0) {
        this.activeCellIndex--;
      } else if (this.activeRowIndex > 0) {
        this.activeRowIndex--;
        this.activeCellIndex = this.grid[this.activeRowIndex].length - 1;
      }
    },
    updateCellValue(rowIndex, cellIndex, value) {
      this.grid[rowIndex][cellIndex] = value.toUpperCase();
    },
    checkWord() {
      const enteredWord = this.grid.map(row => row.join("")).join("");
      if (enteredWord == this.selectedWord) {
        alert("¡Has acertado!");
      } else {
        alert("Palabra incorrecta.");
      }
    }
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
  padding-left: 5px;
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


.teclado button.borrar {
  padding: 0;
  color: #fff;
  background-color: red;
  width: 5vw;
  overflow: hidden;
  height: 5vh;
}

.teclado button.enter {
  grid-column: 4 / span 2;
  background-color: rgb(0, 255, 119);
}

</style>
