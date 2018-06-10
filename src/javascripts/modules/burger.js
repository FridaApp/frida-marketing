export default function initBurger () {
    const burgerWrap = document.querySelectorAll('.burger-wrap');
    //const burgerWrap = document.querySelector('.intro');
    const mobileMenu = document.querySelector('.mobileMenu');

    burgerWrap.forEach(function(el){
        el.addEventListener('click', function () {
            console.log('click');
            el.querySelector('.burger').classList.toggle('active');
            document.body.classList.toggle('lock');
            mobileMenu.classList.toggle('open');
            console.log('hellloo');
        });
    });


    console.log('init burger');
};

