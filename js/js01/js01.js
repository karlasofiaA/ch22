console.log("Sesión JS01");

/*Son 7 datos primitivos de JS:
-String ( "Hola Mundo" )
-Number ( 1800.22 )
    |Los números se utilizan 64 bits para almacenarlo
    |pero, solo se usan 53 bits 
-BigInt ( 1800n )
    |Convertir un dato numérico a bigInt
    |let maxNumber = Number.MAX_SAFE_INTEGER;
    |let bigIntVar = BigInt ( maxNumber );
    |bigIntVar + 1n (agregar n al valor para convertilo a un biginit)
-Boolean ( false ) ( true )
-Undefined ( undefined )
    |A un dato no se le define el tipo de dato, solo se declara
-Null ( null )
    |Es un dato que intencionalmente se elimina o borra el tipo de dato
        dato === null
-Symbol 
    Se utilizan con los objetos

Principales tipos de datos Object en JS:
numéricos, string, array, boolean, indefinido, objeto y nulo 

Tipo de datos Object:
-Object
    const myObject = { clave: "valor" , 
                    datoBoolean: true
                    edad: 20 }
    Para leer la clave pordemos
     myObject.edad
     myObject["edad"]
     delete myObject.edad
- Array 
    const myArray = [ 12 , "texto" , true ];
    myArray[1]
        texto 
*/

/* CONVERSIONES DE DATOS
- String a number
    | parseInt
    Number.parseInt(miNumeroString)
    Number.parseInt(numero, base)
    | parseFloat 
    Number.parseFloat(miNumeroString)

-Number a string
    |(1025).toString( base )
    (numero).toString()
*/