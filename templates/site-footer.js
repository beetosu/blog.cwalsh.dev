const socialList = [
    { 
        href: 'https://bsky.app/profile/cwalsh.dev', 
        img: { src: '/assets/bluesky.svg', alt: 'Bluesky' }
    },
    {
        href: 'https://beetosu.itch.io',
        img: { src: '/assets/itch.svg', alt: 'Itch.io' }
    },
    {
        href: 'https://letterboxd.com/beetosu',
        img: { src: '/assets/letterboxd.svg', alt: 'Letterboxd' }
    }
];

export default function buildFooter(footerElement) {
    const blurb = document.createElement('p');
    blurb.innerHTML = 'Made w/ <3 by <a href="https://cwalsh.dev">Colin Walsh</a>';
    footerElement.appendChild(blurb);

    const socials = document.createElement('div');
    socials.className = 'socials';
    addSocialLinks(socials);
    footerElement.appendChild(socials);
}

function addSocialLinks(divElement) {
    for (const social of socialList) {
        const link = document.createElement('a');
        link.href = social.href;

        const image = document.createElement('img');
        for (const [ key, value ] of Object.entries(social.img)) {
            image[key] = value;
        }

        link.appendChild(image);
        divElement.appendChild(link);
    }
}