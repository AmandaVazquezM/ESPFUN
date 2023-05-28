<template>
  <div class="container d-flex flex-column min-vh-100">
    <section class="mt-5">
      <div class="container p-5 rounded bg-white">
        <h2 class="section-title">Documentos</h2>
        <p>Accede a apuntes que te ayudarán a fortalecer tus conocimientos en lengua española. ¡Explora, aprende y diviértete!</p>
        <div class="col-md-6">
          <input type="file" ref="fileInput" @change="subirArchivo" accept=".pdf" />
          <button type="button" class="btn btn-primary" @click="obtenerDocumentosServidor">Cargar Documentos del Servidor</button>
          <ul class="list-group">
            <li class="list-group-item" v-for="documento in documentosServidor" :key="documento.id">
              <a :href="getDocumentoUrlServidor(documento.archivo)" download>
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
import { Storage } from "@aws-amplify/storage"

export default {
  data() {
    return {
      documentosServidor: [],
    };
  },
  methods: {
    async obtenerDocumentosServidor() {
      try {
        // Obtener la lista de documentos del servidor
        const documentos = await Storage.list('documentos/');

        // Mapear la lista de documentos a un formato adecuado para su visualización
        this.documentosServidor = documentos.map(documento => {
          const urlParts = documento.key.split('/');
          const nombreArchivo = urlParts[urlParts.length - 1];

          return {
            id: documento.key,
            nombre: nombreArchivo,
            archivo: documento.key
          };
        });
      } catch (error) {
        console.error('Error al obtener los documentos del servidor:', error);
      }
    },
    getDocumentoUrlServidor(archivo) {
      // Aquí puedes construir la URL completa para acceder al archivo del servidor
      return `URL_DEL_SERVIDOR/${archivo}`;
    },
    async subirArchivo(event) {
      const file = event.target.files[0];
      const fileName = file.name;
      
      try {
        await Storage.put(fileName, file);
        // Actualizar la lista de documentos después de subir el archivo al servicio
        this.obtenerDocumentosServidor();
      } catch (error) {
        console.error('Error al subir el archivo:', error);
      }
    },
  },
  mounted() {
    // Llamar a obtenerDocumentosServidor cuando el componente se monte inicialmente
    this.obtenerDocumentosServidor();
  },
};
</script>
