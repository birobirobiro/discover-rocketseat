/*
Celsius em fahrenheit
  Criar uma função que receba uma string em celsius ou fahrenheit e faça
  a transformação de uma unidade para outra

  C = (F - 32) * 5/9
  F = C * 9/5 + 32
*/

//transformDegree('50f)
function transformDegree(degree) {
  const celciusExists = degree.toUpperCase().includes('C');
  const fahrenheitExists = degree.toUpperCase().includes('F');

  //fluxo de erro
  if (!celciusExists && !fahrenheitExists) {
    throw new Error('Grau não identificado!')
  }

  //fluxo ideal, F -> C
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
  let degreeSign = 'C';

  //fluxo alternativo, F -> C
  if (celciusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celcius => celcius * 9 / 5 + 32
    degreeSign = 'F';
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree('50F'))
  console.log(transformDegree('10C'))

  // transformDegree('50Z')
} catch (error) {
  console.log(error)
}
