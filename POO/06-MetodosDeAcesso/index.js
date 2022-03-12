class Quadrado {
  constructor(base, altura) {
    let cor = 'blue';
    this.base = base;
    this.altura = altura;
    this.getCor = () => {return cor};
    this.setCor = (novaCor) => {cor = novaCor};
  }
}

const quadrado = new Quadrado(3, 4);
quadrado.setCor('red')
console.log(quadrado.getCor());


//Métodos de Acesso

class Quadrado2 {
  constructor(base, altura) {
    this._cor = 'blue';
    this.base = base;
    this.altura = altura;
  }
  get cor() { return this._cor};
  set cor(cor) { this._cor = cor}
}

const quadrado2 = new Quadrado2(3, 4);
quadrado2.cor = 'red';
console.log(quadrado2.cor);