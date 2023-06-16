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
      if (!this.validateForm()) {
        return;
      }

      const url = 'http://localhost:1025/email'; 

      const data = {
        from: this.formData.email,
        to: 'usuarioprueba097@gmail.com',
        subject: 'Asunto del correo',
        text: `Nombre: ${this.formData.name} Mensaje: ${this.formData.message}`

      };


      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
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
          this.isSubmitted = true;
          console.error(error);
        });
    }
    ,
    validateForm() {
      let isValid = true;
      if (this.formData.name.trim() === '') {
        isValid = false;
        alert("El nombre no es válido");
      }
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(this.formData.email)) {
        isValid = false;
        alert("El email no es válido");
      }
      if (this.formData.message.trim() === '') {
        isValid = false;
        alert("El mensaje no es válido");
      }

      return isValid;
    }
  }
};
</script>

