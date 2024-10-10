import { Persona } from "./export-import/Persona";
//Importacion de clase persona

const mainPersonas: Function = () => {
    const person: Array<Persona> = []

    //persona1 forma1
    const persona1: Persona = new Persona("Juan", 23);
    person.push(persona1)
    
    //persona2 forma2
    person.push(new Persona("Dilbani", 20))

    //recorriendo el array con for
    for (let index = 0; index < person.length; index++) {
        const persona = person[index];
        console.log(persona.saludar());
    }

    //recorriendo el array con foreach
    person.forEach((persona: Persona) => {
        console.log(persona.saludar());
    });
}