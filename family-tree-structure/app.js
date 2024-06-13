import { data } from "./dataJson.js";
import { diamondPlus } from "./icons.js";

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
    insertChild(childNodeData, rootNode);
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
    if (!nodeData.order) {
        let newLevelRootNode = createNewLevel(nodeData)
        return newLevelRootNode
    }
    let newLevelRootNode = createNewLevel(nodeIdentifiers[nodeData.order].element);
    return newLevelRootNode;
}

function addEventToBtn(btnElement) {
    btnElement.addEventListener('click', (e) => {
        addNewNodo(e.target.parentNode, e.target.parentNode.parentNode)
    })
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
    let childNode = document.createElement('li')
    childNode.classList.add('tree__child')
    let cloneTemplate = document.getElementById('template-node').content.cloneNode(true)
    let treeNode = cloneTemplate.querySelector('.tree__node')
    let imgNode = cloneTemplate.querySelector('img')
    imgNode.setAttribute('src', `images/${image}.jpg`)
    imgNode.setAttribute('alt', `Foto de ${name}`)
    let textNode = cloneTemplate.querySelector('span')
    textNode.innerText = name;
    // Buttons
    let btnUp = cloneTemplate.querySelector('.btn-add--up')
    btnUp.innerHTML = diamondPlus
    let btnRight = cloneTemplate.querySelector('.btn-add--right')
    btnRight.innerHTML = diamondPlus
    let btnDown = cloneTemplate.querySelector('.btn-add--down')
    btnDown.innerHTML = diamondPlus
    let btnLeft = cloneTemplate.querySelector('.btn-add--left')
    btnLeft.innerHTML = diamondPlus

    addEventToBtn(btnUp)
    addEventToBtn(btnRight)
    addEventToBtn(btnDown)
    addEventToBtn(btnLeft)

    childNode.append(treeNode)

    nodeIdentifiers[order] = { relation: relation, element: childNode };

    return childNode;
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
 * @param {*} rootNode: elemento del DOM donde se insertara childElement
 */
const insertChild = (childNode, rootNode) => {
    rootNode.insertAdjacentElement(childNode.position, createNewChild(childNode.name, childNode.relation, childNode.img, childNode.order));
};

// Iniciar el árbol
initializeTree();




// ============================================
// Eventos para agregar nuevo nodos al dar clic
// en los distintos lados de un nodo existente
// =============================================
function addEventToBtn2(elements) {
    elements.forEach(element => {
        document.querySelector(element).addEventListener('click', (e) => {
            addNewNodo(e.target.parentNode, e.target.parentNode.parentNode)
        })
    })
}


addEventToBtn2(['.btn-add--down'])


function verifyExistAdyacentLevel(nodoSelected) {
    return nodoSelected.nextElementSibling
}

function addNewNodo(nodoSelected, childNode) {
    let lvl = verifyExistAdyacentLevel(nodoSelected)
    let order = Object.keys(nodeIdentifiers)[Object.keys(nodeIdentifiers).length - 1]
    order = parseInt(order) + 1

    if (!lvl) {
        lvl = drawNewLevel(childNode)
    }
    insertChild(
        {
            name: 'Zoe',
            relation: 'Unknow',
            position: 'beforeend',
            img: 8,
            order: order
        }, lvl
    )
}