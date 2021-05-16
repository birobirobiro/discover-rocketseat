/*
Sistema de gastos familiar

Crie um objeto que irá possuir 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []

Criar uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem se a família está com saldo positivo
ou negativo, seguido do valor do saldo
*/

let orcamento = {
  receitas: [11000, 280, 350, 200.89, 4.000],
  despesas: [2300, 350.9, 600.8, 400, 700]
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

function calcular() {
  const calcReceitas = sum(orcamento.receitas);
  const calcDespesas = sum(orcamento.despesas);
  const result = calcReceitas - calcDespesas;

  if (result >= 0) {
    console.log(`Seu saldo está positivo ${result.toFixed(2)}`)
  } else {
    console.log(`Seu saldo está negativo ${result.toFixed(2)}`)

  }
}
calcular()