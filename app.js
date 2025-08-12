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
     limpiarCampoEntrada();
     ubicarAmigosEnLista();
}

function limpiarCampoEntrada() {
    let restaurarCampo = document.getElementById("amigo").value = ""
    
}
 //Funcion para actualizar lista de amigos
 function ubicarAmigosEnLista() {
    let lista= document.getElementById("listaAmigos");
    lista.innerHTML=""
    console.log(lista)
        for(let i=0; i<amigos.length; i++){ 
            let listadoAmigos = document.createElement("li");
          listadoAmigos.textContent = amigos[i]; 
            lista.appendChild(listadoAmigos)

           
           }
        
    
 }