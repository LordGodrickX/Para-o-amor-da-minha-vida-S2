function abrirRosa() {
  const rosa = document.querySelector('.rose-container');
  const poema = document.getElementById('poema');
  const musica = document.getElementById('musica');

  rosa.classList.add('aberta');
  poema.classList.add('visivel');

  if (musica.paused) {
    musica.play().catch(() => {
      alert("Clique para permitir que a música toque.");
    });
  }
}
