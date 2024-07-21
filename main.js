const key = "f47d0a317ab9f19a5cbe1588f3d96c39"

function colocarDadosNaTela(dados) {

  document.querySelector('#cidade').innerHTML = "Tempo em " + dados.name
  document.querySelector('#temp').innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector('.text-previsao').innerHTML = dados.weather[0].description
  document.querySelector('.umidade').innerHTML = "Umidade: " + dados.main.humidity + "%"
  document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCity(city) {
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`)
  .then(response => response.json())

  colocarDadosNaTela(dados)
}

function clickButton() {
  const city = document.querySelector('.input-cidade').value
  buscarCity(city)
}


