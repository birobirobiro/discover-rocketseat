//if... else
let temperatura = 38;

if (temperatura >= 37.5) {
  console.log('Febre alta')
} else if (temperatura < 37.5 && temperatura >= 37) {
  console.log('Febre moderada')
} else {
  console.log('Febre moderada')
}

//switch
let expression = a;

switch (expression) {
  case 'a':
    console.log('a')
    break;
  case 'b':
    console.log('b')
    break
  default:
    console.log('Default')
    break;
}

//try catch
try {
  //funcao, codigo
} catch (e) {
  //se der algum erro irá cair no catch
}