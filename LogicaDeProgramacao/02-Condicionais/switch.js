let sinal = 'vermelho';

switch (sinal) {
  case 'verde':
    console.log('pode passar');
    break;
  case 'amarelo':
    console.log('prestes a fechar, cuidado...');
    break;
  case 'vermelho':
    console.log('fechado, não passe');
    break;
  default:
    console.log('sinal inválido')
    break;
}

let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    console.log(dia = "Domingo")
    break;
  case 1:
    console.log(dia = "Segunda")
    break;
  case 2:
    console.log(dia = "Terça")
    break;
  case 3:
    console.log(dia = "Quarta")
    break;
  case 4:
    console.log(dia = "Quinta")
    break;
  case 5:
    console.log(dia = "Sexta")
    break;
  case 6:
    console.log(dia = "Sábado")
    break;
  default:
    console.log("data inválida");
}