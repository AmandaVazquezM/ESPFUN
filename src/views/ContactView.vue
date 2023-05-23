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


<style scoped>
.contact-page {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}
</style>
