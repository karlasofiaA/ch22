console.log("Sesión JS05");

//OPERADORES DE ASIGNACIÓN 
let estadoDiminutoDeMexico = "Tlaxcala";

//OPERADORES ARITMÉTICOS
//Multiplicación *
let metrosCuadrados = 10 * 30; //300
//Tenemos 2 terrenos
//metrosCuadrados = metrosCuadrados * 2;
//Operadores simplificados de lo de arriba
metrosCuadrados *= 2;

//División /
//Dividimos el terrenito entre 3 hijos
metrosCuadrados /= 3; //200
console.log("m2 de 3 terrenos " + metrosCuadrados);

//Residuo %
//Quiero saber si los m2 son múltiplos de 2
let esMultiplo2 = !(metrosCuadrados % 2) ? "Sí" : "No";
console.log("La cantidad es múltiplo de 2? " + esMultiplo2);

//Resta -
let precioTerreno = 90_000;
let precioM2 = precioTerreno / 300;
console.log("Precio del m2: $" + precioM2)
let cantidadPagada = 30_000;
let cantidadRestante = precioTerreno - cantidadPagada;
console.log("Te resta por pagar la catidad de: $" + cantidadRestante);
//Se abonó $10,000 utilizando el operador simplificado
console.log("Te resta por pagar la catidad de: $" + (cantidadRestante -= 10_000));

//Suma + 
//Cobro por la generación de escrituras (8% sobre costo del terreno)
/* const costoEscritura = precioTerreno * 0.08;
precioTerreno += costoEscritura;
console.log("Terreno más escrituras $" + precioTerreno); */
console.log("Terreno + escritura otra forma $" + (precioTerreno += precioTerreno * 0.08))

// + Para concatenación de strings
let nombre = "Alan";
nombre += " García";
console.log("Nombre persona CH22 " + nombre);

//Operadores de incremento
//PREINCREMENTO ++variable , POSTINCREMENTO variable++
//PREDECREMENTO --variable , POSTDECREMENTO variable--

let numClavosParaMiCasa = 100;
numClavosParaMiCasa++; //101
console.log("Número de clavos: " + numClavosParaMiCasa);
++numClavosParaMiCasa; //102
console.log("Número de clavos: " + numClavosParaMiCasa);
console.log("Número de clavos: " + numClavosParaMiCasa++); //Primero entrega el valor y después hace el incremento 102 -> 103
console.log("Número de clavos: " + ++numClavosParaMiCasa); //Aumenta el valor de la varieble y lo entrega 104
/* ------------------------------------------------ */
let respuestasExamen = 95;
// Agregamos punto extra
console.log("Resultado final: " + respuestasExamen++) //95 y al final de la instrucción entrega un 96

respuestasExamen = 82;
do {
    console.log("Resultado final do-while: " + respuestasExamen);
} while (++respuestasExamen <= 100)
console.log("Resultado final: " + respuestasExamen)

let nivelSuenio = 99;
if( nivelSuenio++ === 100 ) console.log("Me voy a mimir en la sesión");
console.log("Nivel de sueño " + nivelSuenio);

//Operadores relacionales
/*
    <= menor o igual que
    >= mayor o igual que
    >  mayor que
    <  menor que
 */

let numPerfumes = 10;
if( numPerfumes >= 10 ) console.log("Que elegancia la de francia");

//Operadores de igualdad
/* 
    ==  operador igual
    === estrictamente igual
    !=  diferente que
    !== estrictamente diferente que
*/
let numMatriculaPavel = "10025";
if( numMatriculaPavel == 10025 ) console.log("Pavel está aprobado")
if( numMatriculaPavel === 10025 ) console.log("Pavel está en nivel fase 5");
if( numMatriculaPavel >= 10025 ) console.log("Pavel está en CUCEI");

//Operadores lógicos
/* 
    && and
    || or

    Primero se evalúa el operador AND antes que el OR
*/
let numRebosos = 3;
let teGustaReboso = true; 
if(numRebosos > 5 || teGustaReboso ) console.log("Te regalo un reboso de Oaxaca");
let vivesEnElExtranjero = true;
if(numRebosos > 5 || teGustaReboso && vivesEnElExtranjero) console.log("Te vendo mi reboso en dólares");

//Operadores de corto circuito
/*  
Operador1 && Operador2  si  Operador1=true, se realiza el resultado de Operador2
 */
let online = true;
let mensaje = "estamos en línea";
let respuesta = online && mensaje;
console.log("Respuesta " + respuesta);

let edadPersona = 18;
mensaje = "puede votar";
console.log("La persona puede votar " + (edadPersona>=18 && mensaje));

/*  
Operador1 || Operador2  si  Operador1=true, se realiza el resultado de Operador 1
 */
let isOnline = true;
let isActive = true;
if( isOnline ){
    if( isActive )
    console.log("Estamos in")
}

if( isOnline && isActive )
    console.log("Estamos in");

    isOnline && isActive && console.log("Estamos in");