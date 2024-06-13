document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Validación básica del formulario
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        // Simulación de envío de formulario
        alert('Formulario enviado correctamente');
        // Aquí puedes agregar la lógica para enviar el formulario a tu servidor
    } else {
        alert('Por favor, completa todos los campos.');
    }
});