// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de array para almacenar nombres

let listaAmigos = [];


// Función para agregar nombres de amigos
 function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    // Validar que hay algo escrito
    if (nombre !== '') {
        listaAmigos.push(nombre)
        actualizarLista ();
        limpiarCaja ();
    } else {
        alert ('Por favor, inserte un nombre');
        return;
    }
 }

 // función para limpiar caja
 function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

//función para agregar nombres a la lista visible
/*function actualizarLista () {
    let lista = document.querySelector('#listaAmigos');
    for (let i = 0; i <listaAmigos.lenght; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        lista.appendChild(li);
    }
}