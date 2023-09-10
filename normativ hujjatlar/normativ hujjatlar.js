const share = document.querySelector('.share')
const closeBtn = document.querySelector('.closeBtn')
const modal_window = document.querySelector('.modal_window')
const body = document.querySelector('body')

share.addEventListener('click', () => {
   modal_window.classList.remove('hidden')
   body.classList.add('overflow-hidden')
})

closeBtn.addEventListener('click', () => {
   modal_window.classList.add('hidden')
   body.classList.remove('overflow-hidden')
})