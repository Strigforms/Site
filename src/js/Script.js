//Efeito menu
window.addEventListener('scroll', function () {
  var menu = document.querySelector('.menu')
  if (menu) {
    menu.classList.toggle('sticky', window.scrollY > 0)
  }
})

//Slider
let count = 1
document.getElementById('radio1').checked = true

setInterval(function () {
  nextImage()
}, 8000)

function nextImage() {
  count++
  if (count > 5) {
    count = 1
  }

  document.getElementById('radio' + count).checked = true
}

//Animacao de conteudo
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showleft')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hiddenleft')
hiddenElements.forEach((el) => observer.observe(el))

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showup')
    }
  })
})

const hiddenElements2 = document.querySelectorAll('.hiddenup')
hiddenElements2.forEach((el) => observer2.observe(el))

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('showright')
    }
  })
})

const hiddenElements3 = document.querySelectorAll('.hiddenright')
hiddenElements3.forEach((el) => observer3.observe(el))

//menu hamburger
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
})
