<template>
  <div class="container d-flex flex-column min-vh-100 mt-4">
    <h2>Juegos disponibles</h2>
    <div class="row">
      <div class="col-lg-9 col-md-8 col-sm-12"></div>
      <div class="col-lg-3 col-md-4 col-sm-12">
        <div class="filters text-end">
          <label for="filter">Filtrar por:</label>
          <select id="filter" v-model="selectedFilter" class="form-select">
            <option value="todos">Todos</option>
            <option value="semantica">Semántica</option>
            <option value="gramatica">Gramática</option>
            <option value="comprension_lectora">Comprensión lectora</option>
            <option value="ortografia">Ortografía</option>
          </select>
        </div>
      </div>
    </div>

    <div class="games">
      <div v-for="(game, index) in filteredGames" :key="index" class="game col-lg-4 col-md-6 col-sm-12">
        <router-link :to="{ name: game.component }">
          <img :src="'../assets/imgs/' + game.image" alt="Imagen del juego">
          <p>{{ game.name }}</p>
        </router-link>
      </div>
    </div>

    <div v-if="showLoadMore" class="load-more text-center">
      <a href="#" class="btn btn-primary">Ver más</a>
    </div>
  </div>
</template>

<script>
import GamesService from '@/services/GamesService';

export default {
  data() {
    return {
      selectedFilter: 'todos',
      games: [],
      perRow: 3,
      maxRows: 4,
    };
  },
  created() {
    this.fetchGames();
  },
  computed: {
    filteredGames() {
      if (this.selectedFilter === 'todos') {
        return this.games;
      } else {
        return this.games.filter(game => game.category === this.selectedFilter);
      }
    },
    showLoadMore() {
      return this.filteredGames.length > this.perRow * this.maxRows;
    },
  },
  methods: {
    fetchGames() {
      this.games = GamesService.getGames();
    },
  },
};
</script>
