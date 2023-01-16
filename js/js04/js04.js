console.log("Sesión JS04");

const nombresCh22 = ['Manuel', 'Leonardo', 'Melani'];
//Usando el constructor de la clase Array
const nombresCh14 = new Array('Abue', 'Cori', 'Maga', 'Sebas');
console.log(nombresCh22);
console.log(nombresCh14);

const promedioEdadesCh22 = [25];
//Esta línea va a generar un array de 24 elementos
const promedioEdadesCh14 = new Array(24);
console.log(promedioEdadesCh22);
console.log(promedioEdadesCh14);

//Conocer la longitud de un arreglo: .length
console.log(`Número de elementos ${promedioEdadesCh22.length}`);
console.log(`Número de elementos ${promedioEdadesCh14.length}`);

/* Se recomienda declarar los array(objetos) con const para prevenir que se cambie el tipo de dato */
const armasCh22 = ['manopla', 'picahielo']; //typeof(armasCh22) objecto 
//armasCh22 = 'filero'; //typeof(armasCh22) string
console.log('Lista de armas: ' + armasCh22);

//Leer un elemento del arreglo
console.log(`Karla tiene un ${armasCh22[1]}`);
console.log(`Leonardo tiene una ${armasCh22[0]}`);

//Cambiar un dato del arreglo 
armasCh22[0] = 'filero';
console.log(`Ahora Leonardo tiene una ${armasCh22[0]}`);

/* Un dato primitivo, de los 7 que hay, es un dato inmutable(no cambia) */
let nombreClica = "Los Wichales";
console.log(`La variable ${nombreClica} comienza con la letra: ${nombreClica[0]}`);
nombreClica[0] = 'D'; //Al ser un dato primitivo no se puede modificar, un string es un dato primitivo inmutable
console.log(`La variable ${nombreClica} comienza con la letra: ${nombreClica[0]}`);

//Agregamos un nuevo dato al arreglo, AL FINAL 
armasCh22[2] = 'machete';
armasCh22[armasCh22.length] = 'fusca';
armasCh22.push('cadena');
console.log(`Actualización de armas: ${armasCh22}`);

//Agregamos un nuevo elemento al arreglo, AL INICIO
armasCh22.unshift('navaja', 'desarmador', 'bat');
console.log(`Actualización de armas: ${armasCh22}`);

//CICLO FOR
/* Sintáxis 
    for(instruccionInicio; comparación; expresiónFinal) instrucción;
    
    for(instruccionInicio ; comparación; expresiónFinal) {
        instrucciones;
    }
    for( let i = 0 ; i <= 10 ; i++) {
        instrucciones;
    }
    
*/
//Iteramos los arreglos
for (let i = 0; i < armasCh22.length; i++) {
    console.log(`FOR - El índice ${i} contiene ${armasCh22[i]}`);
}

//FUNCIÓN DE CALLBACK
//armasCh22.forEach( callbackFunction )
function interarArreglo(elemento, indice, arreglo) {
    console.log(`CB- El índice ${indice} contiene ${elemento}`);
}
armasCh22.forEach(interarArreglo);

//FUNCION FLECHA
//armasCh22.forEach( iterarArreglo )
armasCh22.forEach((elemento, indice) => console.log(`AF- El índice ${indice} contiene ${elemento}`));

//FUNCION ForIn 
//arma me dará el índice que se itera sobre el arreglo (se iteran lo índices del arreglo)
for (let arma in armasCh22)
    console.log(`ForIn arma: ${armasCh22[arma]}`);

//FUNCION ForOf
//Se iteran los elementos del arreglo
for (let arma of armasCh22)
    console.log(`ForOff arma: ${arma}`);

//Iterar de forma descendente es solo con un for
for (let i = armasCh22.length - 1; i >= 0; i--) {
    console.log(`For descendente- El índice ${i} contiene ${armasCh22[i]}`);
}

//Para el ciclo FOR no es necesario indicar el inicio, la comparación, la expresión final
let iteracion = 0; //Inicializacion
for (; ;) {
    console.log("valo de i: " + iteracion);
    if (iteracion === 10) break; //Comparacion
    iteracion++; //Incremento
}

