// Lista de URL de las imágenes
const imagenes = [
    'img/pub2.jpg',
    'img/pub3.jpg',
    'img/pub1.jpg',
    // Agrega aquí más URL de imágenes según necesites
];

let indiceImagen = 0;
const tiempoIntervalo = 3000; // Tiempo en milisegundos (cada 3 segundos en este caso)

function cambiarImagen() {
    document.getElementById('imagenAnuncio').src = imagenes[indiceImagen];
    indiceImagen = (indiceImagen + 1) % imagenes.length;
}

// Cambiar la imagen inicialmente
cambiarImagen();

// Establecer el intervalo para cambiar las imágenes
setInterval(cambiarImagen, tiempoIntervalo);
