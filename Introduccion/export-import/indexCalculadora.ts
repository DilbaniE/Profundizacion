import { multi, sumar, restar as restNum } from "./Calculadora"
function main() {
    const num1 = 2
    const num2 = 8

    const resulMilti = multi(num1, num2)
    console.log(resulMilti);
    
    const resulSuma = sumar(num1, num2)
    console.log(resulSuma);

    const resulResta = restNum(num1, num2)
    console.log(resulResta);
    
}
main()