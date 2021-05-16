//Operação básica com Array

const cestaBasica = ['arroz', 'feijao', 'oleo', 'macarrao']

//add no final do array
cestaBasica.push('enlatados')
//[ 'arroz', 'feijao', 'oleo', 'macarrao', 'enlatados' ]

//remove o último item do array
cestaBasica.pop()

//add no início do array
cestaBasica.unshift('Leite em pó')

//remove do início do array
cestaBasica.shift()
console.log(cestaBasica)

const animals = [
  'Cachorro',
  'Gato',
  'Leão',
  {
    name: 'Elefante',
    age: '5'
  }
]

//acessando o objeto oe buscando o valor do item name
console.log(animals[3].name)