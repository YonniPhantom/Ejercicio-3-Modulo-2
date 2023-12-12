// Ejercicio 1
function ejercicio1() {
    const numero = prompt("Ingresa un numero mayor a 1:");
    if(numero < 1) return alert("Ingresa un numero mayor a 1");
    let array = [];

    let i = 1;
    while(i != numero) {
        if(i % 5 == 0) array.push(i);
        i++;
    }
    alert(array);
}

// Ejercicio 2
function ejercicio2() {
    const num1 = prompt("Ingresa un numero entre 1 y 50");
    if(num1 < 1 || num1 > 50) return alert("Numero fuera del rango");
    const num2 = prompt("Ingresa otro numero entre 1 y 50");
    if(num2 < 1 || num2 > 50) return alert("Numero fuera del rango");

    let i = 1;
    while (i != 50) {
        if(i == num1 || i == num2) {
            console.log(i + " Loteria!");
        } else {
            console.log(i);
        }
        i++;
    }
}

// Ejercicio 3
function ejercicio3() {
    let numero;
    let array = [];
    while (numero != 0) {
        numero = prompt("Ingresa un numero: ");
        if(!Number.isNaN(Number.parseInt(numero))) array.push(numero);
    }
    console.log(array);
}

// Ejercicio 4
function ejercicio4() {
    let answer = "a";
    let string = ""
    while (!answer.length < 1) {
        answer = prompt("Ingresa una letra o un numero:");
        if(answer.length  === 1) string += answer;
    }
    alert(string);
}

// Ejercicio 5
function ejercicio5() {
    let diaSemana = null;
    while (diaSemana != "domingo") {
        diaSemana = prompt("Ingresa un día de la semana:").toLocaleLowerCase();
        switch(diaSemana) {
            case "lunes":
                alert("Ha empezar a trabajar!");
                break;
            case "martes":
                alert("Un cafecito antes de trabajar!");
                break;
            case "miercoles":
                alert("Mitad de semana, tu puedes!");
                break;
            case "jueves":
                alert("Un poco más!");
                break;
            case "viernes":
                alert("Es viernes y el cuerpo lo sabe!");
                break;
            case "sabado":
                alert("Recuerda recoger la casa!")
                break;
        }
    }
    alert("Ve a descansar!");
}