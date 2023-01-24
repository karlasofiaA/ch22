console.log("JS08 Clases");

//Para crear una clase se una la palabra reservada "Class"
//El nombre de la clase debe ser con notación PascalCasa (UpperCamelCase)

//Creamos una clase  y la primer palabra es mayúscula
class Usuario {
    nombre; //Atributo nombre
    //email
    //direccion
    //teléfono
    #carritoCompras;

    //Creando el constructor de la clase
    constructor(nombre, email, direccion, telefono) {
        this.nombre = nombre; //atributo = parámetro
        this.email = email;
        this.direccion = direccion;
        this.telefono = telefono;
        this.fechaCreacion = new Date();
        this.#carritoCompras = [];
    }

    /* set carritoCompras(producto){
        this.#carritoCompras.push(producto);
    } */
    get carritoCompras() {
        return this.#carritoCompras;
    }

    agregarProductoACarrito(producto) { //Agregamos método
        this.#carritoCompras.push(producto);
    }

    //Creamos métodos
    imprimirDatos() {
        let listadoProductos = "";
        this.#carritoCompras.forEach( producto => 
            listadoProductos += producto.imprimirDatos() + "\n");
 /*        if (this.#carritoCompras.length > 0) {
            for (let producto of this.#carritoCompras) {
                listadoProductos += `
                UUID: \t${producto.uuid}
                Nombre producto: \t${producto.nombre}
                Precio: \t${producto.precio}
                `;
            }
        } */


        const obtenerDatos =
            `===DATOS DEL USUARIO===
        Nombre: ${this.nombre}
        Email: ${this.email}
        Dirección: ${this.direccion}
        Teléfono: ${this.telefono}
        Fecha de creación: ${this.fechaCreacion}
        ${listadoProductos} `;
        return obtenerDatos;
    }

}

const datoJson = `{
    "name":"morpheus",
    "job":"leader",
    "skills":[
       "KunFu",
       "Capitan"
    ],
    "tripulacion":{
       "operador":"Tanque",
       "elegido":"Neo"
    },
    "vivo":true,
    "edad":45
 }`;

 const productosTemporada = `
 [
  {
    "nombre" : "Pantalón roto y pintado",
    "precio" : 2500,
    "imagen" : "http://mirepo.com/pantalon.jpg",
    "descripcion": "Pantalón a la moda, roto por todos lados",
    "tallas" : ["L","M","CH"]
  },
  {
    "nombre" : "Sudadera",
    "precio" : 300,
    "imagen" : "http://mirepo.com/sudarea.jpg",
    "descripcion": "Sudadera de NFL",
    "tallas" : ["Unitalla"]
  }
 ]
 `;

export { Usuario, datoJson, productosTemporada }; //Exportando la clase creada "Usuario" para utilizarla en otros archivos