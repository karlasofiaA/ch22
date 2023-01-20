console.log("Sesión JS03");

const datosUsuario = { nombre: "Jesica", ciudad: "CDMX" }; //Variable global

//Declaración de bloque. 
{
    /* Esto es una declaración de bloque en donde
    las variables declaradas (let, const) solo
    tendrán alcance (scope de la variable) dentro del bloque o bloques anidados
    dentro del bloque. */
    //Declarar variables tipo VAR tiene un scope global, pero es modificable.

    const datosUsuario = { nombre: "Wicho", ciudad: "Aguascalientes" }; //La variable local tiene mayor alcance (preferencia) que la variable global dentro del bloque
    const numPersonas = 49;
    console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    //Declaración de otro bloque
    {
        console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
    }
}

console.log(`${datosUsuario.nombre} nos saluda de ${datosUsuario.ciudad}`);
/* La variable numPersonas no está definida de manera global, solo local en el bloque anterior 
console.log(`En este momento hay ${numPersonas}  personas escuchando rolitas se Shakira`);
*/

//CONDICIONAL IF ... ELSE
/* Sintáxis
    if(condicionVerdadera) instrucción; 

    if(condicionVerdadera) instrucción; 
    else instruccion_en_caso_contrario;

    if(condicionVerdadera) {
        instrucciones;
    }
 */
const respuesta = false; //confirm("¿Te gusta Shakira?");
console.log(respuesta);
let mensaje;

if (respuesta)
    mensaje = "Entonces te pongo WakaWaka";
// mensaje = "Te fe-li-ci-to que bien actúas" //Si coloco esta línea rompe con la sintáxis de un if-else
else
    mensaje = "No me hables *se pone a llorar*";

console.log(mensaje);

//OPERADOR TERNARIO
/* Sintáxis: 
    condicion ? condicion_verdadera : condicion_falsa 
*/

let teamFrio = true; //confirm("¿Te gusta el frío?");
//let mensajeTernario = teamFrio ? "un ponchecito" : "nada, sácate de aquí"; 
console.log(`Te voy a servir ${teamFrio ? "un ponchecito" : "nada, sácate de aquí"}`);

let cantante = "Pique";
console.log(`Tu reloj es ${cantante === 'Shakira' ? "Rolex" :
    cantante == "Pique" ? "Casio" : "el sol"}`);

/* CODIGO UTILIZANDO IF ... ELSE
    let marcaReloj;
    if( cantante === 'Shakira' ) marcaReloj = "Rolex";
    else{
        if( cantante === 'Pique') marcaReloj = "Casio"
        else marcaReloj = "el sol";
    }
    console.log(`Tu reloj es ${ marcaReloj})
*/

// CONDICIONAL IF, ELSE IF, ELSE 
/* Sintáxis
    /* Sintáxis
    if(condicionVerdadera) instrucción; 
    else if(segundaCondicion) instrucción;
    else if(terceraCondicion) instrucción;
    ...
    else if(condicionN) instrucción;
    else instrucción;

*/
let nombrePersona = 'Karla';
let marcaReloj;
if (nombrePersona === 'Shakira')
    marcaReloj = 'Rolex';
else if (nombrePersona === 'Pique' || nombrePersona === 'Karla')
    marcaReloj = 'Casio';
else if (nombrePersona === 'Sergio')
    marcaReloj = "el sol";
else
    marcaReloj = 'uno de cars';

console.log(`${nombrePersona} tu reloj es ${marcaReloj}`);

//OPERADORES LÓGICOS and (&&) y or(||)

//CONDICIONAL SWITCH
/* Sintáxis
    switch(expresion){
        case valor1:
            instrucciones;
            break;
        case valor2:
            instrucciones;
            break;
        case valorN:
            instrucciones;
            break;
        default:
            instrucciones;
    } 
*/
nombrePersona = 'Sergio';
marcaReloj = '';

switch (nombrePersona) {
    case 'Shakira':
        marcaReloj = 'Rolex'; break;
    case 'Pique':
    case 'Karla':
        marcaReloj = 'Casio'; break;
    case 'Sergio':
        marcaReloj = 'el sol'; break;
    default:
        marcaReloj = 'uno de cars';
}

console.log(`Switch - ${nombrePersona} tu reloj es ${marcaReloj}`);

/* Preguntar (prompt) el número de mes (1-12) y de acuerdo al mes
indicado desplegar en consola la estación del año
mes 12, 1, 2 = Invierno
mes 3, 4, 5 = Primavera
mes 6, 7, 8 = Verano
mes 9, 10, 11 = Otoño 
Usar switch.*/
{
let numMes = 1;//Number(prompt('Numero del mes'));
let estacion;
let mes;

switch (numMes) {
    case 12: 
        mes = 'diciembre'; estacion = 'Invierno'; break;
    case 1:  
        mes = 'enero'; estacion = 'Invierno'; break;
    case 2:  
        mes = 'febrero'; estacion = 'Invierno'; break;
    case 3: 
        mes = 'marzo'; estacion = 'Primavera'; break;
    case 4:
        mes = 'abril'; estacion = 'Primavera'; break; 
    case 5:
        mes = 'mayo'; estacion = 'Primavera'; break;
    case 6:
        mes = 'junio'; estacion = 'Verano'; break;
    case 7:
        mes = 'julio'; estacion = 'Verano'; break;
    case 8:
        mes = 'agosto'; estacion = 'Verano'; break;
    case 9:
        mes = 'septiempre'; estacion = 'Otoño'; break;
    case 10:
        mes = 'octubre'; estacion = 'Otoño'; break;
    case 11:
        mes = 'noviembre'; estacion = 'Otoño'; break;
    default:
        mes = 'no existe';
        estacion = 'nada, los meses van del 1-12';
}

console.log(`En ${mes} la estación del año es ${estacion}`);
}
//UTILIZANDO ELSE IF
let numMes = 1;//Number(prompt('Numero del mes'));
let estacion = '';
let mes = '';

if(numMes === 12 || numMes === 1 || numMes === 2){
    if(numMes === 12) mes = 'diciembre';
    if(numMes === 1) mes = 'enero';
    if(numMes === 2) mes = 'febrero';
    estacion = 'invierno';
} else if(numMes === 3 || numMes === 4 || numMes === 5){
    if(numMes === 3) mes = 'marzo';
    if(numMes === 4) mes = 'abril';
    if(numMes === 5) mes = 'mayo';
    estacion = 'primavera';
} else if(numMes === 6 || numMes === 7 || numMes === 8){
    if(numMes === 6) mes = 'junio';
    if(numMes === 7) mes = 'julio';
    if(numMes === 8) mes = 'agosto';
    estacion = 'verano';
} else if(numMes === 9 || numMes === 10 || numMes === 11){
    if(numMes === 9) mes = 'septiembre';
    if(numMes === 10) mes = 'octubre';
    if(numMes === 11) mes = 'noviembre';
    estacion = 'otoño';
} else {
    mes = 'no existe';
    estacion = 'nada, los meses van del 1-12';
}

console.log(`En ${mes} la estación del año es ${estacion}`);