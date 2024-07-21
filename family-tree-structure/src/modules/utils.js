import { createNewLevel, insertNewElement } from './createElements.js'
import { nodeIdentifiers, positionsObjet } from './initializeTree.js'

function verifyExistAdyacentLevel(nodoSelected) {
  return nodoSelected.nextElementSibling
}

/**
 *
 * @param {*} treeNode : nodo donde se encuentra el boton donde se hecho click para agregar un nuevo elemento
 * @param {*} referenceNode : Este nodo será usado como referencia para la inserción.
 * @param {*} btnPosition : position del boton en el la interfaz del nodo [UP | RIGHT | LEFT | DOWN]
 */
function addNewElement(treeNode, referenceNode, btnPosition) {
  let newLevel
  let order =
    Object.keys(nodeIdentifiers)[Object.keys(nodeIdentifiers).length - 1]
  order = parseInt(order) + 1

  // Comprueba si el nodo a agregar no es adyacente de ser asi, no es necesario crear uno nuevo nivel newLevel
  if (!['LEFT', 'RIGHT'].includes(btnPosition)) {
    newLevel = verifyExistAdyacentLevel(treeNode)
    if (!newLevel) {
      newLevel = createNewLevel(referenceNode)
    }
  } else {
    newLevel = referenceNode
  }

  insertNewElement(
    {
      name: [
        'Isidro',
        'Beltran',
        'Adriana',
        'Celia',
        'Hugo',
        'Elena',
        'Leandro',
        'Ramiro',
        'Ines',
        'Rafael'
      ][Math.floor(Math.random() * 10)],
      relation: 'Unknow',
      position: positionsObjet[btnPosition],
      img: 'usuario.png',
      order: order
    },
    newLevel,
    btnPosition
  )
}

export { verifyExistAdyacentLevel, addNewElement }
