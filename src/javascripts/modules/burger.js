burger = document.getElementsByClassName('burger')[0]
burger_wrap = document.getElementsByClassName('burger-wrap')[0]
mobileMenu = document.getElementsByClassName('mobileMenu')[0]

burger.addEventListener('click', function () {
  burger.classList.toggle('active')
  document.body.classList.toggle('lock')
  mobileMenu.classList.toggle('open')
  console.log('hellloo')
})

console.log('hey')

