// Declaracion del array
let amigos =[];
console.log(amigos);

//Funcion agregar amigos y validacion
function agregarAmigo() {
    let numeroAmigos = document.getElementById("amigo").value;
    console.log(numeroAmigos);
      if (numeroAmigos.trim()===""|| /^\d+$/.test(numeroAmigos.trim())) {
        alert("Por favor,ingrese un nombre valido.");
      }
      else if (/[!@#$%^&*(),.?":{}|<>\\[\]=~`_+\-]/.test(numeroAmigos)){
        alert("Por favor,ingrese un nombre valido.");
      }
        else{ 
        amigos.push(numeroAmigos);
    }
        
     limpiarCampoEntrada();
     ubicarAmigosEnLista();
}

function limpiarCampoEntrada() {
     restaurarCampo = document.getElementById("amigo").value = ""
    
}
 //Funcion para actualizar lista de amigos
 function ubicarAmigosEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML=""
    console.log(lista)
        for(let i=0; i<amigos.length; i++){ 
            let listadoAmigos = document.createElement("li");
          listadoAmigos.textContent = amigos[i]; 
            lista.appendChild(listadoAmigos)

           
           }
           
 }
 //Funcion para sortear amigos
 function sortearAmigo() {
    let sorteo = document.getElementById("resultado");
    if (amigos.length===0) { 
        alert("No hay amigos que sortear");
        return;
    } 
    let aleatorioNumero = Math.floor(Math.random()*amigos.length)
    let numeroSeleccionado = amigos[aleatorioNumero] 
     
    sorteo.innerHTML = `Tu amigo secreto es:"${numeroSeleccionado}"`
    deshabilitarBotones()
  } 
   //Funciones para botones
  function deshabilitarBotones() {
    document.getElementById("sorteando").setAttribute("disabled","true");
    document.getElementById("agregar").setAttribute("disabled","true");
  }
  function habilitarBotones() {
    document.getElementById("sorteando").removeAttribute("disabled");
    document.getElementById("agregar").removeAttribute("disabled");
  }

  //Funcion para reiniciar juego
  function nuevoSorteo() {
    habilitarBotones();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
    document.getElementById("amigo").value = "";
    
    

  }
    
    
  
   
    
    
      
    
    
      
    
    
  
  

    
    
  