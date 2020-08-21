function setBadge(...args) {
    if (navigator.setExperimentalAppBadge) {
        navigator.setExperimentalAppBadge.apply(navigator, args);
    } else if (window.ExperimentalBadge) {
        window.ExperimentalBadge.set.apply(null, args);
    }
}
