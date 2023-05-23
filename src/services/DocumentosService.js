
const documentos = [
  { id: 1, nombre: 'Documento 1', archivo: 'archivo1.pdf' },
  { id: 2, nombre: 'Documento 2', archivo: 'archivo2.pdf' },
  { id: 3, nombre: 'Documento 3', archivo: 'documento3.pdf' },
  { id: 1, nombre: 'Documento 1', archivo: 'archivo1.pdf' },
  { id: 2, nombre: 'Documento 2', archivo: 'archivo2.pdf' },
  { id: 3, nombre: 'Documento 3', archivo: 'documento3.pdf' },
  // ... otros documentos
];


export function obtenerDocumentos() {
  
  return documentos;
}


export function obtenerDocumentoPorId(id) {
  return documentos.find(doc => doc.id === id);
}
