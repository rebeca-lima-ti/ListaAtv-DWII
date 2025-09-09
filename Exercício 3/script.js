function pegarValor() {
    let rastreamento = document.getElementById('rastreamento').checked
    let pecas = parseFloat(document.getElementById('pecas').value)
    let regiao = parseInt(document.getElementById('regiao').value)
    let distancia = parseFloat(document.getElementById('distancia').value)
    let frete = 0
    let resto = 0
    let total = 0
    let freteKm = distancia * 6


    if (pecas <= 1000){
        if (regiao == 1){
            frete = pecas * 1
        }
        else if (regiao == 2){
            frete = pecas * 1.2
        }
        else if (regiao == 3){
            frete = pecas * 1.3
        }
    }
    else if (pecas > 1000){
        if (regiao == 1){
            resto = pecas - 1000
            frete = (1000 * 1) + (resto * 0.99)
        }
        else if (regiao == 2){
            resto = pecas - 1000
            frete = (1000 * 1.2) + (resto * 1.056)
        }
        else if (regiao == 3){
            resto = pecas - 1000
            frete = (1000 * 1.3) + (resto * 1.131)
        }
    }

    total = frete + freteKm

    const paragrafo = document.getElementById('exibeValor');
    if(rastreamento == true){
        paragrafo.textContent = `Taxa de Rastreamento: 200,00\nValor do frete pelas peças: ${frete}\nValor do frete por quilômetro:${freteKm}\nTotal do frete:${total + 200}`;
    }
    else{
        paragrafo.textContent = `Taxa de Rastreamento: 0,00\nValor do frete pelas peças: ${frete}\nValor do frete por quilômetro:${freteKm}\nTotal do frete:${total}`;
    }
}