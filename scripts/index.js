function handleMouseEnter(infoClass, sprite, guyElement) {
    const infoElements = document.getElementsByClassName(`info ${infoClass}`);
    for (const element of infoElements) {
        element.classList.remove('inactive');
        element.classList.add('active');
    }

    if (sprite && guyElement) {
        guyElement.getElementsByTagName('img')[0].src = `assets/${sprite}.gif`;
    }
}

function handleMouseLeave(infoClass, sprite, guyElement) {
    const infoElements = document.getElementsByClassName(`info ${infoClass}`);
    for (const element of infoElements) {
        element.classList.remove('active');
        element.classList.add('inactive');
    }

    if (sprite && guyElement) {
        guyElement.getElementsByTagName('img')[0].src = `assets/${sprite}.gif`;
    }
}

function buildEventListeners(guyId, infoClass, activeSprite, inactiveSprite) {
    const guy = document.getElementById(guyId);
    // Hovering over = active
    guy.addEventListener('mouseenter', () => {
        handleMouseEnter(infoClass, activeSprite, guy);
    });
    
    // No longer hovering = inactive
    guy.addEventListener('mouseleave', () => {
        handleMouseLeave(infoClass, inactiveSprite, guy);
    });
    
    // Tabbed in = active
    guy.addEventListener('focusin', () => {
        handleMouseEnter(infoClass, activeSprite, guy);
    })
    
    // No longer tabbed in = inactive
    guy.addEventListener('focusout', () => {
        handleMouseLeave(infoClass, inactiveSprite, guy);
    });
}

buildEventListeners('about-guy', 'about');
buildEventListeners('posts-guy', 'posts', 'posts-guy-active', 'posts-guy-inactive');

const hasTouchSupport = 'ontouchstart' in window || navigator.maxTouchPoints;

if (hasTouchSupport) {
    // For now, just make all of the guys active for mobile.
    // Eventually, it would be fun to have some scroll stuff here, but that's
    // hard :/
    handleMouseEnter('about');

    const postGuy = document.getElementById('posts-guy');
    handleMouseEnter('posts', 'posts-guy-active', postGuy);
}