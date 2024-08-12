document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const photo = document.getElementById('userPhoto').files[0];
    const id = document.getElementById('userId').value;
    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;

    if (photo && id && name && email) {
        document.getElementById('userOutput').innerHTML = `
            <h2>Usuario Registrado</h2>
            <p><strong>ID:</strong> ${id}</p>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo:</strong> ${email}</p>
            <img src="${URL.createObjectURL(photo)}" alt="Foto de Usuario" width="100">
        `;
    } else {
        alert('Por favor, complete todos los campos.');
    }
});