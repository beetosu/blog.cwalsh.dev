export default function buildSiteNav(navElement) {
    const aTags = generateLinks();
    
    for (const aTagIdx in aTags) {
        navElement.appendChild(aTags[aTagIdx]);
        if (aTagIdx != aTags.length - 1) {
            const divider = document.createElement('span');
            divider.innerHTML = '&nbsp;|&nbsp;';
            navElement.appendChild(divider);
        }
    }
}

const links = [
    { textContent: "Home", href: "/" },
    { textContent: "About", href: "/about" }
]

function generateLinks() {
    const aTags = [];

    for (const link of links) {
        const aTag = document.createElement('a');
        for (const [ key, value ] of Object.entries(link)) {
            aTag[key] = value;
        }

        aTags.push(aTag);
    }

    return aTags;
}