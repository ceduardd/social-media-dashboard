const chk = document.getElementById('chk')

const label = document.querySelector('.label')
const cards = document.querySelectorAll('.card')
const header = document.querySelector('header')
const body = document.body

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')

const fwNumbers = document.querySelectorAll('.followers-number')
const metricNumbers = document.querySelectorAll('.metric-number')

console.log(h1)
console.log(h2)

console.log(body)

chk.addEventListener('change', () => {
  label.classList.toggle('label-dark')
  header.classList.toggle('header-dark')
  body.classList.toggle('dark-body')
  h1.classList.toggle('white-text')
  h2.classList.toggle('white-text')

  for (let i = 0; i < cards.length; i++) {
    cards[i].classList.toggle('card-dark')
  }

  for (let i = 0; i < fwNumbers.length; i++) {
    fwNumbers[i].classList.toggle('white-text')
  }

  for (let i = 0; i < metricNumbers.length; i++) {
    metricNumbers[i].classList.toggle('white-text')
  }
})
