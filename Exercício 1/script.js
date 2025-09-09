function pegarValor() {
    let alturaEmCm = parseFloat(document.getElementById('altura').value);
    let alturaEmMetros = alturaEmCm / 100
    let peso = parseFloat(document.getElementById('peso').value)
    const inputElemento = document.getElementById('nome');
    const nome = inputElemento.value;

    let M = peso / (alturaEmMetros**2)
    
    let resultado = ''

    if (M < 16){
        resultado = 'Baixo peso muito grave.'
    }
    else if (M >= 16 && M < 17 ){
        resultado = 'Baixo peso grave.'
    }
    else if (M >= 17 && M < 18.50 ){
        resultado = 'Baixo peso.'
    }
    else if (M >= 18.50 && M < 25 ){
        resultado = 'Peso normal.'
    }
    else if (M >= 25 && M < 30 ){
        resultado = 'Sobrepeso'
    }
    else if (M >= 30 && M < 35 ){
        resultado = 'Obesidade Grau I.'
    }
    else if (M >= 35 && M < 40 ){
        resultado = 'Obesidade Grau II.'
    }
    else if (M >= 40){
        resultado = 'Obesidade Grau III.'
    }


    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `${nome} possui índice de massa corporal igual a ${M.toFixed(2)}, sendo classificado como: ${resultado}`;
}