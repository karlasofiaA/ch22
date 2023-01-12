console.log("Sesión JS02");

/* Funciones declaradas / Funciones definidas
  (function declaration / function statement)

Una característica de las funciones declaradas es que tiene hoisting (elevación). Significa que no tiene que estar declarada la función antes del llamado. 
*/

console.log("El resultado de 5 * 10 = " + multiplica(5 , 10));

function multiplica(a,b){
    return a * b;
}

/* Funciones expresadas
  (function expressions)

Las funciones expresadas son funciones que son declaradas dentro de la asignación de una variable

Estas funciones pueden ser anónimas (no tienen nombre). Las funciones expresadas NO tienen hoisting. 

Al momento de asignar la función anónima a una variable se habla de una función expresada. 
*/

/**Justo arriba de la función
 * Suma dos valores 
 * @param {number} a primer operador para sumar
 * @param {number} b segundo operador para sumar
 * @returns resultado de a + b
 */

const suma = function (a , b) { return a + b };

console.log("La sumatoria de 4 + 6 = " + suma(4 , 6));

/* Funciones autoinvocadas
   (selft-invoking functions)

Las funciones autoinvocadas son funciones que se ejecutan en su definición. 
Pueden ser anónimas 
*/

( function saludo(){
    console.log("Hola, me estoy auntoinvocando");
})();

/* Función fleca 
  (arrow function)

Una función flecha es similar a la función expresada, pero no requiere la palabra "function". 
Además, si solo tiene una instrucción y es el retorno, no requiere la instrucción "return" y las llaves {}. 
Y si tenemos un solo parametro de entrada podemos no poner los parentesis antes de la flecha (), donde van dentro los parametros. 

Las funciones flecha no tieien hoisting. 
*/

const restaExpresada = function(a , b) {return a-b}; 

const resta = (a , b) => a - b;
console.log("La resta de 20 - 2 = " + resta(20 , 2));

const exponente = (a , b) => {
    const result = a ** b;
    return result;
}
console.log("El resultado de 4 ^ 3 = " + exponente(4,3));

const exponenteAlCuadrado = a => a ** 2;
console.log("El resultado de 4 ^ 2 = " + exponenteAlCuadrado(4));

const imprimeSaludo = () => console.log("Holi crayoli");
imprimeSaludo();

/* Funciones con parametro inicializados

Lo haremos primero con una función definida como ejemplo

*/

function divide(a = 3, b = 1){
 return a/b;
}
console.log("La división de 3 / 1 = " + divide(5));

/* Rest Parameters

El parámetro "Rest" nos permite representar una serie de valores indefinidos en los argumentos como un array. 

El parámetro rest siempre debe ir al final de todos los parámetros.
*/

function sumatoriaIndefinida(a , b , ...restoDatos){
    let sumatoria = a + b;
    for (let i = 0; i < restoDatos.length; i++) {
        sumatoria +=  restoDatos[i]; //sumatoria = sumatoria + restoDatos[i]
    }
    return sumatoria;
}
console.log("Sumar varios números: " + sumatoriaIndefinida(2 , 3 , 4 , 5 , 10 , 11));

/* Funciones recursivas

Son las funciones que se llaman a sí mismas. 
*/
//Factorial de 0 = 1;
//Factorial de 3 = 3 * 2 * 1;
//Factorial de 5 = 5 * 4 * 3 * 2 * 1;

//Normalmente con un ciclo normar un factorial se saca:
function factorialConCicloFor(a){
    let resultado = 1;
    for (let i = 1; i <= a; i++) { 
       resultado *= i;
    }
    return resultado;
}
console.log("Factorial de 3 = " + factorialConCicloFor(3));

//Factorial con Recursion
function factorialConRecursion(a){
    if(a < 1) return 1; //Condición de paro
    return a * factorialConRecursion( a - 1 );
}
console.log("Factorial con recursion de 5 = " + factorialConRecursion(5));
console.log("Factorial con recursion de 5 = " + factorialConRecursion(5));

/* HACER UNA RECURSIÓN QUE MUESTRE EN CONSOLA UN SALUDO COMO 

Saludo 1
Saludo 2
Saludo 3 .... Saludo x

saludo(x); |Llamada de la función
*/ 

/* function saludoRecursion(b){
    if(b > 1) return 1;
    return saludoRecursion(b - (b-1));
}

console.log("Saludo " + saludoRecursion(5));  */

function saludo( cantidad, iteracion=1 ){
    console.log("saludo" + iteracion);
    if( iteracion >= cantidad) 
        return 1;
    return saludo( cantidad, iteracion+1 );
}
saludo(10);