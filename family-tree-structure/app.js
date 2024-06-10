import { data } from "./dataJson.js"

const nodeTreetRoot = document.getElementById('tree').children[0]

let identifiersNodes = {
    1: { relation: 'Yo', identifier: nodeTreetRoot.children[0] }
}



const initTree = () => {
    drawDataFromJson(data[0], nodeTreetRoot)
    // console.log(identifiersNodes)
}


function drawDataFromJson(node, nodeRoot) {
    // Dibuja los siblings
    node.siblings.forEach(item => {
        drawNodes(node, item, nodeRoot)
    })

    // Draw parents
    if (node.parents.length) {
        let nodeRoot = drawNewLevel(node)
        node.parents.forEach(item => {
            drawNodes(node, item, nodeRoot)
        })
    }

}

function drawNodes(node, item, nodeRoot) {
        insertChild(item.position, createChildNode(item.name, item.relation, item.img, item.order), nodeRoot)
        // Comprobar si el item tiene parents
        if (item.parents.length) {
            drawNewLevel(item)
            drawDataFromJson(item)
        }
}

function drawNewLevel(item) {
    let nodeRoot = createNewLevelTree(identifiersNodes[item.order].identifier)
    return nodeRoot
}


function createChildNode(name, relation, image, order) {

    let tree__child = document.createElement('li')
    tree__child.classList.add('tree__child')

    let tree__node = document.createElement('a')
    tree__node.setAttribute('href', '#')
    tree__node.classList.add('tree__node')
    let img = document.createElement('img')
    img.setAttribute('src', `images/${image}.jpg`)
    let span = document.createElement('span')
    span.innerText = name

    tree__node.append(img, span)

    tree__child.append(tree__node)

    // Agregar identificador de este nuevo nodo creado
    identifiersNodes[order] = { relation: relation, identifier: tree__child }

    return tree__child
}

function createNewLevelTree(node) {
    let tree__lvl = document.createElement('ul')
    tree__lvl.classList.add('tree__lvl')

    node.append(tree__lvl)

    return tree__lvl
}

const insertChild = (position, child, nodeRoot) => {
    nodeRoot.insertAdjacentElement(
        position,
        child
    )
}

const hasChildNodes = (node = data[0]) => {
    return node.siblings.length ? node.siblings : node.parents.length ? node.parents : false
}

// Start tree
initTree()