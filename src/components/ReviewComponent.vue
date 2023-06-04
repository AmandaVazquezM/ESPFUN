<template>
  <section>
    <div class="container">
      <h2 class="text-center section-title">Nuestros usuarios opinan</h2>
      <br>
      <div class="row justify-content-center">
        <div class="col-md-4" v-for="(opinion) in displayedOpinions" :key="opinion.id">
          <div class="opinion card">
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
    <br><br>
    <div v-if="showMoreButton==false" class="row justify-content-center">
      <div class="col-md-6">
        <h4>⭐⭐Valoranos⭐⭐</h4>
        <form @submit="addOpinion">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" class="form-control" id="name" v-model="newOpinion.name" required>
          </div>
          <div class="form-group">
            <label for="content">Comentario:</label>
            <textarea class="form-control" id="content" rows="3" v-model="newOpinion.content" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Agregar comentario</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import OpinionService from '../services/OpinionService';
import { opinionsStorage } from '../services/OpinionService';

export default {
  data() {
    return {
      opinions: [],
      displayedOpinions: [],
      showMoreButton: true,
      newOpinion: {id: '', name: '', content: ''}
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
          this.displayedOpinions = this.opinions.slice(0, 3); 
          if (this.opinions.length <= 2) {
            this.showMoreButton = false; 
          }
        })
        .catch((error) => {
          console.error('Error al obtener las opiniones:', error);
        });
    },
    toggleOpinions() {
      if (this.displayedOpinions.length === this.opinions.length) {
        this.displayedOpinions = this.opinions.slice(0, 3); 
        this.showMoreButton = true; 
      } else {
        this.displayedOpinions = this.opinions; 
        this.showMoreButton = false; 
      }
    },
    addOpinion() {
      const newOpinion = {
        id: this.opinions.length + 1, name: this.newOpinion.name, content: this.newOpinion.content,
      }; 
      this.opinions.push(newOpinion); 
      localStorage.setItem(opinionsStorage, JSON.stringify(this.opinions)); 
      this.displayedOpinions = this.opinions.slice(0, 2); 
      this.newOpinion.name = ''; 
      this.newOpinion.content = ''; 
      if (this.opinions.length <= 2) {
        this.showMoreButton = false; 
      } else {
        this.showMoreButton = true; 
      }
    }
  },
};
</script>
