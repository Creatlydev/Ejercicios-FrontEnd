let scrollBtn = document.getElementById('btn');
window.onscroll = () => {
  let scrollTopPos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((scrollTopPos * 100) / calcHeight);

  scrollTopPos > 200
    ? scrollBtn.classList.add('show')
    : scrollBtn.classList.remove('show');

  scrollBtn.style.background = `conic-gradient(
    #eb621e ${scrollValue}%, #ccc ${scrollValue}% 
  )`;
};

scrollBtn.onclick = () => {
  document.documentElement.scrollTo({
    behavior: 'smooth',
    top: 0,
  });
};

// Obtener todas las palabras con coincidan con HTML || CSS || JAVASCRIPT, para
// luego envolver cada una de esas palabras en un etiqueta span
// CASE INSENSITIVE: Osea que le de igual si estan en mayusculas o minusculas
// Solo de las palabras dentro de las etiquetas <p>
window.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p');
  const wordsToWrap = ['HTML', 'CSS', 'JavaScript'];
  const regex = new RegExp(`\\b(${wordsToWrap.join('|')})\\b`, 'gi');

  paragraphs.forEach((p) => {
    p.innerHTML = p.innerHTML.replace(
      regex,
      (match) =>
        `<span class="${match.toLowerCase()}">${match.toLowerCase()}</span>`
    )
  });
});
