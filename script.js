function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero';
    }
    return a / b;
}

function calculate() {
    const operation = document.getElementById('operation').value;
    const value1 = parseFloat(document.getElementById('value1').value);
    const value2 = parseFloat(document.getElementById('value2').value);
    let result;

    switch (operation) {
        case 'soma':
            result = soma(value1, value2);
            break;
        case 'subtracao':
            result = subtracao(value1, value2);
            break;
        case 'multiplicacao':
            result = multiplicacao(value1, value2);
            break;
        case 'divisao':
            result = divisao(value1, value2);
            break;
        default:
            result = 'Operação inválida';
    }

    document.getElementById('result').innerText = 'Resultado: ' + result;
}

function exitCalculator() {
    document.getElementById('result').innerText = 'Calculadora finalizada.';
    document.getElementById('operation').value = '';
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}
