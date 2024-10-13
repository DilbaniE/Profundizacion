
import {readFileSync} from 'fs'
import {} from 'path'
const leerEmpleados = () =>{
    const path = __dirname + '/empleado.json'
    console.log(path);
    
    const empleadoString = readFileSync('./empleado.json').toString()
    console.log(empleadoString);
    
    const empleados = JSON.parse(empleadoString)
    console.log(empleados);
    
}
leerEmpleados()