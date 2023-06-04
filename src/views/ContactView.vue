<template>
  <div class="contact-page d-flex flex-column min-vh-100 mt-5">
    <h1>Contacta con nosotros</h1>
    <form @submit.prevent="submitForm">
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
    submitForm() {
      
      const url = 'https://iw4tivf27yl6jlhydikwsafqgm0giqut.lambda-url.eu-west-2.on.aws/'; 
      const data = JSON.stringify(this.formData);

      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          this.isSubmitted = true;
        } else {
          throw new Error('Error al enviar el formulario');
        }
      })
      .catch(error => {
        this.isSubmitted =true;
        console.error(error);
      });
    }
  }
};
</script>