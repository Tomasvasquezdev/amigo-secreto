let nombres = [];

function agregarAmigo() {
    let input = document.querySelector(".input-name");
    let nombre = input.value.trim(); // Elimina espacios inicio y final

    if (nombre !== "") {
        nombres.push(nombre); 
        actualizarLista(); 
        limpiarCaja();
    } else {
        alert("Error, ingrese un nombre.");
    }
}

function limpiarCaja() {
    document.querySelector(".input-name").value = ""; // Limpia input
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia lista 

    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Elige un amigo random
function sortearAmigo() {
    if (nombres.length < 2) {
        alert("Debe haber al menos dos nombres para hacer el sorteo.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoElegido = nombres[indiceAleatorio];

    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoElegido}</strong> 🎉</li>`;

    // Reiniciar lista después del sorteo
    nombres = []; 
    actualizarLista(); 
}
