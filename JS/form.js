const formularioContacto = document.getElementById('formularioContacto');

formularioContacto.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const mensaje = document.getElementById('mensaje').value;

    const datos = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };


  
    // espacio para  enviar los datos a un servidor
    console.log('Formulario enviado: ', datos);

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo a la brevedad.');
});
