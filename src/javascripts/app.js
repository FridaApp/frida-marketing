//import './modules'
import Subscribe from './modules/Subscribe';

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
    const app = new App()
})