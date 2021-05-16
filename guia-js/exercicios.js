// 1.Declare uma variável chamada weigth
let weight;

// 2. Qual o tipo de váriável
// console.log(typeof weight);

// 3. Declare uma variavel e atribua valores para cada um dos dados
let name = 'luciano';
let age = 37;
let weigth = 74.2;
let isSubscribed = true;

// 4.Qual tipo de dado é a variável abaixo
// let student = {}
//R: object

// 4.1 Atribuir a ela as propriedades do exercício 3
let student = {
  name: 'luciano',
  age: 37,
  weigth: 74.2,
  isSubscribed: true
};

// 4.2 Mostrar no console a mensagem abaixo, usando a varíavel acima.
// <name> de idade <idade> está pesando <pesa> kg
console.log(`${student.name} de idade ${student.age} está pesando ${student.weigth} `)

// 4.3 Reatribuir o valor da variável students, colocando dentro dela o objeto student

students = [
  student,
]

// console.log('Variável students:', students)

// 5. Coloque no console o valor da posição zero (0)
console.log('verificando valor em posição: ', students[0].name)

// 6. cria um novo student e coloque na posição 1 de students

const john = {
  name: 'john',
  age: 23,
  weight: 60,
  isSubscribed: true
}

students.push(john)
console.log('verificando o novo estudante: ', students[1])

// ou
//students[1] = john
//ou
// students = {
//   student,
//   john
// }