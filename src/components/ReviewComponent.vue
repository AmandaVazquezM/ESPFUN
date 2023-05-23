<template>
  <section>
    <div class="container">
      <h2 class="text-center">Nuestros usuarios opinan</h2>
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="(opinion) in displayedOpinions" :key="opinion.id">
          <div class="opinion">
            <img src="../assets/imgs/usuario.png" alt="Imagen de opinión">
            <h3>{{ opinion.name }}</h3>
            <p>{{ opinion.content }}</p>
          </div>
        </div>
      </div>
      <div v-if="showMoreButton" class="text-center mt-4">
        <button class="btn btn-primary" @click="toggleOpinions">Ver más</button>
      </div>
    </div>
  </section>
</template>

<script>
import OpinionService from '../services/OpinionService';

export default {
  data() {
    return {
      opinions: [],
      displayedOpinions: [],
      showMoreButton: true,
    };
  },
  mounted() {
    this.fetchOpinions();
  },
  methods: {
    fetchOpinions() {
      OpinionService.getOpinions()
        .then((opinions) => {
          this.opinions = opinions;
          this.displayedOpinions = this.opinions.slice(0, 2); // Mostrar las primeras 2 opiniones
          if (this.opinions.length <= 2) {
            this.showMoreButton = false; // Ocultar el botón "Ver más" si no hay más opiniones
          }
        })
        .catch((error) => {
          console.error('Error al obtener las opiniones:', error);
        });
    },
    toggleOpinions() {
      if (this.displayedOpinions.length === this.opinions.length) {
        this.displayedOpinions = this.opinions.slice(0, 2); // Mostrar las primeras 2 opiniones
        this.showMoreButton = true; // Mostrar el botón "Ver más"
      } else {
        this.displayedOpinions = this.opinions; // Mostrar todas las opiniones
        this.showMoreButton = false; // Ocultar el botón "Ver más"
      }
    },
  },
};
</script>
