const botonLogin = document.getElementById('login')
const botonAdd = document.getElementById('addBoton')

function changeLogin() {
    botonLogin.innerHTML = 'Log out'
}

function deleteBoton() {
    botonAdd.style.display = 'none'
}

function alertLike() {
    alert("Ninja was liked!");
}
