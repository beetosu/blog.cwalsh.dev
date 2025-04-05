function handleMouseEnter(infoClass) {
    const infoElements = document.getElementsByClassName(`info ${infoClass}`);
    for (const element of infoElements) {
        element.classList.remove('inactive');
        element.classList.add('active');
    }
}

function handleMouseLeave(infoClass) {
    const infoElements = document.getElementsByClassName(`info ${infoClass}`);
    for (const element of infoElements) {
        element.classList.remove('active');
        element.classList.add('inactive');
    }
}

function buildEventListeners(guyId, infoClass) {
    const guy = document.getElementById(guyId);
    // Hovering over = active
    guy.addEventListener('mouseenter', () => {
        handleMouseEnter(infoClass);
    });
    
    // No longer hovering = inactive
    guy.addEventListener('mouseleave', () => {
        handleMouseLeave(infoClass);
    });
    
    // Tabbed in = active
    guy.addEventListener('focusin', () => {
        handleMouseEnter(infoClass);
    })
    
    // No longer tabbed in = inactive
    guy.addEventListener('focusout', () => {
        handleMouseLeave(infoClass);
    });
}

buildEventListeners('about-guy', 'about');