import SmoothScroll from 'smooth-scroll';

export default function initSmoothScroll () {
    // smooth scroll any anchor that starts with #
    let scroll = new SmoothScroll('a[href*="#"]');
};

