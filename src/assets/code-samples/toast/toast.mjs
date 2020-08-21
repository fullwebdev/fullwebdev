import { showToast } from 'std:elements/toast';

document.querySelector('#show-toast').addEventListener('click', () => {
    showToast(`🍞 Wow, that's a big toast!`, {
        type: 'success',
        duration: 3000
    });
});
