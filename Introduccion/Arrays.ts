let numeros: number[]

//Declarondo array vacio
const frutas: Array<string> = [];

//Agregar frutas al array
frutas.push("Pera")
console.log(frutas);
console.log("indice ", frutas[0]);
frutas.push("Fresa")

//Eliminando la ultima fruta del array
const eliminarFruta = frutas.pop()
console.log("fruta eliminada", eliminarFruta);

frutas.push("Piña")
frutas.push("Manzana")
frutas.push("Kiwe")
frutas.push("Mandarina")
frutas.push("Mora")

frutas.forEach((value, index) =>{
    console.log(`fruta ${value}, index ${index}`);
})

for (let index = 0; index < frutas.length; index++) {
    const element = frutas[index];
    console.log(`fruta ${element}, index ${index}`);
}