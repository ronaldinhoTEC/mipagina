// Toggle between hiding and showing blog replies/comments
document.getElementById("myBtn").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}

imagen=document.querySelector('.imagen');
setTimeout(() => {
  imagen.classList.add('cerrar')
}, 3000);

setTimeout(() => {
  imagen.setAttribute("src", "imagenes/portada1.png");
  imagen.classList.add('abrir');
  document.querySelector('.color-mini-titulo').innerHTML="Nuestro"
  document.querySelector('.color-titulo').innerHTML="AVANCE"
}, 5000);