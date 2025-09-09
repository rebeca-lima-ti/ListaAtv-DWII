function pegarValor() {
    let num1 = parseFloat(document.getElementById('num1').value)
    let operador = document.getElementById('operador').value.toLowerCase()
    let num2 = parseFloat(document.getElementById('num2').value)

    let resultado

    if(operador == 'soma'){
      resultado = num1 + num2
    }else{
      resultado = num1 - num2
    }

    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `O resultado é: ${resultado}`;
}