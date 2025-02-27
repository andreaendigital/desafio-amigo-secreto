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

    for (let i = 0; i < amigos.length; i++) {  // iterar el arreglo con bucle for
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`; //crear elementos de lista
    }

}

function sortearAmigo() { // funcion para sortear nombre
    if (amigos.length === 0) {  // validacion array no vacío
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); // genero indice aleatorio
    const amigoSorteado = amigos[indiceAleatorio]; // se accede al elemento/nombre sorteado con el indice aleatorio

    document.getElementById("resultado").innerHTML = `<p>El amigo sorteado es: <strong>${amigoSorteado}</strong></p>`;
    //escribe el resultado del sorteo
}