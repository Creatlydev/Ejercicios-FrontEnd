import { data } from "/dataJson.js";
import { drawDataFromJson } from "./drawNodes.js";


const treeRootNode = document.getElementById('tree').children[0];
let nodeIdentifiers = {}
let positionsObjet = {
    UP: 'afterbegin',
    RIGHT: 'afterend',
    DOWN: 'beforeend',
    LEFT: 'beforebegin'
}

const initializeTree = () => {
    drawDataFromJson(data[0], treeRootNode);
};

export { initializeTree, nodeIdentifiers, positionsObjet };
