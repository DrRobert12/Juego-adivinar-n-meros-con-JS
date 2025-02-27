let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
const numeroMaximo = 10;

const mensajeElemento = document.querySelector('p');
const inputUsuario = document.getElementById('valorUsuario');
const botonReiniciar = document.getElementById('reiniciar');

function asignarTextoElemento(elemento, texto) {
    document.querySelector(elemento).innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(inputUsuario.value);

    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', `Por favor ingresa un número entre 1 y ${numeroMaximo}`);
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        botonReiniciar.removeAttribute('disabled');
    } else {
        asignarTextoElemento('p', numeroDeUsuario > numeroSecreto ? 'El número secreto es menor' : 'El número secreto es mayor');
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja() {
    inputUsuario.value = '';
}

function generarNumeroSecreto() {
    if (listaNumerosSorteados.length >= numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
        return null;
    }

    let numeroGenerado;
    do {
        numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    } while (listaNumerosSorteados.includes(numeroGenerado));

    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    botonReiniciar.setAttribute('disabled', 'true');
}

condicionesIniciales();
