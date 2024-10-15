//Objeto apartir de una interfaz

import { Coche, Vehiculo } from "./Interfaces";

const vehiculo1: Vehiculo = {
    marca: "Renault",
    velocidadMax: 150,
    acelerar() {
        console.log("Renault tiene una velocidad 150km");
        
    }
}

//Objeto de tipo coche
const coche1: Coche = new Coche("Mazda", 180);
coche1.acelerar();
