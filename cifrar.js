/* let cadenaValida = true */

function validaTexto() {
    let abc="abcdefghijklmnñopqrstuvwxyz" + " ";
    let bandera=true;
    let i_t_o=0;
    let texto_original = document.getElementById('textoUsuario').value;
    let longitud_texto = texto_original.length;
    while((i_t_o < longitud_texto) && bandera) {
        bandera = abc.includes(texto_original[i_t_o]);
        i_t_o++;
    };
    if(bandera){
       // alert("Todos son caracteres en minuscula");
       let valorCaja2 = document.querySelector('#valorResultado');
       valorCaja2.value = 'Texto Valido, Elija una opcion';
       /* Pendiente: Aqui habilitar botones encriptar, desencriptar y copiar inicialmente deshabilitados !!! */
       document.getElementById('encriptar').removeAttribute('disabled');
       document.getElementById('desencriptar').removeAttribute('disabled');
       /* cadenaValida = bandera; */
       /* document.getElementByIbanderad('copia').removeAttribute('disabled'); */
       return true;
    } else{
      // alert("Fallo no todos los caracteres son letras minusculas");
        /* cadenaValida = bandera; */
        let valorCaja2 = document.querySelector('#valorResultado');
        valorCaja2.value = 'Texto No Valido';
        let valorCaja = document.querySelector('#textoUsuario');
        valorCaja.value = '';
        valorCaja.value = 'Ingrese el texto aqui!';
        return false;
       /* los 3 botones permanecen deshabilitados de origen */
   }
}

function encriptar() {
    let validez = validaTexto();
    if (validez) {
       // inicia rutina para encriptar texto valido
       let texto_original = document.getElementById('textoUsuario').value;
       let texto_encriptado="";
       let longitud_texto=texto_original.length;
       let i_t_o=0;
       while(i_t_o < longitud_texto){
             if(texto_original[i_t_o] == "a"){
               texto_encriptado=texto_encriptado + "ai";
               i_t_o++;
             } else if(texto_original[i_t_o] == "e") {
                       texto_encriptado=texto_encriptado + "enter"; 
                       i_t_o++;
             } else if(texto_original[i_t_o] == "i") {
                       texto_encriptado=texto_encriptado + "imes";
                       i_t_o++;
             } else if(texto_original[i_t_o] == "o"){
                       texto_encriptado=texto_encriptado + "ober";
                       i_t_o++;
             } else if(texto_original[i_t_o] == "u"){
                       texto_encriptado=texto_encriptado + "ufat";
                       i_t_o++ ;
             } else {
                       texto_encriptado=texto_encriptado + texto_original[i_t_o];
                       i_t_o++;
             }
       }  
       // alert(texto_encriptado);
       let valorCaja2 = document.querySelector('#valorResultado');
       valorCaja2.value = texto_encriptado;
       document.getElementById('copia').removeAttribute('disabled');
       document.querySelector('#textoUsuario').value = '';
       document.querySelector('#textoUsuario').value = 'Ingrese el texto aqui';
   }  
}

function desencriptar() {
    let validez = validaTexto();
    if(validez) {
        let llaves=["ai","enter","imes","ober","ufat"];
        let vocales=["a","e","i","o","u"];
        let indice_llaves=0;
        // alert("Ingrese a funcion DES-ENCRIPTAR");
        let msg_encriptado = document.getElementById('textoUsuario').value;
        let msg_des_encriptado=msg_encriptado;
        while(indice_llaves < 5){
            msg_des_encriptado = msg_des_encriptado.replaceAll(llaves[indice_llaves], vocales[indice_llaves]);
            indice_llaves++;
        }
        // alert(msg_des_encriptado);
        let valorCaja2 = document.querySelector('#valorResultado');
        valorCaja2.value = msg_des_encriptado;
        document.getElementById('copia').removeAttribute('disabled');
        document.querySelector('#textoUsuario').value = '';
        document.querySelector('#textoUsuario').value = 'Ingrese el texto aqui';
    }
}

function copiar(){
    // alert("Ingrese a la funcion COPIAR");
    document.querySelector('#textoUsuario').value = '';
    let valorCaja2 = document.querySelector('#valorResultado');
    document.querySelector('#textoUsuario').value = valorCaja2.value;
    valorCaja2.value = '';
    valorCaja2.value ='Resultado de la conversion';
}

/* validaTexto(); */
