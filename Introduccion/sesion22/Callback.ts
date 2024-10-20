//Callback simular lectura de un archivo

const leerArchivo = (callback: (inforArchivo: string) => void) =>{
    console.log("iniciar lectura de archivo")
    setTimeout(() =>{
        const contenidoArchi = "Hola Dil este es el archivo"
        callback(contenidoArchi)
    }, 2000);    
}

leerArchivo((contenido) =>{
    console.log("contenido archivo");
    console.log(contenido);
    
})