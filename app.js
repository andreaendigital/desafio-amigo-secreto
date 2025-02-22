// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

var amigos = []; // Crear un array para almacenar los nombres

function agregarAmigo() {  // crear función que ingrese nombre y añada a la lista

    const inputAmigo = document.getElementById("amigo"); //capturar el valor de entrada
    const nombre = inputAmigo.value.trim(); //obtiene el valor del campo de entrada - trim elimina espacios en balnco al inicio y final

 if (nombre === "") {  //condicional que valida input
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // inserto el nombre en el array
    actualizarLista();  // llamo a otra funcion para actualizar la lista
    inputAmigo.value = "";  //limpio el input

}

function actualizarLista() { // crear funcion de actualizar lista
    const listaAmigos = document.getElementById("listaAmigos"); //selecciono la lista donde se muestran los amigos
    listaAmigos.innerHTML = "";  //previene duplicados al limpiar lista


} 