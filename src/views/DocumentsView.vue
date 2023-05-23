<template>
  <div class="container d-flex flex-column min-vh-100">
    <section class="mt-5">
      <div class="container p-5 rounded bg-white">
        <h2 class="section-title">Documentos</h2>
        <p>Accede a apuntes que te ayudarán a fortalecer tus conocimientos en lengua española. ¡Explora, aprende y
            diviértete!</p>
        <div class="col-md-6" v-for="documento in documentos" :key="documento.id">
          <ul class="list-group">
            <li class="list-group-item">
              <a :href="getDocumentoUrl(documento.archivo)" download>
                <i class="fa fa-file-pdf-o mr-2"></i> 
                {{ documento.nombre }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import { obtenerDocumentos } from '../services/DocumentosService.js';

export default {
  data() {
    return {
      documentos: [],
    };
  },
  mounted() {
    this.obtenerDocumentos();
  },
  methods: {
    obtenerDocumentos() {
      this.documentos = obtenerDocumentos();
    },
    getDocumentoUrl(archivo) {
      // Aquí puedes construir la URL completa para acceder al archivo
      return `/documentos/${archivo}`;
    },
  },
};
</script>