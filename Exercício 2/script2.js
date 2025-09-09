function pegarValor() {
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)

    let media = ((2 * nota1)+(5 * nota2)+(3 * nota3))/10
    let resultado = ''

    if (media <= 5){
        resultado = 'F'
    }
    else if (media > 5 && media <= 6 ){
        resultado = 'E'
    }
    else if (media > 6 && media <= 7 ){
        resultado = 'D'
    }
    else if (media > 7 && media <= 8 ){
        resultado = 'C'
    }
    else if (media > 8 && media <= 9 ){
        resultado = 'B'
    }
    else if(media > 9){
        resultado = 'A'
    }


    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `A média do aluno é igual a: ${media} e sua classificação é: ${resultado}`;
}