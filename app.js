// Declaracion de variables
let amigos =[];
console.log(amigos);

//Funcion agregar amigos
function agregarAmigo() {
    let numeroAmigos = document.getElementById("amigo").value;
    console.log(numeroAmigos);
     if (numeroAmigos.trim()==="") {
        alert("Por favor,inserte un nombre.");
        
    } else{
         amigos.push(numeroAmigos);

     }
     limpiarCampoEntrada()
}

function limpiarCampoEntrada() {
    let restaurarCampo = document.getElementById("amigo").value = ""
    
}