import { createNewLevel, insertNewElement } from "./createElements.js";
import { nodeIdentifiers } from "./initializeTree.js";

/**
 * Dibuja los elementos a partir de un objeto JSON
 * @param {*} nodeObjetData : Objeto {} con la informacion del nodo ubicado en el JSON
 * @param {*} rootNode : nodo raiz del objeto JSON
 */
function drawDataFromJson(nodeObjetData, rootNode) {
    if (nodeObjetData.order === 1) {
        // Solo se ejecuta una vez para dibujar el nodo raiz del JSON
        insertNewElement(nodeObjetData, rootNode);
    }

    nodeObjetData.adyacent.forEach(adyacentNode => {
        drawNode(adyacentNode, rootNode);
    });

    if (nodeObjetData.front.length) {
        let newRootNode = createNewLevel(nodeIdentifiers[nodeObjetData.order].element); // Nuevo nodo raiz
        nodeObjetData.front.forEach(frontNode => {
            drawNode(frontNode, newRootNode);
        });
    }
}

/**
 * 
 * @param {*} nodeObjectData : Objeto {} con la informacion del nodo ubicado en el JSON
 * @param {*} rootNode : nodo raiz
 */
function drawNode(nodeObjectData, rootNode) {
    insertNewElement(nodeObjectData, rootNode);
    if (nodeObjectData.front.length) {
        drawDataFromJson(nodeObjectData, rootNode);
    }
}



export { drawDataFromJson, drawNode };
