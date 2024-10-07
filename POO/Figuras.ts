class FiguraGeometrica {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }

    calcularArea(){
        console.log("---calculo area");
        
    }
}

class Circulo extends FiguraGeometrica {
    radio: number
    constructor(nombre: string, radio: number) {
        super(nombre)
        this.radio = radio
    }

    override calcularArea(): void {
        const area = Math.PI * this.radio * this.radio
    }
}

const circulo1 = new Circulo("Circulo",5)
circulo1.calcularArea(); 