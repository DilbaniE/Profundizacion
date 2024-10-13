interface Direccion{
    nomenclatura: string
    ciudad: string
}

interface Empleado{
    name: string
    lastName: string
    age: number
    job: string
    apellido?: string
    direccion: Direccion
}

const main = () => {
    // Explicito
    const jsonEmplead1 = {
        name: "Jose",
        "lastName": "Enriquez",
        age: 53,
        "job": "Gerente",
        "apellido": "Melo"
    }
    
    // Implicito
    const jsonEmplead2: Empleado = {
        name: "Jose",
        lastName: "Enriquez",
        age: 53,
        job: "Gerente",
        direccion:{
            nomenclatura: "cdb",
            ciudad: "Medellin"
        }
    }

    //cambiar nomenclatura 
    jsonEmplead2.direccion.nomenclatura = "kgb new"
}