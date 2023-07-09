const userName = document.querySelector('.userName')
const conectionUser1 = document.querySelector('#conectionUser1')
const conectionUser2 = document.querySelector('#conectionUser2')
const numberConections = document.querySelector('#pNumberConection')
const numberConectionsAvailable = document.querySelector('#pNumberConectionsTotal')

// Name changed//
function changeName() {
    userName.innerHTML = 'Maria Jazmin'
}

// changes in conection requests//
let conectionsUser = 2
let aceptedConectionUsers = 430
function aceptConection(element) {
    conectionsUser--
    aceptedConectionUsers++
    element.style.display = 'none'
    numberConections.innerHTML = conectionsUser
    numberConectionsAvailable.innerHTML = aceptedConectionUsers
}

function nonConection(element) {
    conectionsUser--
    element.style.display = 'none'
    numberConections.innerHTML = conectionsUser
}