import { Estado, EstadoCivil } from "./Enums";
import { Persona, Silla, Direcion1, PersonaConNacionalidad } from "./Tipos";

//Definir el tipo persona
const persona: Persona = {
     nombre: "Sam",
     edad: 20,
     esEmpleado: false,
    estadoCivil: EstadoCivil.CASADO,
     direccion: {
        ciudad: "Medellin",
        barrio: "Villa Linda"
     }
}

//Definir tipo de silla 
const silla1: Silla ={
    nombre: "Mecedora",
    precio: 300000,
    id: "10",
    estado: Estado.REGULAR
}

const persona1: PersonaConNacionalidad = {
    nombre: "Juan",
    edad: 24,
    esEmpleado: true,
    estadoCivil:EstadoCivil.SOLTERO,
    direccion:{
        ciudad: "",
        barrio: ""
    },
    nacionalidad:"Colombiana",
    pais: "Colombia"

}
