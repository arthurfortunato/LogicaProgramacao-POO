function escreva(texto) {
  console.log(texto)
}
escreva("Passando o parâmetro");

function somar(a, b) {
  return a + b;
}
let resultado = somar(5, 5);
console.log(resultado)


const sub = function(a, b) {return a - b};
console.log(sub(5, 5))

const mult = (a, b) => a * b;
console.log(mult(4, 5));
