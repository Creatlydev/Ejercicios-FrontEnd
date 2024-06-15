import { nodeIdentifiers } from "./initializeTree.js";
import { addClickEventToNode, addEventToBtn } from "./eventHandlers.js";
import { diamondPlus } from "/icons.js";

function createNewElement(name, relation, image, order, btnPosition) {
    let childNode = document.createElement("li");
    childNode.classList.add(
        "tree__child",
        btnPosition === "DOWN"
            ? "tree__simple-child"
            : btnPosition === "RIGHT" || btnPosition === "LEFT"
                ? "tree__adyacent__child"
                : "-"
    );
    let cloneTemplate = document
        .getElementById("template-node")
        .content.cloneNode(true);
    let treeNode = cloneTemplate.querySelector(".tree__node");
    let imgNode = cloneTemplate.querySelector("img");
    imgNode.setAttribute("src", `images/${image}.jpg`);
    imgNode.setAttribute("alt", `Foto de ${name}`);
    let textNode = cloneTemplate.querySelector("span");
    textNode.innerText = name;

    let btnUp = cloneTemplate.querySelector(".btn-add--up");
    btnUp.innerHTML = diamondPlus;
    let btnRight = cloneTemplate.querySelector(".btn-add--right");
    btnRight.innerHTML = diamondPlus;
    let btnDown = cloneTemplate.querySelector(".btn-add--down");
    btnDown.innerHTML = diamondPlus;
    let btnLeft = cloneTemplate.querySelector(".btn-add--left");
    btnLeft.innerHTML = diamondPlus;

    addEventToBtn(btnUp, "UP");
    addEventToBtn(btnRight, "RIGHT");
    addEventToBtn(btnDown, "DOWN");
    addEventToBtn(btnLeft, "LEFT");

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
