/* 
  7 - Escreva uma função que recebe o valor do raio de um círculo e retorne o seu 
perímetro (C = 2*pi*r)
*/

function perimetro(raio) {
  if(isNaN(raio) || raio <= 0) {
    throw ('Número Inválido')
  }
  let circulo = 2 * Math.PI * raio;
  console.log(circulo)
}

perimetro(10);