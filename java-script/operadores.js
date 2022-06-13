 function equalNumbers (num1, num2) {
    var soma, comp10, comp20, igual;

    num1 === num2? igual = "são" : igual = "não são";
    
    soma = num1 + num2;

    soma > 10? comp10 = "maior" : comp10 ="menor";

    soma > 20? comp20 = "maior" : comp20 ="menor";

    return `Os numeros ${num1} e ${num2} ${igual} iguais. Sua soma é ${soma}, que é ${comp10} que 10 e ${comp20} que 20.`;
 }

console.log(equalNumbers(20, 20));
