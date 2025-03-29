import buildFooter from '../templates/site-footer.js';
import SiteFooter from '../templates/site-footer.js';
import buildNav from '../templates/site-nav.js';
import buildHeader from './../templates/site-header.js'

const headers = document.getElementsByTagName('header');
if (headers.length) {
    buildHeader(headers[0]);
}

const navs = document.getElementsByTagName('nav');
if (navs.length) {
    buildNav(navs[0])
}

const footers = document.getElementsByTagName('footer');
if (footers.length) {
    buildFooter(footers[0])
}
//customElements.define('site-header', SiteHeader);
//customElements.define('site-nav', SiteNav);
//customElements.define('site-footer', SiteFooter);