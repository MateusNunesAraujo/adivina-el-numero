
let listaNumerosSorteados = []
let numeroMaximo = 10
let numeroSecreto = generarNumeroSecreto()
let intentos = 1



console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento).textContent = texto
}

function verificarIntentos() {
    let numeroDeUsuario = parseInt(document.querySelector('#valorUsuario').value)
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertastes el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`)
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor')
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor')
        }
        intentos++
        limpiarCaja()
    }
    return
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1
    console.log(numeroGenerado)
    console.log(listaNumerosSorteados)
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos lo números posibles')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto() /* Justo en esta parte, se está retornando la misma función */
        }else{
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
    
}

function reiniciarJuego() {
    document.querySelector('#valorUsuario').value = ''
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto()
    intentos = 1
    document.querySelector('#reiniciar').setAttribute('disabled',true)
}