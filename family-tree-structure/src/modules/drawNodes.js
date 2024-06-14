import { insertChild } from "./createElements.js";

function drawDataFromJson(nodeData, rootNode) {
    if (nodeData.order === 1) {
        // Solo se ejecuta una vez para dibujar el nodo raiz del JSON
        insertChild(nodeData, rootNode);
    }

    nodeData.adyacent.forEach(siblingNode => {
        drawNode(siblingNode, rootNode);
    });

    if (nodeData.laterNodes.length) {
        let newLevelRootNode = drawNewLevel(nodeData);
        nodeData.laterNodes.forEach(parentNode => {
            drawNode(parentNode, newLevelRootNode);
        });
    }
}

function drawNode(childNodeData, rootNode) {
    insertChild(childNodeData, rootNode);
    if (childNodeData.laterNodes.length) {
        drawDataFromJson(childNodeData, rootNode);
    }
}



export { drawDataFromJson, drawNode };
