<template>
  <main> 
    <div id=presentacion class="section mt-4">
      <section class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="text">
              <h1 class="section-title">La plataforma de Aprender Lengua Española gamificada para Primaria y Secundaria
              </h1>
              <h3>ESPFUN es la plataforma que conecta con los alumnos y despierta su entusiasmo por la lengua.</h3>
              <router-link to="/contact" class="btn btn-primary">Solicitar más información</router-link>
              <p class="mt-3">Escríbenos y nos pondremos en contacto contigo</p>
            </div>
          </div>
          <div class="col-lg-6">
            <img class="img-fluid" src="../assets/imgs/alumno.jpg" alt="Imagen de ejemplo">
          </div>
        </div>
      </section>
      <section >
  <div class="embed-responsive embed-responsive-16by9 my-5">
    <iframe src="https://player.vimeo.com/video/828395835?h=bee979ad42&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="1280" height="720" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="High-intensity Classes"></iframe>
  </div>
</section>



      <section id="contenido" class="section mt-4" style="width:80%; margin-left: 10%;">
        <div class=" section mt-6">
          <h2 class="section-title">Sumergete en la lengua española</h2>
            <div class="section-title" style="margin-bottom: 120px;;" >
              <p>ESPFUN sumerge a los estudiantes en la aventura de resolver diferentes juegos de todas las categorías lingüísticas
                para que seas un experto en la materia de una forma divertida</p>
          </div>
          <div class="row mt-6">
            <div class="col-lg-6">
              <img style="max-width: 30%; margin-bottom: 120px;" src="../assets/imgs/dia-mundial-del-libro.png" alt="Imagen libro" class="img-fluid">
            </div>
            <div class="col-lg-6">
              <h3 class="section-title">Comprensión Lectora</h3>
              <p>Para resolver los casos deberán completar la lectura de los libros y superar las pesquisas planteadas.
                Cada caso incluye actividades organizadas en tres momentos: antes, durante y después de la lectura.</p>
            </div>
            <div class="row mt-6">
              <div class="col-lg-6">
                <h3 class="section-title">Motivación y juego se suman a la gramática</h3>
                <p>Superate a ti mismo jugando con la gramática. Cinco de cada seis estudiantes aseguran
                  que ESPFUN aumenta su interés por la gramática.</p>
              </div>
              <div class="col-lg-6">
                <img style="max-width: 30%; margin-bottom: 120px;" src="../assets/imgs/palanca-de-mando.png" alt="Imagen mando" class="img-fluid">
              </div>
            </div>
            <div class="row mt-6">
              <div class="col-lg-6">
                <img style="max-width: 30%;margin-bottom: 120px;" src="../assets/imgs/examen.png" alt="Imagen trivial" class="img-fluid">
              </div>
              <div class="col-lg-6">
                <h3 class="section-title">¡Prueba nuestro trivial!</h3>
                <p>Juega a nuestro trivial dónde aprenderas tanto de literatura como de semántica. ¡Intenta superar todas las preguntas!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id=reseñas class="section mt-5">
        <div class="container p-5">
          <ReviewComponent></ReviewComponent>
        </div>
      </section>
    </div>
  </main>
</template>




<script>
import ReviewComponent from '../components/ReviewComponent.vue';

export default {
  name: 'HomeView',
  components: {

    ReviewComponent,

  }
}
</script>
<style>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 (720/1280) */
  overflow: hidden;
}

.video-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  .video-container {
    padding-bottom: 75%; /* Adjust the aspect ratio for smaller screens */
  }
}

</style>