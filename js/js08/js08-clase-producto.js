/*Pilares de la programación orientada a objetos
Encapsulamiento: No tengamos accedo directo a los atributos de alguna clase. Se agrega # a los atributos que se quieran ocultar. 
Abstraccion: 
Herencia
Polimorfirmo */

//Crearemos una clase los productos
class Producto {
    #nombre;
    #precio;
    #uuid;
    #createdAt;

    constructor(nombre, precio, uuid) { //Creamos un constructor
        this.#nombre = nombre;
        this.#precio = precio;
        this.#uuid = uuid;
        this.#createdAt = new Date();
    }

    //Para dar acceso a los atributos encápsulados usamos los métodos setters y getters
    get nombre() { //Método para leer el atributo encapsulado
        return this.#nombre;
    }
    set nombre(nombre) { //Método para modificar un atributo encapsulado
        //Condición para solo guardar si la longitu es mayor a 5 caracteres
        //nombre.length > 5 && (this.#nombre = nombre); //Una manera de filtrar
        this.filtrarNombre(nombre, 5) && (this.#nombre = nombre); //Otra manera de filtrar a partir de una función
    }

    filtrarNombre(nombre, longitudMinima) {
        if (nombre.length > longitudMinima)
            return true;
        else
            throw `La longitud es menor a ${longitudMinima} caracteres`;
    }

    imprimirDatos() { //Método padre 
        return `
        UUID: \t${this.uuid}
        Nombre producto: \t${this.nombre}
        Precio: \t${this.precio}`;
    }

    //-----Realizar setters and getters del resto de atributos -----//
    get precio() {
        return this.#precio;
    }
    set precio(precio) {
        !isNaN(precio) && (this.#precio = precio);
    }

    get uuid() {
        return this.#uuid;
    }
    /*  set uuid(uuid) {
         this.#uuid = uuid;
     } */
}

class ProductoElectronico extends Producto {
    #diasParaGarantia;

    constructor(nombre, precio, uuid, diasParaGarantia) {
        //super() hace referencia al constructo de la clase padre
        super(nombre, precio, uuid);
        this.#diasParaGarantia = diasParaGarantia;
    }
    //Agregar el set and get de díasParaGarantía
    get diasParaGarantia() {
        return this.#diasParaGarantia;
    }
    set diasParaGarantia( dias ) {
        this.#diasParaGarantia = dias;
    }

    //Sobreescritura(overriding) de métodos
    imprimirDatos(){
        return super.imprimirDatos() + `
        Garantía ${this.diasParaGarantia}
        `;
    }
}

export { Producto, ProductoElectronico }; //Exportando el producto