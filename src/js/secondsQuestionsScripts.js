function sixthQuestion() {
    var numberInput = String(document.getElementById("question_6_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var newString = new String("Lista antiga: " + gettingArray.toString().replaceAll(",", ", ") + "<br/>" + "Valores ordenados: ");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {

            for (let index = 1; index < gettingArray.length; index++) {
                const element = Number(gettingArray[index]);

                if (!Number.isNaN(element)) {
                    let passPosition = index - 1;
                    while (passPosition >= 0 && gettingArray[passPosition] > element) {
                        gettingArray[passPosition + 1] = gettingArray[passPosition];
                        passPosition--;
                    }

                    gettingArray[passPosition + 1] = element;
                } else {
                    throw TypeError;
                }
            }
            gettingArray.forEach(element => {
                newString += element + ",";
            });
            newString = newString.replaceAll(",", ", ");
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_6").innerHTML = newString;
        }
    }
}

function seventhQuestion() {
    var numberInput = String(document.getElementById("question_7_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var sum = new Number(0);
    var newString = new String("");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < gettingArray.length; index++) {
                const element = gettingArray[index];
                if (!Number.isNaN(element) && element % 2 == 1 && element % 3 == 0) {
                    sum += element;
                } else if (Number.isNaN(element)) {
                    throw TypeError;
                }
            }
            newString = "Total da soma: " + sum;
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_7").innerHTML = newString;
        }
    }
}

function eighthQuestion() {
    var numberInput = String(document.getElementById("question_8_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var newString = new String("");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < gettingArray.length; index++) {
                let element = gettingArray[index];
                if (!Number.isNaN(element)) {
                    newString += "Valor " + (index + 1) + ": " + element + " => ";

                    for (let fatorial = element - 1; fatorial > 0; fatorial--) {
                        element *= fatorial;
                    }

                    newString += element + "<br>";
                } else {
                    throw TypeError;
                }
            }
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_8").innerHTML = newString;
        }
    }
}

function ninthQuestion() {
    var numberInput = String(document.getElementById("question_9_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var positiveQuantity = new Number(0);
    var negativeQuantity = new Number(0);
    var averageQuantity = new Number(0);
    var newString = new String("Média dos valores: ");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < gettingArray.length; index++) {
                const element = gettingArray[index];
                if (!Number.isNaN(element)) {
                    averageQuantity += element;

                    if (element >= 0) {
                        positiveQuantity++;
                    } else {
                        negativeQuantity++;
                    }
                } else {
                    throw TypeError;
                }
            }

            newString += parseFloat(averageQuantity / gettingArray.length).toFixed(2) + "<br>";
            newString += "Quantidade de positivos: " + positiveQuantity + "<br>";
            newString += "Porcentagem de positivos " + parseFloat(positiveQuantity * 100 / gettingArray.length).toFixed(2) + "%<br>"
            newString += "Quantidade de negativos: " + negativeQuantity + "<br>";
            newString += "Porcentagem de negativos " + parseFloat(negativeQuantity * 100 / gettingArray.length).toFixed(2) + "%<br>"

        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_9").innerHTML = newString;
        }
    }
}

function tenthQuestion() {
    var numberInput = String(document.getElementById("question_10_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var oldList = new String("Lista antiga: " + gettingArray.toString().replaceAll(",", ", ") + "<br/>");
    var newString = new String("Lista inversa: ");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = gettingArray.length; index > 0; index--) {
                const element = gettingArray[index - 1];

                if (!Number.isNaN(element)) {
                    newString += index - 1 > 0 ? element + ", " : element;
                } else {
                    throw TypeError;
                }
            }
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_10").innerHTML = oldList + newString;
        }
    }
}