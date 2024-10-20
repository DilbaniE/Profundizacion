//sincronico
/*
console.log("primer paso");
console.log("segundo paso");
console.log("tercero paso");
*/

//asincronico
console.log("primer paso");
setTimeout(() => {
    console.log("segundo paso");
    
}, 2000);

console.log("tercer paso");

setTimeout(() => {
    console.log("cuarto paso");
    
}, 1000);

//TIPOS DE FUNCIONES
const funcion1 = () =>{}

function funcion2() { }

const funcion3 = function () {}

// -- callbacks
const procesarEntrdadUsuario = (callback: (nombre: string) => void) => {
    const nombre = "Dil"
    callback(nombre)
}

const saludar = (nombre: string) =>{
    console.log(`hola ${nombre}`);
}
procesarEntrdadUsuario(saludar);

//forma 1 de invocar callback
const saludarEnglish = (nombre: string) =>{
    console.log(`hi ${nombre}`);
}
//invocar callback funcion independiente
procesarEntrdadUsuario(saludarEnglish);

//forma2 de invocar callback desde arrow funtion por argumento
procesarEntrdadUsuario((nombre) =>{
    console.log("bounjur " + nombre);
})



