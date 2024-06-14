import { handleNodeClick } from "./classTogles.js";
import { addNewNode } from "./utils.js";

function addEventToBtn(btnElement, position) {
    btnElement.addEventListener('click', (e) => {
        e.stopPropagation() // Este metodo evita que el evento se propage hacia los elementos padre
        addNewNode(e.target.parentNode, e.target.parentNode.parentNode, position);
    });
}

function addClickEventToNode(element) {
    element.addEventListener('click', handleNodeClick);
}

export { addEventToBtn, addClickEventToNode };
