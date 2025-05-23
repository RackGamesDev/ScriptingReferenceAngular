//Modelo que define una cancion

import { ArtistaModel } from "./artista.model";

export interface CancionModel {
    //Todas las propiedades que puede tener una instancia
    name: string;
    album: string;
    cover: string;
    artist?: ArtistaModel;
    url: string;
    _id: string | number;
}