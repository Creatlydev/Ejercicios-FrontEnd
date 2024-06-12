import { data } from "./dataJson.js";

// Elemento 'ul' raiz del arbol 
const treeRootNode = document.getElementById('tree').children[0];

// 
let nodeIdentifiers = {
    1: { relation: 'Yo', element: treeRootNode.children[0] }
};

const initializeTree = () => {
    drawDataFromJson(data[0], treeRootNode);
};

/**
 * Dibuja los nodos de acuerdo del JSON en el rootNode
 * @param {*} nodeData: objeto que contiene info del nodo del JSON
 * @param {*} rootNode: elemento raiz donde se dibujara los nuevos nodos
 */
function drawDataFromJson(nodeData, rootNode) {
    // Dibujar los siblings
    nodeData.siblings.forEach(siblingNode => {
        drawNodes(siblingNode, rootNode);
    });

    // Si hay parents crea un nuevo nivel 'UL'
    if (nodeData.parents.length) {
        let newLevelRootNode = drawNewLevel(nodeData);
        // Dibujar los parents
        nodeData.parents.forEach(parentNode => {
            drawNodes(parentNode, newLevelRootNode);
        });
    }
}

/**
 * 
 * Mismos @params de la funcion @drawDataFromJson
 */
function drawNodes(childNodeData, rootNode) {
    insertChild(childNodeData.position, createNewChild(childNodeData.name, childNodeData.relation, childNodeData.img, childNodeData.order), rootNode);
    if (childNodeData.parents.length) {
        drawDataFromJson(childNodeData, rootNode);
    }
}

/**
 * Dibuja un nuevo nivel 
 * @param {*} nodeData  objeto que contiene info del nodo del JSON
 * @returns nuevo nivel creado 'UL'
 */
function drawNewLevel(nodeData) {
    let newLevelRootNode = createNewLevel(nodeIdentifiers[nodeData.order].element);
    return newLevelRootNode;
}

/**
 * 
 * @param {*} name: nombre que se mostrar en el nodo
 * @param {*} relation: relation del nodo dentro del arbol genealogico
 * @param {*} image: image para mostrar en el nodo
 * @param {*} order: su numero de orden en el arbol, se acumula de uno cada que se crea un nuevo Child
 * @returns nuevo elemento hijo
 */
function createNewChild(name, relation, image, order) {
    let childElement = document.createElement('li');
    childElement.classList.add('tree__child');

    let treeNodeLink = document.createElement('a');
    treeNodeLink.setAttribute('href', '#');
    treeNodeLink.classList.add('tree__node');

    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', `images/${image}.jpg`);

    let spanElement = document.createElement('span');
    spanElement.innerText = name;

    treeNodeLink.append(imgElement, spanElement);
    childElement.append(treeNodeLink);

    // Agregar identificador de este nuevo nodo creado
    nodeIdentifiers[order] = { relation: relation, element: childElement };

    return childElement;
}

/**
 * 
 * @param {*} nodeElement: elemento donde se agregara el nuevo nivel 'UL'
 * @returns el nuevo nivel creado 'UL'
 */
function createNewLevel(nodeElement) {
    let newLevel = document.createElement('ul');
    newLevel.classList.add('tree__lvl');

    nodeElement.append(newLevel);

    return newLevel;
}

/**
 * Insertar elemento creado al arbol
 * @param {*} position: puede ser [beforeend | afterbegin | afterend | beforebegin]
 * @param {*} childElement: elemento creado listo para insertar al DOM 
 * @param {*} rootNode: elemento del DOM donde se insertara childElement
 */
const insertChild = (position, childElement, rootNode) => {
    rootNode.insertAdjacentElement(position, childElement);
};

// Iniciar el árbol
initializeTree();
