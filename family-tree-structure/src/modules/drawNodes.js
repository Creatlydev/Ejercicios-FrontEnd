import { insertChild } from "./createElements.js";

function drawDataFromJson(nodeData, rootNode) {
    nodeData.siblings.forEach(siblingNode => {
        drawNodes(siblingNode, rootNode);
    });

    if (nodeData.parents.length) {
        let newLevelRootNode = drawNewLevel(nodeData);
        nodeData.parents.forEach(parentNode => {
            drawNodes(parentNode, newLevelRootNode);
        });
    }
}

function drawNodes(childNodeData, rootNode) {
    insertChild(childNodeData, rootNode);
    if (childNodeData.parents.length) {
        drawDataFromJson(childNodeData, rootNode);
    }
}



export { drawDataFromJson, drawNodes };
