var botonMostrar = document.getElementById('logo-chat');
var formulario = document.getElementById('chatbot-form');
var chatbot = document.getElementById('container-chatbot');

botonMostrar.addEventListener('click', function () {
  if(formulario.style.display === 'none') {
    formulario.style.display = 'flex';
    chatbot.style.height = '1100px'
  } else {
    formulario.style.display = 'none';
    chatbot.style.height = '400px'
  }
});