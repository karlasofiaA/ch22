console.log("Sesión JS06");

const obtenerNombre = () => prompt("Escribe tu nombre", "Sergio");

const encontrarElementoById = () => {
    const element = document.getElementById("titulo");
    //console.log("Datos del objeto: " , element);
    // Leemos el texto entre las etiquetas
    console.log("Entre las etiquetas" + element.innerHTML);

    /* MODIFICACION DEL DOM */
    //Agregamos texto a la etiqueta de HTML sin modificar el documento
    //element.innerHTML += " Manipulacion del DOM";
    //Con innerHTML puedo agregar nuevas etiquetas
    //Podemos agregar variables al DOM
    const nombreDesarrollador = "Karla Sofia" //obtenerNombre();
    //element.innerHTML += `Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em>`;
    //Agregando las propiedades de h1 a la etiqueta html
    element.innerHTML = `<h1>${element.innerHTML}  Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em></h1>`;
}

encontrarElementoById();

const encontrarElementosByTagName = () => {
    //const elements = document.getElementsByTagName("p");
    const [introRef] = document.getElementsByTagName("p"); //Destructuracion

    //Obtenemos el indice 0 sin destructurar
    //const introRef = elements[0].innerHTML;
    //Modificamos el contenido de "introRef"
    console.log(introRef.innerHTML);
    introRef.innerHTML = "Las <strong>quesadillas</strong>  van con <em>queso</em>, es un hecho";
}

encontrarElementosByTagName();

//Funcion que me cambia a color azul el estilo de las etiquetas <em></em>
const cambiarColorEm = (nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    for (let element of elements) 
        element.style.color = nuevoColor;
}

cambiarColorEm("#4682B4");