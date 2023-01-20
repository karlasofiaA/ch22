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
    const nombreDesarrollador = "Karla Sofía" //obtenerNombre();
    //element.innerHTML += `Manipulacion del <strong>DOM</strong> por <em>${nombreDesarrollador}</em>`;
    //Agregando las propiedades de h1 a la etiqueta html
    element.innerHTML = `<h1>${element.innerHTML}  <em>Manipulación</em> del <strong>DOM</strong> por <span><em>${nombreDesarrollador}</em></span></h1>`;
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

//encontrarElementosByTagName();

//Funcion que me cambia a color azul el estilo de las etiquetas <em></em>
const cambiarColorEm = (nuevoColor) => {
    const elements = document.getElementsByTagName("em");
    for (let element of elements)
        element.style.color = nuevoColor;
}

cambiarColorEm("#4682B4");

const diferenciaInnerHTMLInnerText = () => {
    const element = document.getElementById("titulo");
    console.log(element.innerHTML); //Va a traer la etiqueta completa con el texto del elemento
    console.log(element.innerText); //Trae solo el texto, sin las etiquetas que contiene (sin formato)
}

diferenciaInnerHTMLInnerText();

const encontrarElementoByClassName = () => {
    const elements = document.getElementsByClassName("subtitulo")//Contiene una coleccion de objetos
    for (let element of elements) {
        console.log(element.innerText);
    }
}

encontrarElementoByClassName();


//EL SELECTOR UNIVERSAL

const encontrarElementoByQuerySelector = () => {
    //const element = document.querySelector("span>em"); //Buscamos la etiqueta "em" que es hija de una etiqueta padre que es "span"
    const element = document.querySelector(".subtitulo"); //Buscamos por clase
                //=document.querySelectorAll(".subtitulo") //Nos trae todos los nodos o elementos que cumplen esa condición como una colección u objeto 
    console.log(element?.innerText);
}

encontrarElementoByQuerySelector();


const crearElemento = () => {
    const newElement = document.createElement("p");
    newElement.innerHTML = `La CH22 es bien  <strong>chida</strong> por:
    <ul>
        <li>Diversas</li>
        <li>Listos y listas</li>
        <li>Hay clases de bienes raices</li>
        <li>Cholos</li>
        <li>Amigables</li>
        <li>La CH22 te respalda</li>
        <li>Sin problemas en quesadillas</li>
        <li>Tenemos a Wicho y a Pavel</li>
        <li>Aplican: <strong>has compitas, no compitas</strong></li>
    </ul>`;

    document.getElementById("datos-generation").appendChild(newElement); //Le agregamos un nodo hijo
    const nodoClonado = newElement.cloneNode(true); //Clonamos el nodo para tener una nueva referencia 
    document.getElementById("noticias").appendChild(nodoClonado);
}

crearElemento();
