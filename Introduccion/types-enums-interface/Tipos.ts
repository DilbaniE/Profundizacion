import { Estado, EstadoCivil } from "./Enums"

//tipo persona asignar prpiedades
export type Persona = {
    nombre: string
    edad: number | string //union de tipos
    esEmpleado: boolean
    estadoCivil: EstadoCivil
    direccion: Direcion1
}

export type Direcion1 = {
    ciudad: string,
    barrio: string
}

export type Nacionalidad = {
    nacionalidad: string,
    pais: string
}

//Interseccion de tipos de datos, se crea un nuevo tipo de dato
export type PersonaConNacionalidad = Persona & Nacionalidad;

//Alias (diferenciacion de union de tipos)
export type ID = number | string

//Alias es la definicion de union de tipos 
export type nombreSilla = "Rimax" | "Mecedora"


export type Silla = {
    nombre: nombreSilla
    id: ID //Union de tipos
    precio: number,
    estado: Estado
}