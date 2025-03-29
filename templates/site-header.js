export default function buildHeader(headerElement) {      
    const title = document.createElement('h1');
    title.textContent = 'Colin\'s Cool Blog';

    headerElement.appendChild(title);
}