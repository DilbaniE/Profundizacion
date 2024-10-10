export class Persona {

    private nombre: string
    private edad: number
    constructor(nombre: string, edad:number) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar(): string{
        return(`hola mi nombre es: ${this.nombre} y tengo ${this.edad}`);
    }
}