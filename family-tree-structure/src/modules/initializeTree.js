import { data } from "/dataJson.js";
import { drawDataFromJson } from "./drawNodes.js";

const treeRootNode = document.getElementById('tree').children[0];
let nodeIdentifiers = {
    1: { relation: 'Yo', element: treeRootNode.children[0] }
};

const initializeTree = () => {
    drawDataFromJson(data[0], treeRootNode);
};

export { initializeTree, treeRootNode, nodeIdentifiers };
