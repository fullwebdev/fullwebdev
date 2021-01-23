const badge = window.Badge || window.ExperimentalBadge;

if (badge) {
    badge.clear();
}

let counter = 0;

// ...

badge.set(++counter);
