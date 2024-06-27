import { modalDialog, nodeIdentifiers } from "./initializeTree.js";
import { addClickEventToNode, addEventToBtn, openModal } from "./eventHandlers.js";
import { diamondPlus } from "/icons.js";

function createNewElement(name, relation, image, order, btnPosition) {
    let childNode = document.createElement("li");

    childNode.classList.add('tree__child')
    let cloneTemplate = document
        .getElementById("template-node")
        .content.cloneNode(true);
    let treeNode = cloneTemplate.querySelector(".tree__node");
    let imgNode = cloneTemplate.querySelector("img");
    imgNode.setAttribute("src", `images/${image}.jpg`);
    imgNode.setAttribute("alt", `Foto de ${name}`);
    let textNode = cloneTemplate.querySelector("span");
    textNode.innerText = name;

    let btnDown = cloneTemplate.querySelector(".btn-add--down");
    btnDown.innerHTML = diamondPlus;

    openModal(modalDialog, btnDown)
    // Evento click a nodos
    addClickEventToNode(treeNode)

    childNode.append(treeNode);
    nodeIdentifiers[order] = { relation: relation, element: childNode };

    return childNode;
}

/**
 * 
 * @param {*} referenceNode : Nodo de referencia donde se creara el nuevo nivel `UL`
 * @returns nuevo nivel creado [element]
 */
function createNewLevel(referenceNode) {
    let newLevel = document.createElement("ul");
    newLevel.classList.add("tree__lvl");
    referenceNode.append(newLevel);
    return newLevel;
}

/**
 * 
 * @param {*} nodeObjectData : Objeto {} con la informacion del nodo a crear  
 * @param {*} referenceNode : Este nodo será usado como referencia para la inserción.
 * @param {*} btnPosition : position del boton en el la interfaz del nodo [UP | RIGHT | LEFT | DOWN] 
 */
const insertNewElement = (nodeObjectData, referenceNode, btnPosition) => {

    referenceNode.insertAdjacentElement(
        nodeObjectData.position,
        createNewElement(
            nodeObjectData.name,
            nodeObjectData.relation,
            nodeObjectData.img,
            nodeObjectData.order,
            btnPosition
        )
    );
};

export { createNewElement, createNewLevel, insertNewElement };
