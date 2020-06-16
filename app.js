const chk = document.getElementById('chk')

const label = document.querySelector('.label')
const header = document.querySelector('header')
const body = document.body

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

const cards = document.querySelectorAll('.card')
const numbers = document.querySelectorAll('[class$="number"]')

console.log(numbers)

chk.addEventListener('change', () => {
  label.classList.toggle('label-dark')
  header.classList.toggle('header-dark')
  body.classList.toggle('dark-body')
  h1.classList.toggle('white-text')
  h2.classList.toggle('white-text')

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('card-dark')
  }

  for (let i = 0; i < numbers.length; i++) {
    numbers[i].classList.toggle('white-text')
  }
})
