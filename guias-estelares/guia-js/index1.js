// function
function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}
const copo = fazerSuco('laranja', ' hortelã')
console.log(copo)

/* ########## */

// function scope
let subject = 'aprendendo javascript'
function createThink(subject) {
  subject = 'estudando'
  return subject
}
console.log(createThink(subject))
console.log('Primeira declaração de subject: ', subject)

/* ########## */
// hoisting e arrow function
// sayMyName()

// function sayMyName() {
//   console.log('Student')
// }

// const sayMyName = () => console.log('student javascript')

// callback
function seLigue(nome) {
  console.log(nome)
}
seLigue({ name: 'estudante' })


//function construtora
function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + ' está andando'
  }
}

const ana = new Person('ana')
const JJ = new Person('JJ')

console.log(ana)
console.log(ana.walk())

console.log(JJ)
console.log(JJ.walk())

//o this é referente a variável ana