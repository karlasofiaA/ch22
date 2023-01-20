console.log("JS07");

const introduccion = () => {
    console.log("01-Bienvenidos y bienvenidas a CH22");
}

const desarrollo = () => {
    console.log("02-Pasele a lo barrido");
}

const desarrolloAsincrono = (delay) => {
    
    //Funcion asincrona //setTimeout( callback , tiempo ms); 
    setTimeout( () => console.log(`Pasele a lo barrido ${delay} ms`), delay);
}

let idSetInterval; //Declaracion de variable local
const setIntervalAsincrono = ( delay = 2000 ) =>{
    //setInterval( fncCallBack, delay);
    let contador = 0;
    idSetInterval = setInterval( () => console.log(`Rockstar ${++contador}`), delay);
}

const stopIntervalAsincrono = () => {
    setTimeout( () => {
        console.log("Se detiene el intervalo");
        clearInterval(idSetInterval)} , 10000);
}

const despedida = () => {
    console.log("03-Ay nos vidrios, nos vicenteamos luego");
}

//Programacion sincrona
introduccion();
desarrollo();
despedida();

//Programacion asincrona
introduccion();
desarrolloAsincrono(2000);
desarrolloAsincrono(6000);
//setIntervalAsincrono(2000);
stopIntervalAsincrono();
despedida(); //esta instruccion no espera a que finalice la funcion asincrona


const refStartInterval = document.getElementById("start-interval");

const refStopInterval = document.getElementById("stop-interval");

let idOfCounter;
refStartInterval.addEventListener('click', (event) => {
    console.log(event);
    let counter = 0;
    refStartInterval.disabled = true; //habilitamos el boton de inicio
    refStopInterval.disabled = false; //deshabilitamos boton de detener
    idOfCounter = setInterval( ()=> console.log(`Contador ${++counter}`), 1000);
});

function stopCounter(event){
    console.log(event);
    console.log("Se detiene el contador");
    clearInterval(idOfCounter);
    refStartInterval.disabled = false;
    refStopInterval.disabled = true;
}