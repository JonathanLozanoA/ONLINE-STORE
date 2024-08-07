// // FUNCIÓN PARA MODIFICAR EL BOTÓN DE ROPASPORT E IMAGEN DEL HOME
// function ropaSport() {
//   let el = document.getElementById("ropaSport"); 
//   el.innerHTML = "¡Buena elección!";
//   //Modifica el banner bajo el title
//   let el1 = document.querySelector("p");
//   el1.innerHTML = "VAMOS AL CARRITO DE COMPRAS"; 
//   let el2 = document.querySelector(".imgRopaCasual");
//   el2.src = "https://st3.depositphotos.com/9880800/14298/i/450/depositphotos_142987593-stock-photo-sporty-men-and-women.jpg";
// }
   
// // FUNCIÓN PARA MODIFICAR EL BOTÓN DE ROPASPORT E IMAGEN DEL HOME
// function altoRendimiento() {
//   document.querySelector("#altoRendimiento").innerHTML = "¡WOW, que nivel!";
//   let el = document.querySelector(".imgRopaAltoRendimiento");
//   el.src = "https://estaticos-cdn.prensaiberica.es/clip/34c86ea8-c1b3-4d13-a7fc-a1b5ee320dd7_alta-libre-aspect-ratio_default_0.jpg";
// } 

//FUNCIÓN PARA SABER EL NUMERO DE CATEGORÍA DISPONIBLES
function numeroItems() {
  let numEl = document.getElementsByClassName("seleccion");
  let resultP = document.querySelector("p.result");
  resultP.innerHTML = "Hay " + numEl.length + " Categorías entre ropa deportiva y accesorios";
}  

//FUNCIÓN PARA IMPRIMIR EN PANTALLA LOS DATOS INGRESADOS POR USUARIO 
function registro() {
  let datoMail = document.getElementById("datoMail").value;
  let pMail = document.getElementById("pMail");
  pMail.innerHTML = datoMail;
  
  let datoDir = document.getElementById("datoDir").value;
  let pDir = document.getElementById("pDir");
  pDir.innerHTML = datoDir + " Colombia";
  
  let datoCel = document.getElementById("datoCel").value;
  let pCel = document.getElementById("pCel");
  pCel.innerHTML = datoCel;

  let datoFecha = document.getElementById("datoFecha").value;
  let pFecha = document.getElementById("pFecha");
  pFecha.innerHTML = datoFecha;
  
  let datoHora = document.getElementById("datoHora").value;
  let pHora = document.getElementById("pHora");
  pHora.innerHTML = datoHora + " apróximadamente.";
}

//FUNCIÓN PARA IMPRIMIR EN PANTALLA LOS DATOS ADICIONALES DEL USUARIO 
function agregar() {
  let datosAdicionales = document.getElementById("datosAdicionales").value;
  let pDatos = document.getElementById("pDatos");
  pDatos.innerHTML = datosAdicionales;
}

