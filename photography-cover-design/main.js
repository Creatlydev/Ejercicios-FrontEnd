// Element body
const body = document.body

// TOGGLE MENU
const navList = document.querySelector('.js-nav')
const btnMenu = document.querySelector('.js-btn-menu')

btnMenu.addEventListener('click', (event) => {
  navList.classList.toggle('is-visible')
  body.classList.toggle('no-scroll')
})

// SPLIPTING TEXT
const textCircle = document.querySelector('.js-circle-text')
textCircle.innerHTML = textCircle.textContent
  .split('')
  .map((letter, pos) => `<span style='--pos: ${pos};'>${letter}</span>`)
  .join('')
