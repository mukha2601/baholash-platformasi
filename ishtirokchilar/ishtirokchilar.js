const btnBurger = document.querySelector('.btnBurger')
const hiddenNav = document.querySelector('.hiddenNav')

btnBurger.addEventListener('click', () => {
   hiddenNav.classList.toggle('hidden')
})