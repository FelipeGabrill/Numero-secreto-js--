function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;
    if (chuteForInvalido(numero)) {
        console.log('Valor invalido');
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        console.log(`valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`);
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > menorValor || numero < maiorValor;
}
