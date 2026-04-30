function generarTablas() {
    let contenedor = document.getElementById("contenedor"); 
    let contenido = "";
    let numero = document.getElementById("txtNumero").value; //condicion del taller, se puede cambiar por cualquier numero 

    contenido += `<h1>🌟 Tabla del ${numero} 🌟</h1>`;
    contenido += `<div class="tabla">`;

    for (let i = 1; i <= 10; i++) {
        contenido += `<div class="fila">${numero} × ${i} = ${numero * i}</div>`;
    }
    contenido += `</div>`;
    
    contenedor.innerHTML = contenido;    

}