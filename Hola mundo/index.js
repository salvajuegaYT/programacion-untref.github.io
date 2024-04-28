function Contenido() {
    var videos = document.querySelectorAll('video');
    var boton = document.getElementById('Prefer');
    var mostrarVideos = false; // Inicialmente no mostrar videos

    function actualizarContenido() {
        videos.forEach(video => video.style.display = mostrarVideos ? 'block' : 'none');
        boton.textContent = mostrarVideos ? 'Ocultar videos' : 'Mostrar video';
    }

    actualizarContenido();

    boton.addEventListener('mousedown', function() {
        mostrarVideos = !mostrarVideos; // Cambiar la preferencia de mostrar videos
        actualizarContenido();
    });
}

Contenido(); // Llamada a la función al cargar la página
