import { handleNodeClick } from "./classTogles.js";
import { addNewElement } from "./utils.js";

/**
 * 
 * @param {*} btnElement : Buton que ha sido clickeado
 * @param {*} btnPosition : position del boton en el la interfaz del nodo [UP | RIGHT | LEFT | DOWN]
 */
function addEventToBtn(btnElement, btnPosition) {
    btnElement.addEventListener('click', (e) => {
        e.stopPropagation() // Este metodo evita que el evento se propage hacia los elementos padre
        addNewElement(e.target.closest('.tree__node'), e.target.closest('.tree__child, .tree__adyacent-child'), btnPosition);
    });
}

function addClickEventToNode(element) {
    element.addEventListener('click', handleNodeClick);
}

export { addEventToBtn, addClickEventToNode };
