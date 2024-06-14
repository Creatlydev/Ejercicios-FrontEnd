import { createNewLevel, insertChild } from "./createElements.js";
import { nodeIdentifiers } from "./initializeTree.js";

function verifyExistAdyacentLevel(nodoSelected) {
    return nodoSelected.nextElementSibling;
}

function addNewNode(nodoSelected, childNode) {
    let lvl = verifyExistAdyacentLevel(nodoSelected);
    let order = Object.keys(nodeIdentifiers)[Object.keys(nodeIdentifiers).length - 1];
    order = parseInt(order) + 1;

    if (!lvl) {
        lvl = createNewLevel(childNode);
    }
    insertChild(
        {
            name: 'Zoe',
            relation: 'Unknow',
            position: 'beforeend',
            img: 8,
            order: order
        }, lvl
    );
}

export { verifyExistAdyacentLevel, addNewNode };
