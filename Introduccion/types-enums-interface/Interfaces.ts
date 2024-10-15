export interface Vehiculo{
    marca: string,
    velocidadMax: number,
    acelerar(): void
}

export class Coche implements Vehiculo{
    marca: string
    velocidadMax: number

    constructor(marca: string, velocidadMax: number){
        this.marca = marca
        this.velocidadMax = velocidadMax
    }

    acelerar(): void {
        console.log(`El carro con marca ${this.marca} y la velocidad ${this.velocidadMax}`);
    }
}