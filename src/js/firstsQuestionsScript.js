function firstQuestion() {
    var numberInput = String(document.getElementById("question_1_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var newString = new String("");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < gettingArray.length; index++) {
                const element = gettingArray[index];
                if (!Number.isNaN(element)) {
                    newString += "Valor " + (index + 1) + ": " + element + " => " + (element ** 2) + "<br>";
                } else {
                    throw TypeError;
                }
            }
        } catch (err) {
            newString = "Progama parou por " + err.name;
        } finally {
            document.getElementById("printSpace_1").innerHTML = newString;
        }
    }
}

function secondQuestion() {
    var numberInput = String(document.getElementById("question_2_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var biggest = new Number(gettingArray[0]);
    var newString = new String(" ");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 1; index < gettingArray.length; index++) {
                const element = gettingArray[index];

                if (!Number.isNaN(element) && element > biggest) {
                    let passPosition = index - 1;
                    biggest = element;
                } else if (Number.isNaN(element)) {
                    throw TypeError;
                }
            }
            newString += "Maior valor: " + biggest;
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_2").innerHTML = newString;
        }
    }
}

function thirdQuestion() {
    var numberInput = String(document.getElementById("question_3_Blank").value);
    var gettingArray = numberInput.split(",").map(Number);
    var newString = new String("");
    var bigger18 = new Number(0);
    var lower18 = new Number(0);

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < gettingArray.length; index++) {
                const element = gettingArray[index];

                if (!Number.isNaN(element)) {
                    if (element >= 18) {
                        bigger18++;
                    } else {
                        lower18++;
                    }
                } else {
                    throw TypeError;
                }

                newString = "Maior ou igual a 18 anos: " + bigger18 + " idades<br>Menor que 18 anos: " + lower18 + " idades";
            }
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_3").innerHTML = newString;
        }
    }
}

function forthQuestion() {
    var numberInput = String(document.getElementById("question_4_Blank").value);
    var gettingArray = numberInput.split(/[\s\./]+/);
    var newString = new String("");

    if (gettingArray.length > 0 && gettingArray[0] != "") {
        try {
            for (let index = 0; index < 3; index++) {
                const element = Number(gettingArray[index]);

                if (!Number.isNaN(element)) {
                    switch (index) {
                        case 0:
                            {
                                newString += "Dia: " + element;
                                break;
                            }
                        case 1:
                            {
                                newString += "<br>Mês: " + element;
                                break;
                            }
                        case 2:
                            {
                                newString += "<br>Ano: " + element;
                                break;
                            }
                    }
                } else {
                    throw TypeError;
                }

            }
        } catch (err) {
            newString = "O resultado não foi dado por erro de " + err.name;
        } finally {
            document.getElementById("printSpace_4").innerHTML = newString;
        }
    }
}

function fifthQuestion() {
    var stringInput = String(document.getElementById("question_5_Blank").value);
    var gettingArray = stringInput.split('');
    var puttingArray = new Array(gettingArray.length);
    var oldString = new String("String antiga: " + stringInput);
    var newString = new String("String Nova: ");

    if (gettingArray.length > 0 && gettingArray[0] != "") {

        for (let index = gettingArray.length; index > 0; index--) {
            puttingArray[gettingArray.length - index] = gettingArray[index - 1];
        }
        puttingArray.forEach(element => {
            newString += element;
        });
        document.getElementById("printSpace_5").innerHTML = oldString + "<br/>" + newString;
    }
}