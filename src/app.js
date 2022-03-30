// Element sur lesquels appliquer un effet parallax
const img = document.getElementById('img');
const largeCircle = document.getElementById('large');
const smallCircle = document.getElementById('small');

const parralax = (e) => {
  const screenX = window.innerWidth / 2;
  const screenY = window.innerHeight / 2;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const pageX = mouseX - screenX;
  const pageY = mouseY - screenY;

  smallCircle.style.transform = `translate(${0 - pageX / 10}%, ${0 - pageY / 10}%)`
  img.style.transform = `translate(${0 - pageX / 200}%, ${0 - pageY / 200}%)`
  largeCircle.style.transform = `translate(${0 - pageX / 300}%, ${0 - pageY / 300}%)`
}

document.addEventListener('mousemove', parralax);