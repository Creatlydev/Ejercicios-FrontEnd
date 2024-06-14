function toggleClass(element, className) {
    element.classList.toggle(className);
}

function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}

function handleNodeClick(event) {
    const node = event.currentTarget;
    const activeClass = 'tree__node--active';

    if (event.ctrlKey || event.metaKey) {
        toggleClass(node, activeClass)
    } else {
        if (!node.classList.contains(activeClass)) {
            // Remover la clase de todos los nodos activos
            document.querySelectorAll(`.${activeClass}`).forEach(node => {
                removeClass(node, activeClass);
            });
        }

        // Agregar o remover la clase al nodo clickeado
        toggleClass(node, activeClass);
    }

}

export { toggleClass, addClass, removeClass, handleNodeClick };
