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
    console.log( `FOR - El índice ${i} contiene ${armasCh22[i]}` );
}

//FUNCIÓN DE CALLBACK
//armasCh22.forEach( callbackFunction )
function interarArreglo(elemento, indice, arreglo){
    console.log( `CB- El índice ${indice} contiene ${elemento}` );
}
armasCh22.forEach( interarArreglo );

//FUNCION FLECHA
//armasCh22.forEach( iterarArreglo )
armasCh22.forEach( (elemento,indice) => console.log( `AF- El índice ${indice} contiene ${elemento}` ));

//FUNCION ForIn 
//arma me dará el índice que se itera sobre el arreglo (se iteran lo índices del arreglo)
for(let arma in armasCh22)
console.log( `ForIn arma: ${ armasCh22[arma] }` );

//FUNCION ForOf
//Se iteran los elementos del arreglo
for(let arma of armasCh22)
console.log( `ForOff arma: ${ arma }` );

//Iterar de forma descendente es solo con un for
for (let i = armasCh22.length - 1; i >= 0 ; i--) {
    console.log( `For descendente- El índice ${i} contiene ${armasCh22[i]}` );
}