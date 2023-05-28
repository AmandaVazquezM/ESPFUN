// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comentarios, Perfil, Usuario, ComentariosUsuario } = initSchema(schema);

export {
  Comentarios,
  Perfil,
  Usuario,
  ComentariosUsuario
};