// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creación de array para almacenar nombres

let arrayAmigos = [];

// Función para agregar nombres de amigos
 function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    console.log(nombre);

    // Validar que hay algo escrito
    if (nombre !== '') {
        arrayAmigos.push(nombre)
        limpiarCaja();
        actualizarLista();
    } else {
        alert ('Por favor, inserte un nombre');
        return;
    }
 }

 // función para actualizar lista cada que se agrega un nombre
 function actualizarLista () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
// función para agregar lista al html
    for (let i = 0; i < arrayAmigos.length; i++) {
        let li = document.createElement("li"); 
        li.textContent = arrayAmigos[i]; 
        lista.appendChild(li); 
    }
}

 //función para limpiar caja

 function limpiarCaja() {
 document.querySelector('#amigo').value = '';
} 

// sortear amigo

function sortearAmigo() {
    if (arrayAmigos.length === 0) {
        alert("¡Agrega al menos un amigo antes de sortear!");
        return;
    } else {
        let amigoSorteado = Math.floor(Math.random() * arrayAmigos.length);
        let amigoSeleccionado = arrayAmigos[amigoSorteado];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<li>El amigo secreto es: ¡<strong>${amigoSeleccionado}</strong>!</li>`;
    }
}
