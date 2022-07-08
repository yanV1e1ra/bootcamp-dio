"use strict";
const button = document.getElementById("button");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}
;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
