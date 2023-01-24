import { Usuario, datoJson, productosTemporada } from './js08-clases.js';
import { Producto} from './js08-clase-producto.js';
import { ProductoElectronico } from './js08-clase-producto.js';

//Instanciar un objeto, creando su localidad en memoria
const albertoFrausto = new Usuario(
    "Alberto Frausto",
    "frausto@gmail.com",
    "Siempre viva",
    "55 8952 5879"
);

/*
//Imprimir datos del arreglo sin utilizar métodos 
console.log(albertoFrausto);
console.log("Nombre:",albertoFrausto.nombre);
console.log("E-mail:",albertoFrausto.email);
console.log("Dirección:",albertoFrausto['direccion']);
console.log("Teléfono:",albertoFrausto['telefono']); */
//Utilizando el método creado
console.log(albertoFrausto.imprimirDatos());

//Instanciar un objeto, creando su localidad en memoria
const karlaArenas = new Usuario(
    "Karla Arenas",
    "karla@gmail.com",
    "Av. Niños Héroes",
    "81 8752 4589"
);
console.log(karlaArenas.imprimirDatos());

for (let claveUsuario in karlaArenas)
    console.log(claveUsuario);
//-------------Usando una nueva clase----------------
const helado = new Producto(
    "Helado de Vainilla",
    80,
    'e3259939-f0eb-4632-a46f-0a5025f713d9'
);

for (let claveProducto in helado)
    console.log(claveProducto);

console.log(helado.nombre); //Helado de Vainilla
helado.nombre = "helado de limón"; //Modificamos el aributo
console.log(helado.nombre); //helado de limón

console.log(helado.precio);
helado.precio = 75; //Modificamos el aributo
console.log(helado.precio);

console.log(helado.uuid);
/* helado.uuid = "eF1233443-aaaaa"; //Modificamos el aributo
console.log(helado.uuid);  */

//Agregamos más productos
karlaArenas.agregarProductoACarrito(helado);
karlaArenas.agregarProductoACarrito(new Producto("pollo", 120, "57553be5-d365-4287-9a6c-d3e468a71f35"));
karlaArenas.agregarProductoACarrito(new Producto("galletas", 25, "09f21e1f-2821-4329-af7a-c5ba64f849f4"));

const grabadora = new ProductoElectronico(
    "LG X300",
    6500,
    "4a63d2ab-358a-46ff-a06b-ffefe3860152",
    365
);
karlaArenas.agregarProductoACarrito(grabadora);//Agregamos la grabadora a nuestro objeto

console.log(karlaArenas.imprimirDatos());

//----------------------JSON-------------------------------------------

/* fetch()
.then(response => responde.json())
.catch(); */

console.log(  JSON.parse( datoJson) );

 //ToDo cambiar esta línea por la FETCH API
 const productosPagInicio = JSON.parse(productosTemporada); 
 console.log(productosPagInicio);

 productosPagInicio.forEach( producto => 
    console.log( `En venta ${producto.nombre} a $${producto.precio}`));


localStorage.setItem("productos-inio",  JSON.stringify(productosPagInicio));//Objecto->JSON
localStorage.setItem("fecha-caducidad", (new Date().getTime()) + 60_000 );
