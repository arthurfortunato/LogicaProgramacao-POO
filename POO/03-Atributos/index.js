class Quadrado{
  constructor(base, altura) {
    if(isNaN(base) || isNaN(altura)) {
      throw new Error("Informação não numérica")
    }
    this.base = base;
    this.altura = altura
    this.cor = undefined;
  }
}

const quadrado = new Quadrado(11, 12);
quadrado.cor = 'vermelho'
console.log(quadrado)