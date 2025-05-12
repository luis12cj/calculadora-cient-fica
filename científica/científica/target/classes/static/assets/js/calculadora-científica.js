function agregar(digito)  {
    display = document.getElementById("display").value;
    digitos = display + digito;
    document.getElementById("display").value = digitos;

}

function limpiarDisplay() {
    document.getElementById("display").value="";

}

function calcularResultado() {
    expresion = document.getElementById("display").value
    resultado = eval(expresion)
    document.getElementById("display").value = resultado;
    return resultado;
}

function calcularRaizCuadrada() {
    resultado = Math.sqrt(calcularResultado())
    document.getElementById("display").value = resultado;
}

function calcularLogaritmo() {
    const valor = calcularResultado();
    const resultado = Math.log(valor);
    document.getElementById("display").value = resultado;
}

function calcularPotencia() {
    const valor = calcularResultado();
    const resultado = Math.exp(valor);
    document.getElementById("display").value = resultado;
}

function calcularPotencia() {
    const base = parseFloat(prompt("Ingresa la base (x):"));
    const exponente = parseFloat(prompt("Ingresa el exponente (n):"));

    if (!isNaN(base) && !isNaN(exponente)) {
        const resultado = Math.pow(base, exponente);
        document.getElementById("display").value = resultado;
    } else {
        document.getElementById("display").value = "Error: Valores inválidos";
    }
}

function calcularDivision() {
    let valor = calcularResultado();
    if (valor === 0) {
        document.getElementById("display").value = "Error: División por 0";
    } else {
        document.getElementById("display").value = 1 / valor;
    }
}