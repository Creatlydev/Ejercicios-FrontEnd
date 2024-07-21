import { createNewLevel, insertNewElement } from './createElements.js'
import { nodeIdentifiers } from './initializeTree.js'

/**
 * Dibuja los elementos a partir de un objeto JSON
 * @param {*} nodeObjetData : Objeto {} con la informacion del nodo ubicado en el JSON
 * @param {*} rootNode : nodo raiz del objeto JSON
 */
function drawDataFromJson(nodeObjetData, rootNode) {
  if (nodeObjetData.order === 1) {
    // Solo se ejecuta una vez para dibujar el nodo raiz del JSON
    insertNewElement(nodeObjetData, rootNode)
  }

  if (nodeObjetData.parents.length) {
    let newRootNode = createNewLevel(
      nodeIdentifiers[nodeObjetData.order].element
    ) // Nuevo nodo raiz
    nodeObjetData.parents.forEach((parentNode) => {
      drawNode(parentNode, newRootNode)
    })
  }
}

/**
 *
 * @param {*} nodeObjectData : Objeto {} con la informacion del nodo ubicado en el JSON
 * @param {*} rootNode : nodo raiz
 */
function drawNode(nodeObjectData, rootNode) {
  insertNewElement(nodeObjectData, rootNode)
  if (nodeObjectData.parents.length) {
    drawDataFromJson(nodeObjectData, rootNode)
  }
}

export { drawDataFromJson, drawNode }
