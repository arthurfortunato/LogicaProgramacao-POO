let vetor = [10,20,30,40,50];
vetor[2] = 60;
console.log(vetor[2])

let vetor2 = [];

for (let i = 0; i < 10; i++) {
  vetor2.push(i);
}

console.log(vetor2);

let vetor3 = [10,20,30,40,50,60,70,80,90];

console.log("Percorrendo com for:")
for (let i = 0; i < vetor3.length; i++) {
  console.log(vetor3[i]);
}

console.log("Percorrendo com for of:")
for (let numero of vetor3) {
  console.log(numero);
}

console.log("Percorrendo com for in:")
for (let indice in vetor3) {
  console.log(vetor3[indice]);
}

//MATRIZ
console.log("Percorrendo com Matriz:")
let matriz =[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let linha of matriz) {
  for (let elemento of linha) {
    console.log(elemento)
  }
}