<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          <img class="logo-image img-fluid" src="./assets/imgs/logo_transparent.png">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/games">Juegos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contacta con nosotros</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
      document.querySelector('.navbar-collapse').classList.toggle('show');
    });
  }
}
</script>