import { createNewLevel, insertChild } from "./createElements.js";
import { nodeIdentifiers, positionsObjet } from "./initializeTree.js";

function verifyExistAdyacentLevel(nodoSelected) {
    return nodoSelected.nextElementSibling;
}

function addNewNode(nodoSelected, childNode, position) {
    console.log(nodoSelected)
    let lvl
    let order = Object.keys(nodeIdentifiers)[Object.keys(nodeIdentifiers).length - 1];
    if (!['RIGHT', 'LEFT'].includes(position)) {
        lvl = verifyExistAdyacentLevel(nodoSelected);
        order = parseInt(order) + 1;

        if (!lvl) {
            lvl = createNewLevel(childNode);
        }
    } else {
        lvl = nodoSelected
    }
    insertChild(
        {
            name: 'Zoe',
            relation: 'Unknow',
            position: positionsObjet[position],
            img: 8,
            order: order
        }, lvl, position
    );
}

export { verifyExistAdyacentLevel, addNewNode };
