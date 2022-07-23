const enlace = document.createElement('A');
enlace.href = 'http://google.com';
enlace.textContent = 'Nuevo enlace';
enlace.classList.add('navegacion__enlace');

const navegacion = document.querySelector('.navegacion');
// navegacion.appendChild(enlace);
// navegacion.insertBefore(enlace, navegacion.childNodes[1]);


window.addEventListener('load', () => console.log("eapepe") )
const sarasa = document.getElementById('sarasa');