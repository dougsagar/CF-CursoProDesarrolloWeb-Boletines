//Ejemplo de query selector
/* let container = document.querySelector(".container");
console.log(container);

//Ejemplo de query selector con table
let table = document.querySelector(".table");
console.log(table);

//Ejemplo de seleccionar multiples elementos y recorrerlos
let links = document.querySelectorAll("a");
console.log(links);
links.forEach(function(link){
    console.log(link);
})

//Ejemplo trabajando con elementos
let celdas = document.querySelectorAll("td");
celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log("CLICK");
        console.log(this);
    })
}) */

//Obtener los elementos de la clase close
let links = document.querySelectorAll(".close");
//Recorrerglos
links.forEach(function(link){
//Agregar un evento click a cada uno de ellos
    link.addEventListener('click', function(){
        console.log(":)");
    })
})