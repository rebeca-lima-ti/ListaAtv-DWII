function pegarValor() {
    let data = document.getElementById('data').value

    let meses = [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    let partes = data.split("/")

    let dia = partes[0]
    let mes = partes[1]
    let ano = partes[2]

    const paragrafo = document.getElementById('exibeValor');
    paragrafo.textContent = `${dia} de ${meses[mes - 1]} de ${ano}`;
}