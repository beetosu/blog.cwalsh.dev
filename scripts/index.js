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

const hasTouchSupport = 'ontouchstart' in window;

if (hasTouchSupport) {
    // For now, just make all of the guys active for mobile.
    // Eventually, it would be fun to have some scroll stuff here, but that's
    // hard :/
    handleMouseEnter('about');

    const postGuy = document.getElementById('posts-guy');
    handleMouseEnter('posts', 'posts-guy-active', postGuy);
}

for (let backgroundIdx = 1; backgroundIdx < 6; backgroundIdx++) {
    const seed = Math.floor(Math.random() * 10);
    let backgroundId = `background${backgroundIdx}`;

    const fnSetClassnameToActive = () => document.getElementById(backgroundId).className = 'active';

    /**
     * Depending on the seed, do the following:
     * If 9, instantly start active loop.
     * If 8 or 7, start a "mid active" loop, and set timer to start active loop immedaitely afterwards.
     * Everything else set timer to start an active loop anywhere between 1 to 100 seconds.
     */
    if (seed > 6) {
        if (seed > 7) {
            if (seed > 8) {
                fnSetClassnameToActive();
            } else {
                document.getElementById(backgroundId).className =  'mid-active-1';
                setTimeout(fnSetClassnameToActive, 63500);
            }
        } else {
            document.getElementById(backgroundId).className =  'mid-active-2';
            setTimeout(fnSetClassnameToActive, 34500);
        }
    } else {
        setTimeout(fnSetClassnameToActive, Math.floor(Math.random() * 25000));
    }
}