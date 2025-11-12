// Suave desplazamiento desde la portada
document.querySelector('.btn').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#contenido').scrollIntoView({ behavior: 'smooth' });
});

// Sistema de pestañas (tabs)
const buttons = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Quitar la clase 'active' de todos los botones y secciones
    buttons.forEach(b => b.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    // Activar el botón y contenido correspondiente
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});
