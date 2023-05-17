
alert("Ejercicio 3 \n No funciona Productos repetidos");


class Producto {
    
    nombre;         
    precio;         
    
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const Datos = [
    {
        nombre: "Leche",
        precio: 10
    },
    {
        nombre: "Azucar",
        precio: 5
    },
    {
        nombre: "Manteca",
        precio: 20
    }, 
        {
        nombre: "Arroz",
        precio: 3
    }
];



let Carrito = {
    Productos: [],
   
        
    GetTotal: function () {
        let suma = 0;
        for (let p of this.Productos) {
            suma += p.precio * p.cantidad;
        }
        return suma;
    },
           
    Agregar: function (producto, cantidad) {
        this.Productos.push({ ...producto, cantidad: cantidad });
        
             
    },

    Vaciar: function () {
        this.Productos = [];
    },

    MostrarCompra: function (producto, cantidad) {
        var listaCompra = "";
                
        for (var i = 0; i < this.Productos.length; i++) {
            
            listaCompra += `${i + 1}) ${GetProductoCompra(this.Productos[i])}\n`;               
             
        }
        
        return listaCompra;
    },         
      

    GetRepetido: function () {

        var listaRepetidos = "";
        this.Productos.sort();

            for (i = 0; i < this.Productos.length; i++) {
            if (this.Productos[i] === this.Productos[i - 1]) {
                listaRepetidos = `${i}) ${GetProductoRepetido(this.Productos[i])}\n`;
            }

            return listaRepetidos;
        }
    }   

        
  
   
}
function GetStringProducto(producto) {
    return producto.nombre + " - $" + producto.precio;
   
}
 
function GetProductoCompra(producto) {
    return " " + producto.nombre + " - $ " + producto.precio + "  cant.: " + producto.cantidad;
}
function GetProductoRepetido(producto) {
    return producto.nombre + "  cant.: " + producto.cantidad;
}


function GetListaProductoString() {
    var lista = "";
    for (var i = 0; i < Datos.length; i++) {
        lista += `${i + 1}) ${GetStringProducto(Datos[i])}\n`;
    }
    return lista;
   
}

function listadoProductos() {
    let listado = Number(prompt(GetListaProductoString()));
    let producto = GetProducto(listado);
    if (producto != null) {
        cantidad = Number(prompt("Cuantas desea llevar?"));
        Carrito.Agregar(producto, cantidad);
                
        compra = Number(prompt('\nContinua la compra? \n1)Si \n2)No'))
        
        
        if (compra == 1) {
            
            listadoProductos();
          
                    }
        else {
            
            alert(`Productos:\n \n  ${Carrito.MostrarCompra()} \n Total a pagar: $${Carrito.GetTotal()}`)
           
            alert(`Producto repetido:\n \n  ${Carrito.GetRepetido() } `)      
           
        }
    }
    else {
        alert("Opcion Erronea");
        
    }
}
function GetProducto(seleccion) {
    if (Datos.length >= seleccion) {
        return Datos[seleccion - 1];
    }
    return null;
}
listadoProductos();

