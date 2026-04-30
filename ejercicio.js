function listaNumeros() {
    for (let i = 0; i <= 3; i++) {
        console.log(i);
    }
}

function ejecutar(numEjercicio) {
   switch(numEjercicio) {
    case 1:
        listaNumeros();
        break;
    case 2:
        listaNumerosReversa();
        break;
    case 3:
        listaPares();
        break;
    case 4:
        listaImpares();
        break;
}
}

function listaNumerosReversa() {
    for (let i = 3; i >= 0; i--) {
        console.log(i);
    }
}

function listaPares() {
    for (let i = 0; i <= 10; i+=2) {
        console.log(i);
    }
}

function listaImpares() {
    for (let i = 7; i >= 1; i-=2) {
        console.log(i);
    }
}
