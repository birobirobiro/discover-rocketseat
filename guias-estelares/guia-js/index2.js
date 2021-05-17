/*
Prototype
Irá herdar todas as propriedades e métodos do protótipo ascendente
ex: 'nome'._proto_
*/

//Type coersion
console.log('9' + 8) //98

//Type conversion
console.log(Number('9') + 5)

//transformando string em número
let string = '90'
console.log(Number(string))

//transformando número em string
let number = 123
console.log(String(number))

//contando caracteres em string
let word = 'paralelepipedo'
console.log(word.length)

//transformando numero em string para contar
let numberNew = 3216546132
console.log(String(numberNew).length)

//casas decimais
let numDecimal = 3131.231654
console.log(numDecimal.toFixed(2)) //3131.23

//trocar o ponto pela vírgula
console.log(numDecimal.toFixed(2).replace('.', ',')) //3131,23
//obs não é um número no javascript por conta da vírgula

//transformar letras minúsculas em maiúsculas
let frase = 'Aprendendo a linguagem javascript'
console.log(frase.toUpperCase()) //.toLoweCase() irá fazer ao contrário

//procurando pela string
let busca = 'Procurando uma palavra chave na string'
console.log(busca.includes('uma')) //irá retornar false ou true

//manipulando strings em arrays, o split gera um novo array
//onde cada texto é uma posição dentro do array
//transformaremos o array em um texto e onde eram espaços 
//vamos colocar _
let arr = 'Sou um Programador Javascript Expert'
let newArr = arr.split(' ')
console.log(newArr)//[ 'Sou', 'um', 'programador', 'javascript', 'expert' ]
//join junta o array com o tipo de separador escolhido
let arrJoin = newArr.join("-")// juntando tudo e add o - entre as palavras
console.log(arrJoin.toLowerCase())// transformando tudo em minúsculas

//criando array com constructor
// let myArr = ['a', 'b', 'c']
let myArr = new Array('c', 'e', 'f')
console.log(myArr)
//ou let myArr = new Array(10) - cria um array com 10 posições vazias

//transformar caracteres em elementos de um array
let caracteres = 'manipulando caracteres'
console.log(Array.from(caracteres))

//manipulando arrays
let techs = ['html', 'css', 'javascript', 'git', 'sql']

//add um item no fim da fila
techs.push('react')

//add no inicio do fila
techs.unshift('react native')

//remover do fim
techs.pop()

//remover do começo
techs.shift()

//pegar alguns elementos do array - slice = cortar
//retorna o índice 1 e para no índice 3 não retornando ele
//exibe o item do índice: 1 e 2
console.log('slice: ', techs.slice(1, 3))

//encontrar a posição do índice
console.log('posição: ', techs.indexOf('git'))

//removendo índice do array com splice
//chega no índice 2 e remove um elemento
console.log('removendo com splice: ', techs.splice(2, 1))

//descobrir posição do index
console.log('posição do index: ', techs.indexOf('git'))
