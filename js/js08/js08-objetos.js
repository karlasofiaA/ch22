console.log("JS08 Objetos")

//Crear un objeto
const frutasColor = { 
    fresa: "rojo", 
    pinia: "amarillo",
    pepino: "verde",
    naranja: "verde-amarillo"
};

//Formas de leer un objeto
//Clave-valor
console.log(frutasColor.fresa);
console.log(frutasColor['pepino']);

//Asignamos la clave a una variable
const colorFrutaNaranja = "naranja";
console.log(frutasColor[ colorFrutaNaranja ]);

//Modificación de un valor
frutasColor[colorFrutaNaranja] = "amarillo anaranjado";
console.log(frutasColor[colorFrutaNaranja]);

//Iterando los objetos
for (let frutaColor in frutasColor) { //Voy a leer las claves
    console.log("Clave:", frutaColor, "\n Valor:", frutasColor[frutaColor]);   
}

/* for (let frutaColor of frutasColor) { //Voy a leer los valores
    console.log("Valor: ", frutaColor);   
} */

//Uso de symbol: nos ayuda a ocultar nuestro atributo
const oculto = Symbol(); //Creamos variable de tipo symbol y ese tipo de datos no se iteran cuando vemos claves, solo de manera individual

const datosAutomovil = {
    modelo: "Vochito",
    fabricante: "VW",
    [oculto]: 250_000 
}

for( let clave in datosAutomovil){
    console.log("Dato:", datosAutomovil[ clave ]); 
}

console.log("Dato oculto:" + datosAutomovil[ oculto ]);
//Convertimos a tipo JSON para poder visualizar los datos del objeto cuando los vemos como string
localStorage.setItem("automovil", JSON.stringify(datosAutomovil) );

/* // Solicitud de Jaime
const words = ['hello', 'world', 'javascript'];
const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
console.log(capitalizedWords);  // ["Hello", "World", "Javascript"]
 */

//------------------------------------------------------------------//
                //Plantillas o prototipos

const myArray = [ 5, 7, 8, 14 ];
const myArrayWithConstructor = new Array(5, 7, 8, 14) //Arreglo creado con constructor

//Leyendo una propiedad del objeto myArray
//Las propiedades son características del objeto, estos no llevan paréntesis
myArray.length //4
//Usando el método(acción) para extraer el 7 y 8, los métodos son funciones con parámetros 
console.log(myArray.slice(1,3)); // [7,8]

//Estos son alguno atributos y métodos asignados a los objetos array y ahora nos toca nosotros crear nuestros propios objetos. 