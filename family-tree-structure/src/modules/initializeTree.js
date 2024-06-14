import { data } from "/dataJson.js";
import { drawDataFromJson } from "./drawNodes.js";


const treeRootNode = document.getElementById('tree').children[0];
let nodeIdentifiers = {}

const initializeTree = () => {
    drawDataFromJson(data[0], treeRootNode);
};

export { initializeTree, treeRootNode, nodeIdentifiers };