//La instruccion break rompe con la iteracion en cualquier ciclo.  
for (let i = 0; i < 10; i++) {
    if (i === 5) break; // 0, 1, 2, 3, 4
    console.log("For con break: " + i);
}
//La instruccion continue continua con la siguiente iteracion cuando se cumple con la condicion.
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log("For con continue: " + i); // 0, 1, 2, 3, 4,      6, 7, 8, 9, 10
}

const participantes = [
    ["Jose", "Maria", "Pedro"], //CH1 Fila 1
    ["Tan", "Javi", "Andrea", "Santi"], //CH2 Fila 2
    ["Melanie", "Pavel"] //CH3 Fila 3
];

console.log('Persona CH03 (F2) 2a persona (C1): ' + participantes[2][1]); //Pavel
console.log('Persona CH02 (F1) 2a persona (C0): ' + participantes[1][0]); //Tan
console.log('Persona CH01 (F0) 2a persona (C0): ' + participantes[0][2]); //Pedro

for (let i = 0; i < participantes.length; i++) {
    //console.log(participantes[i]);
    for (let j = 0; j < participantes[i].length; j++) {
        console.log(participantes[i][j]);
    }
}

/* for (fila = 0 ; fila< participantes.length; fila++){
    console.log(participantes[fila]); //Iterando las filas
    for (columna = 0 ; columna< participantes[fila].length ; columna++ ){
        console.log( participantes[fila][columna] );
    }
} */ //ASI ES COMO SE VERIA CON OTROS NOMBRES DE VARIABLES

//Usando break en ciclos anidados
//Dejar de mostrar los nombres cuendo se encuentre a Tan

//Usando una variable como bandera
let continuarIteraciones = true;
for (let i = 0; i < participantes.length; i++) {
    for (let j = 0; j < participantes[i].length; j++) {
        console.log(`[${i}][${j}]`);
        if (continuarIteraciones)
            console.log("Uso de bandera " + participantes[i][j]);
        if (participantes[i][j] === 'Tan') continuarIteraciones = false;
    }
}

//Usando break y labels 
cicloFila:
for (let i = 0; i < participantes.length; i++) {
    cicloColumnas:
    for (let j = 0; j < participantes[i].length; j++) {
        console.log(`[${i}][${j}]`);
        console.log("Uso de break " + participantes[i][j]);
        if (participantes[i][j] === 'Tan') break cicloFila;
    }
}

//Usando continue
cicloFila:
for (let i = 0; i < participantes.length; i++) {
    cicloColumna:
    for (let j = 0; j < participantes[i].length; j++) {
        if (participantes[i][j] === 'Javi') continue cicloFila;
        console.log(`[${i}][${j}]`);
        console.log("Uso de continue " + participantes[i][j]);
    }
}

//Ciclo WHILE 
/* Sintáxis
    while(condicion_verdadera) instruccion;
    
    while(condicion_verdadera){
        instrucciones;
    }
*/

/* let numIteracion = 0;
while(confirm("Quieres seguir iterando")){
    console.log("Iteracion n. " + numIteracion++);
} */

//Preguntar del 1 al 10 y saber si es el número que pensó el usuario
let sigNumero = 1;
/* while(!confirm("¿Tú numero es " + sigNumero + "?")){
    sigNumero++
    if(sigNumero === 10 ) break;
} */

/* sigNumero = 0;
while(!confirm("¿Tú numero es " + ++sigNumero + "?"));
console.log("Tu número es el " + sigNumero) */

//Ciclo do-while
/* Sintáxis
    do{
        instrucciones;
    } while(condicion_verdadera);

Con este ciclo por lo menos se itera un ciclo antes de evaluar la condición.
*/
let valor = 10;
while (valor < 5) {
    console.log("While " + valor); 
    valor++;
}

valor = 10;
do {
    console.log("Do-While " + valor)
    valor++;
} while (valor < 5);

/* 
FIFO: First Input First Output
LIFO: Last Input First Output
 */

const alimentosPerecederos = [];
//USANDO FIFO
//Agregando una caja
alimentosPerecederos.push("manzanas lunes");
alimentosPerecederos.push("manzanas martes");
//Sacando manzanas de lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //Lunes
console.log("Sacando a la venta " + alimentosPerecederos.shift()); //Miércoles

//USANDO LIFO
//Teniendo una ferretería 
const productos = ["Desarmadores", "Cemento"];
//Agrego luces navideñas en diciembre
productos.push("Luces navideñas");
console.log("Sacando a la venta: " + productos.pop());
console.log("Sacando a la venta: " + productos.pop());