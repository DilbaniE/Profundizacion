// @ts-ignore
import * as readline from 'readline';
//@ts-ignore
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

const leerDatos = (mensaje: string) => 
    new Promise((resolve) => rl.question(mensaje, (respuesta: string) => resolve(respuesta)))

const main = async () => {
    const nombre = await leerDatos("Ingrese nombre ")
    console.log("Su nombre es: ", nombre);
    
    rl.close()
}

main()