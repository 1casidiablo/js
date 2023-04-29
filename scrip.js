//1.-funcion escalera - valor 6 condición especial
function escalera(numero) {
   //para el valor es 6
    if (numero == 6) {
        for (x = 1; x <= 5; x++) {
            let cr = x;
            for (j = 1; j <= x; j++)
                console.log(+j);
            if (cr == 5) {
                //agrega el valor seis
                console.log(+j);
            }
            console.log("</br>");
        }
        // todos los demás valores
    } else {
        for (x = 1; x <= numero; x++) {

            for (j = 1; j <= x; j++)
                console.log(+j);
            console.log("</br>");
        }
    }
}

escalera(6);

//2.-Escribir una funcion que reciba 2 array y devuelva 
//un array con todos los elementos que coinciden entre ellos

//no lo pude convertir en funcion

let array1 = ['rojo', 'azul', 'amarillo'];
let array2 = ['blanco', 'negro', 'rojo'];
const temporal = array1.concat(array2).sort(); //union de los dos arrays y ordenamiento


let duplicados = [];
for (let i = 0; i < temporal.length; i++){

    if (temporal[i + 1] === temporal[i]) {
        duplicados.push(temporal[i])
    }
       
    }
console.log("duplicados= ");
    console.log(duplicados);


/*3)
3.1) Dado el siguiente objeto
let carrito = {
    montoTotal: 10,
    productos: ["Leche"]
}
Crear las clases necesarias para generar carritos respetando la estructura del objeto dado.*/

class CarroDeCompras {
    idSession
    idProducto
    cantidadUnidades
    fechaHora()
    descuentos
    importeTotal()
    borradoParcial()
    borradoTotal()
       

}
class Producto{

    
}


3.2) Agregar un metodo a la clase que agregue un producto al carrito y actualice el montoTotal
agregarProducto(nombre, precio, unidades) {
    // Completar aca...
}
Ej:
agregarProducto("Azucar", 5, 2);

//Resultado esperado
carrito = {
    montoTotal: 20,
    productos: ["Leche", "Azucar"]
}


3.3)Agregar al ejercicio anterior una validación para no permitir duplicados e imprimir un mensaje si el item ya existe “ya existe xxx ”