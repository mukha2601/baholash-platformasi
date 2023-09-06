const btnBurger = document.querySelector('.btnBurger')
const hiddenNav = document.querySelector('.hiddenNav')
const body = document.querySelector('body')

btnBurger.addEventListener('click', () => {
   hiddenNav.classList.toggle('hidden')
   body.classList.toggle('max-md:overflow-hidden')
})