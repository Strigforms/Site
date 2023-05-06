import Teste from './assets/images/Parceiros/amaggi.png'

function addImage() {
  const img = document.createElement('img')
  img.alt = 'Teste'
  img.width = 300
  img.src = Teste

  const body = document.querySelector('body')
  body.appendChild(img)
}

export default addImage
