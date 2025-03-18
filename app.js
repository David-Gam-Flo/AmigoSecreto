// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el campo de entrada
    const inputAmigo = document.getElementById("amigo");

    // Obtener el valor del campo de entrada y eliminar espacios en blanco
    const nombreAmigo = inputAmigo.value.trim();

    // Validar si el campo está vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    inputAmigo.value = "";

    // Actualizar la lista de amigos en el HTML
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el HTML
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno como un elemento <li>
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "No hay amigos disponibles para sortear.";
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${nombreSorteado}</strong>`;
}