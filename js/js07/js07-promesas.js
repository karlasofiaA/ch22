console.log("JS07 Promesas");

//Hacemos una promesa
const myPromise = new Promise((resolve, reject) => {
    const isOnline = false;

    if (isOnline)
        resolve("Promesa resuelta, esta en linea");
    else
        reject("Promesa rechazada, esta fuera de linea");
});

console.log("Antes de la promesa");
//console.log( myPromise() ); //Las promesas no se pueden consumir de esta forma
/* Consumiendo la promesa con .then y .catch 
    .then consume cuando la promesa sea resuelta 
    .catch consume cuando la promesa es rechazada */
//myPromise.then( (response) => {} ).catch( (error) => {} );

myPromise
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        //console.log texto --- console.error como warning
        console.error(error);
    });

console.log("Despues de la promesa");

//Promesa de enviar un arreglo y multiplica sus elementos por 2
// [2 , 5, 7] => [4, 10, 14]
//Decolver solo los numeros que sean mayor a 5
// [2 , 5, 7] => [4, 10, 14] => [10, 14]

/* //Con funcion map y filter
const datos = [2, 5, 7];
const datosDuplicados = datos.map( (element) => element * 2 ); //[4 ,10 ,14]
const datosFiltrados = datosDuplicados.filter( number => number>5 ); //[10, 14]
console.log(datosDuplicados);
console.log(datosFiltrados); 

const procesoReducido = datos.map(element => element*2).filter(number => number>5); //Encadenando funciones 
console.log(procesoReducido); */


const filtrarArreglo = (datos) => {
    return solucion = new Promise((resolve, rejetc) => {
        const procesoReducido = datos
            .map(element => element * 2)
            .filter(number => number > 5);

        if (procesoReducido.length)
            resolve(procesoReducido);
        else
            rejetc("Tu arreglo no contiene numeros mayores a 5");
    });
    //return solucion; //no declare la variable y la retorne desd el principio
}

//Consumiendo las promesas con .then y .catch
function filtrarConPromesa() {
    console.log("Funcion con .then y .catch");
    filtrarArreglo([2, 5, 7])
        .then(response => console.log(response))
        .catch(error => console.warn(error));

    filtrarArreglo([2, 1, 0])
        .then(response => console.log(response))
        .catch(error => console.warn(error));
    console.log("Termina funcion con .then y .catch");
}
//filtrarConPromesa();

//Consumiendo las promesas con Async y Await
async function filtrarPromesaConAwait() {
    console.log("Funcion con async y await");
    console.log(await filtrarArreglo([2, 4, 7, 10]));
    console.log("Termina la funcion con async y await");
}
//filtrarPromesaConAwait();

//Usando try y catch
async function filtrarPromesaConAwaitTryCatch() {
    const regBtnAsyncAwait = document.querySelector("#btnAsyncAwait");
    regBtnAsyncAwait.disabled = true;
    try {
        //En este bloque se trata de resolver la promesa
        console.log("Funcion con try y catch");
        console.log(await filtrarArreglo([1,0,1,2,10]));
    } catch (error) {
        //En este bloque se trata el reject que genere la promesa
        console.log("No se va a acabar el mundo");
        console.warn(error);
        
    } finally { //Siempre se ejecuta, no importa cual de los bloques anteriores se haya ejecutado
        console.log("Termina la funcion con try y catch");
        regBtnAsyncAwait.disabled = false;
    }
}
//filtrarPromesaConAwaitTryCatch();

