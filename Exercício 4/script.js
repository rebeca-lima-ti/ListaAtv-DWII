function pegarValor() {
    let codigo = parseInt(document.getElementById('cod').value)
    let totalHorasTrabalhadas = parseInt(document.getElementById('totalHorasTrabalhadas').value)
    let turno = document.getElementById('turno').value.toUpperCase()
    let categoria = document.getElementById('categoria').value.toUpperCase()
    let salarioMinimo = parseFloat(document.getElementById('salarioMinimo').value)

    let valorHora

    if(categoria === 'F'){
        switch (turno) {
          case 'M':
            valorHora = salarioMinimo * 0.10;
            break;
          case 'V':
            valorHora = salarioMinimo * 0.15;
            break;
          case 'N':
            valorHora = salarioMinimo * 0.12;
            break;
          default:
            alert('Turno inválido!');
            return;
        }
    } else if (categoria === 'G') {
        switch (turno) {
          case 'M':
            valorHora = salarioMinimo * 0.18;
            break;
          case 'V':
            valorHora = salarioMinimo * 0.20;
            break;
          case 'N':
            valorHora = salarioMinimo * 0.25;
            break;
          default:
            alert('Turno inválido!');
            return;
        }
    } else {
        alert('Categoria inválida!');
        return;
    }

    let salarioInicial = totalHorasTrabalhadas * valorHora

    let auxAlimentacao;
    if (salarioInicial <= 300) {
        auxAlimentacao = salarioInicial * 0.20;
    } else if (salarioInicial <= 600) {
        auxAlimentacao = salarioInicial * 0.15;
    } else {
        auxAlimentacao = salarioInicial * 0.05;
    }

      
    const salarioFinal = salarioInicial + auxAlimentacao;

    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `Código do funcionário: ${codigo}
                             Número de horas trabalhadas: ${totalHorasTrabalhadas} 
                             Valor da hora trabalhada: R$ ${valorHora.toFixed(2)}
                             Salário inicial: R$ ${salarioInicial.toFixed(2)}
                             Auxílio alimentação: R$ ${auxAlimentacao.toFixed(2)}
                             Salário final: R$ ${salarioFinal.toFixed(2)}`;
}