const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
mediaQuery.addEventListener('change', () => {
    console.log(mediaQuery.media, mediaQuery.matches);
    // Stop JS-based animations.
});
