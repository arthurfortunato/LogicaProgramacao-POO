/* 
1 - Dada a variável idade, escreva um programa que imprima se a pessoa é 
maior ou menor de 18 anos.

2 - Complemente o exercício anterior incluindo as seguintes faixas etárias:
    Idade Faixa
    ● < 12 Criança
    ● 12-18 Adolescente
    ● 18-60 Adulto
    ● > 60 Idoso
*/

function indicaIdade(idade) {
  if (idade > 0 && idade < 12) {
    console.log(`A pessoa é uma criança de ${idade} anos`)
  }
  else if (idade >= 12 && idade <= 18) {
    console.log(`A pessoa é um(a) adolescente de ${idade} anos`)
  }
  else if (idade > 18 && idade <= 60) {
    console.log(`A pessoa é um adulto de ${idade} anos`)
  }
  else if (idade > 60) {
    console.log(`A pessoa é um idoso de ${idade} anos`)
  }
  else {
    console.log('Idade Inválida')
  }
}
indicaIdade(28)