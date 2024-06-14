import { addNewNode } from "./utils.js";

function addEventToBtn(btnElement) {
    btnElement.addEventListener('click', (e) => {
        addNewNode(e.target.parentNode, e.target.parentNode.parentNode);
    });
}

function addEventToBtn2(elements) {
    elements.forEach(element => {
        document.querySelector(element).addEventListener('click', (e) => {
            addNewNode(e.target.parentNode, e.target.parentNode.parentNode);
        });
    });
}

export { addEventToBtn, addEventToBtn2 };
