import buildFooter from '../templates/site-footer.js';

const footers = document.getElementsByTagName('footer');
if (footers.length) {
    buildFooter(footers[0])
}