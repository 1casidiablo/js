alert("Ejercicio 1 \n ARRIBA:\n ---Piramide --- ");



function escalera(numero) {

    if (numero >= 6) {
        for (i = 0; i <= 4; i++) {
            for (j = 1; j <= i; j++)
                document.write(+j);
            document.write("</br>");
        }
        for (i = 6; i <= numero; i++) {
            for (j = 1; j <= i; j++) {
                if (j != 4) {
                    document.write(+j);
                    
                }
                   
            }
            document.write("</br>");
        }


    } else {
        for (i = 0; i <= numero; i++) {
            for (j = 1; j <= i; j++)
                document.write(+j);
            document.write("</br>");
        }   

    }
   
       
} 

let piramide1 = prompt(`Ingresa un numero entero \n Para 6 y mayores no muestra el 4`);

escalera(piramide1);

alert("Ejercicio 1 \n ABAJO:\n ******Piramide ****** ");

function escalera2(numero) {

    if (numero == 6) {
        for (i = 0; i <= 4; i++) {
            for (j = 1; j <= i; j++)
                document.write(+j);
            document.write("</br>");
        }
        for (i = 6; i <= numero; i++) {
            for (j = 1; j <= i; j++) {
                if (j != 4) {
                    document.write(+j);

                    
                }


            }
        }

    } else {
        for (i = 0; i <= numero; i++) {
            for (j = 1; j <= i; j++)
                document.write(+j);
            document.write("</br>");
        }
        document.write("</br>");

    }


}

let piramide2 = prompt(`Ingresa un numero entero \n para 6 no muestra el 4`);

escalera2(piramide2);
