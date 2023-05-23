<template>
  <div class="contact-page d-flex flex-column min-vh-100 mt-5">
    <h1>Contacta con nosotros</h1>
    <form @submit="submitForm">
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="formData.email" required class="form-control">
      </div>
      <div class="form-group">
        <label for="message">Mensaje:</label>
        <textarea id="message" v-model="formData.message" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
    <div v-if="isSubmitted">
      <p>¡Gracias por contactarnos! Te responderemos pronto.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      isSubmitted: false
    };
  },
  methods: {
    submitForm(event) {
  event.preventDefault();

  axios.post('http://localhost:8080/contact', this.formData)  // Reemplaza con la URL de tu backend local
    .then(() => {
      this.isSubmitted = true;
    })
    .catch((error) => {
      console.error(error);
    });
}

  }
};
</script>

<style scoped>
.contact-page {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}
</style>
