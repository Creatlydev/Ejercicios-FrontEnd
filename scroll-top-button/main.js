let scrollBtn = document.getElementById('btn')
window.onscroll = () => {
  let scrollTopPos = document.documentElement.scrollTop

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  let scrollValue = Math.round((scrollTopPos * 100) / calcHeight)

  scrollTopPos > 200
    ? scrollBtn.classList.add('show')
    : scrollBtn.classList.remove('show')

  scrollBtn.style.background = `conic-gradient(
    #eb621e ${scrollValue}%, #ccc ${scrollValue}% 
  )`
}

scrollBtn.onclick = () => {
  document.documentElement.scrollTo({
    behavior: 'smooth',
    top: 0
  })
}

// Obtener todas las palabras con coincidan con HTML || CSS || JAVASCRIPT, para
// luego envolver cada una de esas palabras en un etiqueta span
// CASE INSENSITIVE: Osea que le de igual si estan en mayusculas o minusculas
// Solo de las palabras dentro de las etiquetas <p>
window.addEventListener('DOMContentLoaded', () => {
  const paragraphs = document.querySelectorAll('p')
  const wordsToWrap = ['HTML', 'CSS', 'JavaScript']
  const regex = new RegExp(`\\b(${wordsToWrap.join('|')})\\b`, 'gi')

  paragraphs.forEach((p) => {
    p.innerHTML = p.innerHTML.replace(
      regex,
      (match) =>
        `<span class="${match.toLowerCase()}">${match}</span>`
    )
  })
})



// CODIGO alternativo sin usar expresioes regulares
// window.addEventListener('DOMContentLoaded', () => {
//   const paragraphs = document.querySelectorAll('p')
//   const wordsToWrap = ['HTML', 'CSS', 'JavaScript']

//   paragraphs.forEach((p) => {
//     wordsToWrap.forEach((word) => {
//       let text = p.textContent
//       let index = text.indexOf(word)

//       while (index !== -1) {
//         // Crear el elemento span con la clase correspondiente
//         const span = document.createElement('span')
//         span.textContent = word
//         span.classList.add(word.toLowerCase()) // Añadir clase con nombre en minúsculas

//         // Crear los nodos de texto antes y después de la palabra
//         const before = document.createTextNode(text.substr(0, index))
//         const after = document.createTextNode(text.substr(index + word.length))

//         // Limpiar el contenido original del párrafo y añadir los nuevos nodos
//         p.innerHTML = ''
//         p.appendChild(before)
//         p.appendChild(span)
//         p.appendChild(after)

//         // Buscar la siguiente coincidencia
//         index = text.indexOf(word, index + word.length)
//       }
//     })
//   })
// })
