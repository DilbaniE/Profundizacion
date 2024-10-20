//CALLBACKS anidados dificil de leer y mantener
console.log("primer paso");
setTimeout(() => {
    console.log("segundo paso");
    console.log("tercer paso");
    setTimeout(() => {
        console.log("cuarto paso");
        setTimeout(() => {
            console.log("quinto paso");
            setTimeout(() => {
                console.log("sexto paso");
                
            }, 4000);
        }, 3000);
    }, 1000);
}, 2000);



setTimeout(() => {
    console.log("cuarto paso");
    
}, 1000);
