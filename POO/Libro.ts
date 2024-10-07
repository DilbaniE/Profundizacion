class Libro {

    id: string
    nombre: string
    autor: string
    
    constructor(id:string, nombre: string, autor: string) {
        // this = palabra reservada para acceder a los atributos
        this.id = id,
        this.nombre = nombre,
        this.autor = autor
    }
}

const libro1 = new Libro("1", "100 años", "Gabriel Garcia");

