abstract class FiguraConAbstracion {
    nombre: string
    constructor(nombre: string) {
        this.nombre = nombre
    }

    abstract calcularArea();

    imprimirNombre(){
        console.log("el nombre es. ", this.nombre);
        
    }
}

class Circulo2 extends FiguraGeometrica {
    radio: number
    constructor(nombre: string, radio: number) {
        super(nombre)
        this.radio = radio
    }

    override calcularArea(): void {
        const area = Math.PI * this.radio * this.radio
        console.log("El area es ", area);
        
    }
}

class Rectangulo extends FiguraGeometrica {

    constructor(nombre: string,  public ancho: number, public alto: number) {
        super(nombre)
    }

    override calcularArea(): number {
        return this.ancho * this.alto
    }
}

const circ = new Circulo("Circulo",5)
circ.calcularArea(); 