// como crear una promesa
const promesa = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
             //si la promesa se resuelve cumplida
            resolve("finalizar")

            //promesa con rechazo
            reject("error")
        }, 1000)
    });
}

//resover una promesa con then y catch
const main = () =>{
    promesa()
        .then((valor) =>{
            console.log(valor);            
        })
        .catch((error) =>{
            console.log(error);            
        })
}
main()

//resover una promesa con t
const main2 = async () =>{
    try {
        const valor = await promesa();
        console.log(valor);
    } catch (error) {
        console.log(error);
    }
}
main2()