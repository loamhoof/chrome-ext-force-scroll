;(() => {
    const nodes = document.querySelectorAll(':hover');

    for (let node of nodes) {
        do {
            node.style.overflowY = 'auto';
        } while (node = node.parentElement);
    }
})();
