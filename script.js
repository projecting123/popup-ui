const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const openPopupBtn = document.querySelector('#open__popup__button')
const closePopupBtn = document.querySelector('#close__popup__button')

openPopupBtn.addEventListener('click', () => {
    overlay.classList.remove('disabled__overlay')
    popup.classList.add('active__popup')
})

closePopupBtn.addEventListener('click', () => {
    overlay.classList.add('disabled__overlay')
    popup.classList.remove('active__popup')
})
