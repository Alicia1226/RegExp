// Ejercicio1

let valid = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.([a-z]{2,4})+$/

function validarEmail(email) {
    if (/^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.([a-z]{2,4})/.test(email)){
        alert("La dirección de email " + email + " es correcta.")
    } else {
        alert("La dirección de email es incorrecta.");
    } 
}
document.getElementById("formulario").addEventListener("submit",function(event){
    event.preventDefault()
    let value = document.getElementById("email").value
    console.log(value)
    validarEmail(value)
})



