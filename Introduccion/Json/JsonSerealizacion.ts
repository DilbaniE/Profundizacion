class Empleado {
    nombre: string
    edad: number
    puesto: string

    constructor(nombre: string, edad:number, puesto: string) {
        this.nombre = nombre
        this.edad = edad
        this.puesto = puesto
    }


}

//De clase a jsonString 
const serializacion = () => {
    const empleadoJson = (nombre: string, edad: number, puesto?: string): any =>{
        console.log(`El empleado con nombre ${nombre} y su edad ${edad} y su puesto es ${puesto}`);
    }
    //instancia de empleado
    const empleado1 = new Empleado("Dil", 26, "Desempleada")
    //Json de la instancia empleado1, JSON clase reservada de ts y js
    const json = JSON.stringify(empleado1)    
    console.log(json);

    const b = empleadoJson("Dilbani", 23, "Desempleada")
    console.log(b);
    
    
}

//De jsonString a objeto
const deserializacion = () => {
    const jsonString = `{"nombre: "Ana", edad:28, "Desarrolladora"}`
    //Si quiero acceder al valor "Ana " de la propiedad nombre 
    //Debo convertir a un json
    const empleadoJson = JSON.parse(jsonString)
    console.log(empleadoJson);
    empleadoJson.nombre;
    empleadoJson["nombre"]
    
}

//Crear directamente un Json
const dontNotacion = () => {
    const empleadoJson = {
        nombre:"Olga",
        edad: 30,
        "Puesto principal": "Gerente"
    }
    //accediendo
    console.log(empleadoJson);
    //don notation (Punto)
    console.log(empleadoJson.edad);
    //Bracket Notacion (corchetes)
    console.log(empleadoJson["edad"]);
    
    //otra forma donde se usa brecket notacion
    //cuando la clave esta guardada en una variable
    const clavePesto = "Puesto principal"
    console.log(empleadoJson[clavePesto]);   

    
    const empleado2 = new Empleado(empleadoJson.nombre, empleadoJson.edad, empleadoJson["Puesto principal"])
    //Esta es la clase de empleado
    //Las clases en js y tps se manipulan como json
    console.log(empleado2);
    console.log(empleado2.edad);
    
    
}
//deserializacion()
dontNotacion()