export type Pelicula = {
    id: number;
    created_at: string;
    imgURL: string;
    titulo: string;
    categoria: string[];
    año: number;
    director: string;
    descripcion: string;
  };

  export type Voto = {
    id?: string;
    created_at?: string;
    user_id: string;
    pelicula_id: number;
  }
  
  export interface TarjetaTrabajo {
    id: string;
    tipo: string;
    category: string;
    title: string;
    src: string;
    descripcion: string;
    content: JSX.Element;
    tecnologias: string[];
    imagenes: string[];
}
