import { nodeIdentifiers } from "./initializeTree.js";
import { addClickEventToNode, addEventToBtn } from "./eventHandlers.js";
import { diamondPlus } from "/icons.js";

function createNewChild(name, relation, image, order, position) {
    let childNode = document.createElement("li");
    childNode.classList.add(
        "tree__child",
        position === "DOWN"
            ? "tree__simple-child"
            : position === "RIGHT" || position === "LEFT"
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

function createNewLevel(nodeData) {
    // Esta condicion evalua si el parametro nodeData vienen de DATAJSON.js
    if (nodeData.order) {
        // solo se ejecuta cuando se este dibujando datos del objeto DATAJSON.js
        nodeData = nodeIdentifiers[nodeData.order].element;
    }

    let newLevel = document.createElement("ul");
    newLevel.classList.add("tree__lvl");
    nodeData.append(newLevel);
    return newLevel;
}

const insertChild = (childNode, rootNode, position) => {
    
    rootNode = position === 'RIGHT' || position === 'LEFT' ? rootNode.parentNode : rootNode

    rootNode.insertAdjacentElement(
        childNode.position,
        createNewChild(
            childNode.name,
            childNode.relation,
            childNode.img,
            childNode.order,
            position
        )
    );
};

export { createNewChild, createNewLevel, insertChild };
