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
