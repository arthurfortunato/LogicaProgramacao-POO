/* 
  5 - Escreva um programa que imprime todos os números pares entre 1 e 1000.
*/

function imprimePar(numero) {
  let numbers = new Array();
  if (isNaN(numero) || numero <= 0) {
    throw ('Insira um número')
  }
  for (i = 0; i <= numero; i++) {
    if ([i] % 2 == 0) {
      numbers.push(i)
    }
  }
  return console.log(numbers);
}

imprimePar(1000);