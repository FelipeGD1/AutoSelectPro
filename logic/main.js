var botonMostrar = document.getElementById('logo-chat');
var formulario = document.getElementById('chatbot-form');
  
botonMostrar.addEventListener('click', function () {
  if(formulario.style.display === 'none') {
    formulario.style.display = 'flex';
  } else {
    formulario.style.display = 'none';
  }
});
