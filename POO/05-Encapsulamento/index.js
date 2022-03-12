//undefined cor
function Quadrado(base, altura) {
  this.base = base;
  this.altura = altura;
  let cor = 'blue';
}

const quadrado = new Quadrado(3, 4);
console.log(quadrado.cor);

//factory function
function criaQuadrado(base, altura) {
  let cor = 'blue';

  return {
    base,
    altura,
    getCor: function(){return cor}
  };
}

const quadrado2 = criaQuadrado(3, 4);
console.log(quadrado2.getCor())

//Com Classes
class Quadrado3 {
  constructor(base, altura) {
    let cor = 'blue';
    this.base = base;
    this.altura = altura;
    this.getCor = () => {return cor}
  }
}

const quadrado3 = new Quadrado3(3, 4);
console.log(quadrado3.getCor());
