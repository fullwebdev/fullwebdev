scroller.append(...newChildren);

scroller.addEventListener('rangechange', (event) => {
    if (event.first === 0) {
        console.log('rendered first item.');
    }
    if (event.last === scroller.children.length - 1) {
        console.log('rendered last item.');
        // Perhaps you would want to load more data for display!
    }
});
