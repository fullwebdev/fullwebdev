// ?title=hello

window.addEventListener('DOMContentLoaded', () => {
    const parsedUrl = new URL(window.location);

    console.log('Title shared: ' + parsedUrl.searchParams.get('title'));
    console.log('URL shared: ' + parsedUrl.searchParams.get('url'));
});
