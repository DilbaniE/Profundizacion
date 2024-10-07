interface VehiculoConInterfaz {

    modelo: string
    marca: string

    encender(): void
    apagar(): void
}

class Moto implements VehiculoConInterfaz {

    modelo: string
    marca: string

    encender(): void{
        console.log("encender moto");
        
    }
    
    apagar(): void{
        console.log("apagar moto");
        
    }
}

class Carro implements VehiculoConInterfaz {
    modelo: string
    marca: string
    
    encender(): void{
        console.log("encender carro");
        
    }
    
    apagar(): void{
        console.log("apagar carro");
        
    }
}

const carro = new Carro()
carro.apagar()
carro.encender()

const moto = new Moto()
moto.apagar()
moto.encender()