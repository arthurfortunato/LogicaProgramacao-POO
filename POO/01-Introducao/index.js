//Exemplo 1
const pessoa = {nome: 'Arthur', idade: 28};
console.log(pessoa.nome)

//Exemplo 2
const quadrado = {
  base: 10,
  altura: 20,
  calculaArea: function() {
    return this.base * this.altura
  }
}

console.log(quadrado.calculaArea());

//Exemplo 3
const agenda = {
  contatos: [
    {nome: 'contato1', telefone: 'telefone1', email: 'email1@gmail.com'},
    {nome: 'contato2', telefone: 'telefone2', email: 'email2@gmail.com'},
    {nome: 'contato3', telefone: 'telefone3', email: 'email3@gmail.com'},
    {nome: 'contato4', telefone: 'telefone4', email: 'email4@gmail.com'},
    {nome: 'contato5', telefone: 'telefone5', email: 'email5@gmail.com'},
  ],
  adicionar: function() {this.contatos.push(contato)}
}

console.log(agenda.contatos);