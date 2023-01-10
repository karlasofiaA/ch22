console.log("Mensaje desde el script externo");

function changeColor(){
    document.getElementById("demo").style.color = "green";
}

function changeColorH2(reference, color){
    console.log(reference);
    console.log(color);
    document.getElementById("color-h2").style.color = color;
    /*reference.style.color = color; */
}
/* Botón dinámico */
function changeColorByClass(color){
    const collection = document.getElementsByClassName("example");
    console.log(collection);
    for (let index = 0; index < collection.length; index++) {
        collection[index].style.color = color;
    }
}
/* /*Botón para cambiar la clase a color Rosa
NO ES NECESARIO REPETIR FUNCIONES 
function changeColorByClass(color){
    const collection2 = document.getElementsByClassName("example");
    console.log(collection2);
    for (let index = 0; index < collection2.length; index++) {
        collection2[index].style.color = color;
    }
} */