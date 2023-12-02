//============================== CAMBIO DE IMAGENES DE PUBLICIDAD
const imagenesPublicidad = [
    'img/pub2.jpg',
    'img/pub3.jpg',
    'img/pub1.jpg',
    // Agregar más URL de imágenes según sea necesario
];

let indiceImagen = 0;
const tiempoIntervalo = 3000; // Tiempo en milisegundos (cada 3 segundos en este caso)

function cambiarImagen() {
    document.getElementById('imagenAnuncio').src = imagenesPublicidad[indiceImagen];
    indiceImagen = (indiceImagen + 1) % imagenesPublicidad.length;
}

function iniciarCambioImagen() {
    cambiarImagen(); // Cambiar la imagen inicialmente

    // Establecer el intervalo para cambiar las imágenes
    setInterval(cambiarImagen, tiempoIntervalo);
}

// Llamar a la función para iniciar el cambio de imágenes
iniciarCambioImagen();
//============================== CAMBIO DE IMAGENES DE CORAZON
// JavaScript para cambiar el estado de favorito de las imágenes
document.addEventListener('DOMContentLoaded', function() {
    const imagenesFavorito = document.querySelectorAll('.imagen-favorito');

    imagenesFavorito.forEach((imagen) => {
        let originalSrc = imagen.src;
        let hoverSrc = imagen.dataset.hoverSrc;
        let favorito = false;

        imagen.addEventListener('mouseenter', () => {
            if (!favorito) {
                imagen.src = hoverSrc;
            }
        });

        imagen.addEventListener('mouseleave', () => {
            if (!favorito) {
                imagen.src = originalSrc;
            }
        });

        imagen.addEventListener('click', () => {
            if (favorito) {
                imagen.src = originalSrc;
            } else {
                imagen.src = hoverSrc;
            }
            favorito = !favorito;
        });
    });
});
//===================================== REDIRIGIR
// Obtener el botón por su id
const boton = document.getElementById('miBoton');

// Agregar un evento de clic al botón
boton.addEventListener('click', function() {
    // Redirigir a otro archivo HTML
    window.location.href = 'login.html';
});
//======================================== DESPLAZAMIENTO DE PEDIDOS (MANEJO)
//======================================== ESTILOS CARRITO DE COMPRAS
document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad para eliminar artículos de la cesta
    var removeItemButtons = document.getElementsByClassName('remove-item');
    for (var i = 0; i < removeItemButtons.length; i++) {
        var button = removeItemButtons[i];
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            updateCartTotal();
        });
    }

    // Funcionalidad para aplicar códigos de descuento
    var applyCodeButton = document.getElementsByClassName('apply-code')[0];
    applyCodeButton.addEventListener('click', function() {
        // Aquí deberías añadir la lógica para aplicar el descuento
        alert('Código aplicado!');
    });

    // Función para actualizar el total de la cesta
    function updateCartTotal() {
        // Lógica para actualizar el total
    }
});


