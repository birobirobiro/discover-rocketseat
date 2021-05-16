//Estrutura de repetição
//for
/* 
declara uma variável com valor 0
enquanto ela for menor do que 10
essa variável será incrementada e o valor de i deixa de ser 
zero e passa a ser 1 e aí o for começa tudo de novo

break - para a execução
continue - pula
*/
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    continue; //irá continuar
  }
  console.log(i)
}

//while - enquanto for true ou false ele irá executar
let i = 0;
while (i < 10) {
  console.log(i)
  i++; //incrementador
}

//for of - navega por cada item da string / array
let nameUnico = 'student';
let names = ['javascript', 'html', 'css', 'git'];

for (let char of names) {
  console.log(char)
}

//for in - cria um loop em cima de um objeto, pega as propriedades e seus valores
let person = {
  nome: 'john',
  idade: 40,
  peso: 70
}

for (let i in person) {
  console.log('Propriedade: ', person[i])
}
