// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Revisando mis horrores y errores con otros compañeros, di alcance a la solución de este desafío. 
// Quede bastante conforme igual. Hubieron algunas soluciones que no llegaban a puerto.
// Sin embargo creo que este camino que segui, me dio mas sentido y finalmente  alcance de mejor manera al objetivo


let listaAmigosArray = [];// generación del arreglo para listar.
 let listaHtml = 0; //Se declara variable de lista para nombres de amigos a considerar en el caso.
 let resultadoHTML = 0;

 //Se crea la función agregar amigo para que sea agregado al arreglo. ahora, esta funcion sólo asignará el valor de la nueva variable "amigoUsuario" a el input del html desde el ID
 function agregarAmigo(){
     limpiaLista();
     let amigoUsuario = document.getElementById('amigo').value;
     
     if (amigoUsuario == ""){
         alert("favor inserta un nombre de amigo a agregar")
     }else{
         listaAmigosArray.push(amigoUsuario);
     }
     // se considero el contraste para verificar si la caja de texto tenía algo o no.
        // si no tenía nada, se mostrará un mensaje de alerta.
        // si tenía algo, se agregará el valor de la variable amigoUsuario al arreglo listaAmigosArray.
     limpiaTextBox(); 
     recorrerArray();//luego genera llamado de función para limpiar caja después de ingreso de nombre y wl llamado de función para recorrer el arreglo a efectos de mostrar los nombres en un listado.
     
     return;// Retorna el valor buscado
 }
 console.log(listaAmigosArray);

 //Se crea la función para recorrer el arreglo e ir agregando a la lista de HTML los nombres.
 function recorrerArray(){
     listaHtml = document.getElementById('listaAmigos');// Asignar los valores a la lista de HTML <ul>, llamada por ID.
     limpiaLista();// Borrar los elementos de lista anteriores para que no se repitan.
    
     //genera el Bucle for each para correr el arreglo y mostrar valor.
     listaAmigosArray.forEach(function(amigoUsuario){
         let agregarAmigoLista =document.createElement('li');// Crear elemento de la lista en HTML y asignarla a la variable agregarAmigoLista.
         agregarAmigoLista.textContent = amigoUsuario;// Asignar el valor de la variable al <li> del HTML.
         listaHtml.appendChild(agregarAmigoLista);//Agregar los elementos de <li> a la lista <ul>.
     });
     return;// Retorna el valor buscado
 }
 recorrerArray();

//Se crea función para sortear al azar los amigos ingresados.
 function sortearAmigo(){
     //se genera condicion de contraste para validar si hay elementos base en la lista. sino, no se sortea.
     if (listaAmigosArray == ""){
     alert("Nop, No es posible sortear porque no hay amigos en la lista, por favor ingresar nombres");
     }else if(listaAmigosArray.length<=1){
     alert("Ojo, Debe haber mas de 1 amigo para poder realizar el sorteo");
     }else{
     limpiaLista();// Llamar función para limpiar la lista y evitar repeticiones.
     let valorMaximoArray = listaAmigosArray.length; // Se declara variable para tomar el tamaño de la lista.
     let numeroAleatorio = Math.floor(Math.random()*valorMaximoArray); // Se declara variable asignandole la función matematica para obtener un numero al azar y aproximarlo al entero mas cercano.
     let nombreGanador = listaAmigosArray[numeroAleatorio];//Se declara variable para indicar que en la lista se tendra en cuenta el numero aleatorio obtenido en el paso anterior que sera el indice del array.
     resultadoHTML = document.getElementById('resultado');//Se trae el elemento resultado que es de tipo lista <ul> el cual es asignado a la variable declarada.
     resultadoHTML.innerHTML = `El amigo secreto que salió sorteado en esta oportunidad es ${nombreGanador}`;//Asignar mensaje con nombre ganador a la variable y esta lo asignara a su respectivo <ul> en HTML.
     document.querySelector('#agregar').setAttribute('disabled', 'true');
     document.getElementById('nuevo').removeAttribute('disabled');
     document.getElementById("nuevo").style.cursor = ('pointer');
     document.getElementById("agregar").style.cursor = ('default');
     console.log(numeroAleatorio)
     }
 
     return;// Retorna el valor requerido
     }
 

 //Se crea función para limpiar caja de texto donde ingresa nombres.
 function limpiaTextBox(){
     document.getElementById('amigo').value = "";
     return;// Retorna el valor requerido
 }
 //Se crea función para limpiar la lista de nombres.
 function limpiaLista(){
     listaHtml.innerHTML="";
     return;// Retorna el valor requerido
 }
//Se crea función para restringir solo letras y un mámimo de caracteres (que componen nombre).
 function caracteresTamañoPermitidos(){
     let soloLetras = document.getElementById("amigo");// Asignar el texto del input a la variable, llamada por ID.
     let maxDeCaracteres = 40;// Declara variable de máxmimo de caracteres con su respectivo valor. En este caso 40
     
     soloLetras.addEventListener("input",(e)=>{ //A la variable del input se le asigna este evento para ver en tiempo real lo que se está digitando.
         let valorInicial = e.target.value; // Se asigna el valor del input a la variable declarada como valorInicial.
         let valorPermitido = valorInicial.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');// Se declara variable para asignar el lenguaje natural que son los caracteres pueden estar en la caja de texto o input.

         //Condicional para mostrar en la función mensaje insertar si el valor ingresado es diferente al permitido.
         if (valorInicial != valorPermitido){
             mensajeInsertar("p", "nop, solo se permite digitar letras");
 
         } else{
             mensajeInsertar("p", "");
     
         }
         e.target.value = valorPermitido; //Al input se le restringe que se pueda ingresar valorres diferentes de los permitidos.
         
         //Condicioonal para validar si el tamaño maximo del valor permitido es superior al máximo de caracteres permitidos, mostrando un mensaje en la funcion mensajeInsertar.
         if (valorPermitido.length > maxDeCaracteres){
             mensajeInsertar("span", "😔¡Lo siento, no se puede escribir mas de 39 caracteres!");
 
         } else{
             mensajeInsertar("span", "");
         }
             
             e.target.value = valorPermitido.substring(0,maxDeCaracteres);// Al input se le restring digitar mas caracteres de los permitidos.
     })
     return;// Retorna el valor requerido
 }
    

 caracteresTamañoPermitidos();//Llamar función para permitir solo letras y maximo de caracteres.


//Se crea función para insertar un mensaje en cualquier elemento HTML.
 function mensajeInsertar(elemento, texto){
     let mensajeAlerta = document.querySelector(elemento)//Trae el elemento de HTML como parametro y lo asigna a la variable declarada. 
     mensajeAlerta.innerHTML = texto; //Ingresa el texto que se tiene como parametro al elemento de HTML a traves de la variable creada en el paso anterior.
     return;// Retorna el valor requerido
     }
 //Se crea función para generar un nuevo juego cambiando las condiciones de inicio a "condición inicial".
 function nuevoJuego(){
     resultadoHTML.innerHTML = "";
     limpiaTextBox();
     limpiaLista();
     listaAmigosArray = [];
     document.querySelector('#nuevo').setAttribute('disabled', 'true');
     document.getElementById('agregar').removeAttribute('disabled');
     document.getElementById('sorteo').removeAttribute('disabled');
     document.getElementById("nuevo").style.cursor = ('default');
     document.getElementById("agregar").style.cursor = ('pointer');
     document.getElementById("sorteo").style.cursor = ('pointer');
     return;
     }

     
     
     
 
 