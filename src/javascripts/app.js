
import Subscribe from './modules/Subscribe';
import './libs/jquery';
import './libs/appear'
import './modules/appear'
import initBurger from './modules/burger'

class App {
    constructor() {
        this._init()
    }

    _init() {
        this.subscribe = new Subscribe()
        //var scroll = new SmoothScroll('a[href*="#"]')
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('dom loaded');
    const app = new App()
    initBurger();
});