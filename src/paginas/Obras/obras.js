import { dadosObras } from './dadosObras'

const qualObra = parseInt(getParameterByName('obra')) - 1

const {
  titulo_obra,
  dadostecnicos,
  data_conlusao,
  galeria_obras,
  imagemCapa,
  objetivo,
  participacao,
  setaAvanca,
  setaVolta
} = dadosObras[qualObra]

document.getElementById('dinamic1').src = imagemCapa

document.getElementById('dinamic2').innerHTML = titulo_obra

document.getElementById('dinamic3').src = data_conlusao

// Dados tecnicos
const dadosTecnicos = document.getElementById('dinamic4')

const template = galeria_obras.map(
  (dado) => ` <label>
    <input type="checkbox">
    <img class="imagem_obra" src="${dado}">
     </label>`
)

dadosTecnicos.innerHTML = template.join('')

document.getElementById('dinamic5').innerHTML = objetivo
document.getElementById('dinamic6').innerHTML = participacao

//Dados Tecnicos
const arr = []
if (dadostecnicos[0]) {
  arr.push(geraTemplateDadosTecnicos('', dadostecnicos[0]))
}
if (dadostecnicos[1]) {
  arr.push(geraTemplateDadosTecnicos('_2', dadostecnicos[1]))
}
if (dadostecnicos[2]) {
  arr.push(geraTemplateDadosTecnicos('_3', dadostecnicos[2]))
}
if (dadostecnicos[3]) {
  arr.push(geraTemplateDadosTecnicos('_4', dadostecnicos[3]))
}
if (dadostecnicos[4]) {
  arr.push(geraTemplateDadosTecnicos('_5', dadostecnicos[4]))
}

document.getElementById('dinamic7').innerHTML = arr.join('')

//Setas
let setasFinal = ''
if (setaVolta) {
  setasFinal += `<div class="seta_volta">
    <a href="${setaVolta}"> <b> SETA VOLTA </b> <img width="200px" src="elementos/Elementos_site_2-06.png"></a>
</div>`
}
if (setaAvanca) {
  setasFinal += `<div class="seta_avanca">
  <a href="${setaAvanca}"> <b>SETA AVANCA</b> <img width="200px" src="elementos/Elementos_site_2-07.png"></a>
</div>`
}

document.getElementById('dinamic8').innerHTML = setasFinal

function geraTemplateDadosTecnicos(classe, array) {
  const template = array.map((e) => `<img class="especificacoes" src="${e}">`)

  return ` <div class="hiddenup carac_obras${classe}">
    ${template.join('')}
    </div>`
}

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}
