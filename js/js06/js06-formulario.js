console.log("JO06 Formulario");

const refFormulario = document.forms["registro"];

refFormulario.addEventListener('submit', (event) => {
    event.preventDefault(); //Nos sirve para no refrescar la pagina de inmediato
    console.log("Evento submit activado");
    const email = refFormulario.elements['inputEmail4'].value;
    console.log(email);
});