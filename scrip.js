
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
