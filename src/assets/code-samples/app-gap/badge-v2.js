// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function setBadge(...args) {
    if (navigator.setExperimentalAppBadge) {
        navigator.setExperimentalAppBadge.apply(navigator, args);
    } else if (window.ExperimentalBadge) {
        window.ExperimentalBadge.set.apply(null, args);
    }
}

// Wrapper to support first and second origin trial
// See https://web.dev/badging-api/ for details.
function clearBadge() {
    if (navigator.clearExperimentalAppBadge) {
        navigator.clearExperimentalAppBadge();
    } else if (window.ExperimentalBadge) {
        window.ExperimentalBadge.clear();
    }
}
