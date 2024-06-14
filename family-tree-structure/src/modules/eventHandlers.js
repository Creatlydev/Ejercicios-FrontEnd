import { addNewNode } from "./utils.js";

function addEventToBtn(btnElement) {
    btnElement.addEventListener('click', (e) => {
        addNewNode(e.target.parentNode, e.target.parentNode.parentNode);
    });
}

export { addEventToBtn };
