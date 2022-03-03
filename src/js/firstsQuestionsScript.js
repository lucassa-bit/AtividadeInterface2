function firstQuestion() { // OK!!!!
    let arrayValue = [1, 60, 232, 7, 25, 76, 29, 74, 92];
    let newString = new String("");

    try {
        let filtrar = (array) => {
            return array.filter(filterArray);
        };

        let $lista = processArrayFilter(arrayValue, filtrar);
        let $somatorio = 0;

        for (let valor of $lista) {
            $somatorio += valor;
        }

        newString += `A lista dos valores é: [${$lista}].<br>
        A soma dos elementos da lista é: ${$somatorio}`;

    } catch (e) {
        newString = "Progama parou por " + err.name;
    } finally {
        document.getElementById("printSpace_1").innerHTML = newString;
    }
}

function processArrayFilter(gettingArray, callback) {
    return callback(gettingArray);
}

function filterArray(value) {
    return value > 60 && value < 300;
}

function secondQuestion() {
    let nomeInput = String(document.getElementById("tipo_progressao").value);
    let nVezes = String(document.getElementById("numero_vezes").value);
    let a1Numero = String(document.getElementById("a1_valor").value);
    let razao = String(document.getElementById("razao_valor").value);



    let isAritmetica = nomeInput === "Aritmetica";

    let paramProgressao = {
        id: isAritmetica ? 0 : 1,
        nome: nomeInput,
        n: Number(nVezes),
        a1: Number(a1Numero),
        e: Number(razao)
    };

    if (isAritmetica) {
        progressaoAritmetica(paramProgressao);
    } else {
        progressaoGeometrica(paramProgressao);
    }
}

function progressaoAritmetica(paramProgressao) {
    let valores = new Array(paramProgressao.n);
    let newString = new String("");

    let index = 0;
    while (index < paramProgressao.n) {
        valores[index] = paramProgressao.a1 + index * paramProgressao.e;
        index++;
    }

    let soma = ((valores[0] + valores[index - 1]) * paramProgressao.n) / 2
    newString += `PA: [${valores}]<br> Soma valores: ${soma}`

    document.getElementById("printSpace_2").innerHTML = newString;
}

function progressaoGeometrica(paramProgressao) {
    let valores = new Array(paramProgressao.n);
    let newString = new String("");

    let index = 0;
    while (index < paramProgressao.n) {
        valores[index] = paramProgressao.a1 * Math.pow(paramProgressao.e, index);
        index++;
    }

    let soma = (valores[0] * (Math.pow(paramProgressao.e, paramProgressao.n) - 1)) / (paramProgressao.e - 1);
    newString += `PG: [${valores}]<br> Soma valores: ${soma}`

    document.getElementById("printSpace_2").innerHTML = newString;
}

function thirdQuestion() { // JOAO 
    var numberInput = String(document.getElementById("question_3_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    
    var notaString = (media) => {
        if (media < 5) {
            return "Seu conceito é D";
        } else if (media < 7) {
            return "Seu conceito é C";
        } else if (media < 9) {
            return "Seu conceito é B";
        } else {
            return "Seu conceito é A";
        }
    };

    document.getElementById("printSpace_3").innerHTML = retornaConceito(gettingArray, notaString);
}

function retornaConceito(arrayNotas, callbackFunction) {
    let newString = new String("");

    arrayNotas.forEach(element => {
        newString += callbackFunction(element) + "<br>";
    });

    return newString;
}

function forthQuestion() { // JOAO : OK
    const valor = document.getElementById("question_4_Blank").value;
    let newString = new String('');

    const notas = [100, 50, 20, 10, 5, 2];
    const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

    let n = parseFloat(valor);

    newString += `valor: R$ ${n.toFixed(2)}`
    newString += '<br>NOTAS:<br>';

    notas.forEach(nota => {
        newString += `${parseInt(n / nota)} nota(s) de R$ ${nota.toFixed(2)}<br>`;
        n %= nota;
    });

    newString += '<br>MOEDAS:<br>';

    moedas.forEach(moeda => {
        newString += `${parseInt(n / moeda)} moeda(s) de R$ ${moeda.toFixed(2)}<br>`;
        n = (n % moeda) + 0.00001;
    });

    document.getElementById("printSpace_4").innerHTML = newString;
}

function fifthQuestion() { //JOAO
    let valorInicial = Number(document.getElementById("valorIncial").value);
    let valorFinal = Number(document.getElementById("valorFinal").value);
    let newString = new String("");

    if(valorInicial > valorFinal) {
        let save = valorInicial;
        valorInicial = valorFinal;
        valorFinal = save;
    }

    let index = 0;
    for (let initialValue = 0; initialValue <= valorFinal; initialValue++) {
        if(numprimo(initialValue)) {
            newString += initialValue < valorFinal ? initialValue + ", " : initialValue;
            index++;
        }
    }

    document.getElementById("printSpace_5").innerHTML = "Valores primos: [" + newString + "]";
}

function numprimo(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}