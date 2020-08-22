import { installRouter } from 'pwa-helpers/router';

export const navigate = (path) => {
    const page = path === '/' ? 'home' : path.slice(1);

    switch (page) {
        case 'home':
            import('./home-view.js');
            break;
        case 'details':
            import('./details-view.js');
            break;
        default:
            page = 'home';
            import('./home-view.js');
    }
};

installRouter((location) => navigate(decodeURIComponent(location.pathname)));
