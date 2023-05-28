import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerComentarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comentarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comentario?: string | null;
  readonly Usuarios?: (ComentariosUsuario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComentarios = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comentarios, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comentario?: string | null;
  readonly Usuarios: AsyncCollection<ComentariosUsuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comentarios = LazyLoading extends LazyLoadingDisabled ? EagerComentarios : LazyComentarios

export declare const Comentarios: (new (init: ModelInit<Comentarios>) => Comentarios) & {
  copyOf(source: Comentarios, mutator: (draft: MutableModel<Comentarios>) => MutableModel<Comentarios> | void): Comentarios;
}

type EagerPerfil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Perfil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Usuarios?: (Usuario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerfil = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Perfil, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Usuarios: AsyncCollection<Usuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Perfil = LazyLoading extends LazyLoadingDisabled ? EagerPerfil : LazyPerfil

export declare const Perfil: (new (init: ModelInit<Perfil>) => Perfil) & {
  copyOf(source: Perfil, mutator: (draft: MutableModel<Perfil>) => MutableModel<Perfil> | void): Perfil;
}

type EagerUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Contrasena?: string | null;
  readonly Correo?: string | null;
  readonly perfilID: string;
  readonly comentarioss?: (ComentariosUsuario | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Usuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Nombre?: string | null;
  readonly Contrasena?: string | null;
  readonly Correo?: string | null;
  readonly perfilID: string;
  readonly comentarioss: AsyncCollection<ComentariosUsuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Usuario = LazyLoading extends LazyLoadingDisabled ? EagerUsuario : LazyUsuario

export declare const Usuario: (new (init: ModelInit<Usuario>) => Usuario) & {
  copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario>) => MutableModel<Usuario> | void): Usuario;
}

type EagerComentariosUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ComentariosUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comentariosId?: string | null;
  readonly usuarioId?: string | null;
  readonly comentarios: Comentarios;
  readonly usuario: Usuario;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComentariosUsuario = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ComentariosUsuario, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comentariosId?: string | null;
  readonly usuarioId?: string | null;
  readonly comentarios: AsyncItem<Comentarios>;
  readonly usuario: AsyncItem<Usuario>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ComentariosUsuario = LazyLoading extends LazyLoadingDisabled ? EagerComentariosUsuario : LazyComentariosUsuario

export declare const ComentariosUsuario: (new (init: ModelInit<ComentariosUsuario>) => ComentariosUsuario) & {
  copyOf(source: ComentariosUsuario, mutator: (draft: MutableModel<ComentariosUsuario>) => MutableModel<ComentariosUsuario> | void): ComentariosUsuario;
}