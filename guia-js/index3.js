/* Expressões e Operadores */

//a ideia da expressão new é criar um novo objeto

let name = new String('Student')
let age = new Number(37)

//tipo de dado
console.log(typeof 'javascript')

//operadores aritméticos

//multiplicação
console.log(3.2 * 5.5)

//divisão
console.log(12 / 2)

//soma
console.log(32 + 5.9)

//subtração
console.log(32 - 18)

//resto da divisão %
let remainder
remainder = 11 % 3
console.log(remainder) // 2

//incremento ++
let increment = 0
increment++ //é sempre mais 1
console.log(increment)
//++increment irá fazer  increment antes, é diferente de increment++

//o mesmo se aplica ao decrement
let decrement = 0
console.log(decrement--)
console.log(decrement)
console.log(--decrement)

//exponencial **
console.log(3 ** 3)


//Operadores de comparação
// == igual
// != diferente
// === estritamente igual
// !== estritamente diferente
// > maior
// >= maior ou igual
// < menor
// <= menor ou igual

//operadores de atribuição
x = 1
x += 2 //é o mesmo que x = x + 2
console.log(x)
//vale para subração, multiplicação, divisão  e soma
y = 10
y /= 2
console.log(y)

//operadores lógicos
// AND &&
// OR ||
// NOT !

//condiçao ternário
// x = 10
//x === 10 ? 'true' : false

/*
FALSY
Quando um valor é considerado false em contextos onde
um booleando é obrigatório (condicionais e loops)
0; -0; ''; null, undefined; NaN
console.log(0 ? 'verdadeiro' : 'falso') //false

TRUTHY
Quando um valor é considerado true em contextos onde
um booleando é obrigatório (condicionais e loops)
true; {}; []; '545';-';Infinity; -Infinity; 3.23
console.log(12.2 ? 'verdadeiro' : 'falso') //true

*/



