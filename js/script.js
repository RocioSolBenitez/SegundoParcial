//Array de obras

let obras = [

    {
        nombre: "O Superman",
        anio: 1981,
        imagen: "img/anderson-6.jpg"
    },

    {
        nombre: "United States Live",
        anio: 1983,
        imagen: "img/anderson-8.jpg"
    },

    {
        nombre: "Dal Vivo",
        anio: 1998,
        imagen: "img/anderson-7.jpg"
    },

    {
        nombre: "Habeas Corpus",
        anio: 2015,
        imagen: "img/anderson-5.jpg"
    },

    {
        nombre: "Chalkroom",
        anio: 2017,
        imagen: "img/anderson-3.jpg"
    }

];

let galeria = document.querySelector("#galeria");

for(let i = 0; i < 5; i++){
    galeria.innerHTML +=
    "<article>" +
    "<img src='" + obras[i].imagen + "' alt='" + obras[i].nombre + "'>" +
    "<h3>" + obras[i].nombre + "</h3>" +
    "<p>" + obras[i].anio + "</p>" +
    "</article>";
}

let boton = document.querySelector("#cambiarDiseno");

boton.addEventListener("click", cambiarDiseno);

function cambiarDiseno(){

    let imagenes = document.querySelectorAll("#galeria img");

    for(let i = 0; i < 5; i++){

        imagenes[i].style.width = "70%";

        imagenes[i].style.border = "0.5rem solid white";

    }

}