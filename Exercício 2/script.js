function pegarValor() {
    let idade = parseInt(document.getElementById('idade').value)
    let resultado = ''

    if (idade < 15){
        resultado = 'Criança.'
    }
    else if (idade >= 15 && idade < 30 ){
        resultado = 'Jovem.'
    }
    else if (idade >= 30 && idade < 60 ){
        resultado = 'Adulto.'
    }
    else if(idade >= 60){
        resultado = 'Idoso.'
    }


    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `${resultado}`;
}