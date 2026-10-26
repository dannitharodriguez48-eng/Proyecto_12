const mensaje = document.getElementById("mensaje");
const cantidad = document.getElementById("cantidad");
const maximo = 250;

function actualizarContador() {
    const total = mensaje.value.length;

    cantidad.textContent = total;

    if (total === maximo) {
        mensaje.classList.add("limite");
    } else {
        mensaje.classList.remove("limite");
    }
}

mensaje.addEventListener("input", actualizarContador);
actualizarContador();
