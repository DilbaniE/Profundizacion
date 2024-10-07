class Persona {
    name: string
    age: number
    lastname: string

    //Sobrecarga de constructores
    constructor(name: string);     
    constructor(name: string, age: number);
    constructor(name: string, age: number, lastname: string);

    constructor(name:string, age?:number, lastname?:string){
        this.name = name
        if(age){
            this.age = age
        }
        if(lastname){
            this.lastname = lastname
        }
    }
    
}

const persona1 = new Persona("Dilbani")
const persona2 = new Persona("Dilbani", 26)
const persona3 = new Persona("Dilbani", 26, "Enriquez")