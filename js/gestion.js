//Array donde se guardarán las obras
let repositorio = [];

//Variables de configuración
let cantidadObras;
let tiempoTransferencia;
let costoMensual;

//Contador de obras ingresadas
let contador = 0;

//Configuración
let textoCantidad = document.querySelector("#cantidad");
let textoTiempo = document.querySelector("#tiempo");
let textoCosto = document.querySelector("#costo");

//Obras
let textoNombre = document.querySelector("#nombre");
let textoDuracion = document.querySelector("#duracion");
let textoPeso = document.querySelector("#peso");

//Botones
let botonConfigurar = document.querySelector("#botonConfigurar");
let botonAgregar = document.querySelector("#botonAgregar");
let botonCalcular = document.querySelector("#botonCalcular");
let botonReiniciar = document.querySelector("#botonReiniciar");

//Resultados
let resultados = document.querySelector("#resultados");

//Eventos
botonConfigurar.addEventListener("click", configurar);
botonAgregar.addEventListener("click", agregarObra);
botonCalcular.addEventListener("click", calcular);
botonReiniciar.addEventListener("click", reiniciar);

//Primera función
function configurar(){
    cantidadObras = Number(textoCantidad.value);
    tiempoTransferencia = Number(textoTiempo.value);
    costoMensual = Number(textoCosto.value);

    if(cantidadObras <= 0){
        alert("Ingrese una cantidad de obras válida.");
        return;
    }

    if(tiempoTransferencia <= 0){
        alert("Ingrese un tiempo válido.");
        return;
    }

    if(costoMensual <= 0){
        alert("Ingrese un costo válido.");
        return;
    }

    textoNombre.disabled = false;
    textoDuracion.disabled = false;
    textoPeso.disabled = false;
    botonAgregar.disabled = false;

    textoCantidad.disabled = true;
    textoTiempo.disabled = true;
    textoCosto.disabled = true;
    botonConfigurar.disabled = true;

}

//Segunda función
function agregarObra(){
    let nombre = textoNombre.value;
    let duracion = Number(textoDuracion.value);
    let peso = Number(textoPeso.value);

    if(nombre == ""){
        alert("Ingrese el nombre de la obra.");
        return;
    }

    if(duracion <= 0){
        alert("Ingrese una duración válida.");
        return;
    }

    if(peso <= 0){
        alert("Ingrese un peso válido.");
        return;
    }

    let obra = {
        nombre: nombre,
        duracion: duracion,
        peso: peso
    };

    repositorio.push(obra);

    contador++;

    textoNombre.value = "";
    textoDuracion.value = "";
    textoPeso.value = "";

    if(contador == cantidadObras){

        textoNombre.disabled = true;
        textoDuracion.disabled = true;
        textoPeso.disabled = true;

        botonAgregar.disabled = true;

        botonCalcular.disabled = false;

    }

}

//Tercera función
function calcular(){
    let duracionTotal = 0;
    let pesoTotal = 0;
    let mayorDuracion = 0;
    let nombreMayor = "";
    let pesoMayor = 0;

    for(let i = 0; i < repositorio.length; i++){

        duracionTotal += repositorio[i].duracion;
        pesoTotal += repositorio[i].peso;

        if(repositorio[i].duracion > mayorDuracion){

            mayorDuracion = repositorio[i].duracion;
            nombreMayor = repositorio[i].nombre;
            pesoMayor = repositorio[i].peso;
        }
    }

    let promedio = duracionTotal / repositorio.length;
    let tiempoDescarga = pesoMayor * tiempoTransferencia;
    let presupuesto = pesoTotal * costoMensual * 12;

    resultados.innerHTML =
    "<h2>Resultados</h2>" +
    "<p>Duración total: " + duracionTotal + " minutos</p>" +
    "<p>Duración promedio: " + promedio + " minutos</p>" +
    "<p>Obra de mayor duración: " + nombreMayor + "</p>" +
    "<p>Tiempo de transferencia: " + tiempoDescarga + " ms</p>" +
    "<p>Presupuesto anual: $" + presupuesto + "</p>";

    botonCalcular.disabled = true;
    botonReiniciar.disabled = false;

}

//Ultima función
function reiniciar(){
    //Vaciar el array
    repositorio = [];

    //Reiniciar contador
    contador = 0;

    //Limpiar configuración
    textoCantidad.value = "";
    textoTiempo.value = "";
    textoCosto.value = "";

    //Limpiar datos de las obras
    textoNombre.value = "";
    textoDuracion.value = "";
    textoPeso.value = "";

    //Borrar resultados
    resultados.innerHTML = "";

    //Habilitar configuración
    textoCantidad.disabled = false;
    textoTiempo.disabled = false;
    textoCosto.disabled = false;

    botonConfigurar.disabled = false;

    //Deshabilitar ingreso de obras
    textoNombre.disabled = true;
    textoDuracion.disabled = true;
    textoPeso.disabled = true;

    botonAgregar.disabled = true;
    botonCalcular.disabled = true;
    botonReiniciar.disabled = true;

}



