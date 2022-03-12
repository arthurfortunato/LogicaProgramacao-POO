/* 
  8 - Escreva uma função para cada operação matemática básica (soma, 
subtração, multiplicação e divisão). As funções devem receber dois números 
e retornar o resultado da operação
*/

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if(a === 0 || b === 0) {
    throw('Insira um número diferente de 0')
  }
  return a / b
}

function resultadoOperacao(a, b, operacao) {
  if (isNaN(a) || isNaN(b)) {
    throw ('Insira um número!')
  }
  let resultado = operacao(a, b, operacao)
  console.log(resultado)
}

resultadoOperacao(5, 5, multiplicar);