function transitionColor(color, article) {
    document.body.className = `transition-${color}`;
    setTimeout((() => window.location.assign(`/${article}/`)), 500);
}