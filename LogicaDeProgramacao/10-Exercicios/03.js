/* 
  3 - Escreva um programa que imprime os 10 primeiros números naturais.
*/

function imprimeNumerosNaturais(numero) {
  let numbers = new Array();
  for (let i = 1; i <= numero; i++) {
    numbers.push(i);
  }
  return console.log(numbers);
}
imprimeNumerosNaturais(10);