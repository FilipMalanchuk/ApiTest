async function getApi (url) {
	let data = await fetch(url)
	data = data.json()
	return data
}
const dataOutput = async () => {
	data = await getApi("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
	let string = data.map(item => {
		let strignIn = "<div class='row'>"
		strignIn += `<div class="ccyr-name">${item.ccy}</div>`
		strignIn += `<div class="ccyr-buy">${item.buy}</div>`
		strignIn += `<div class="ccry-sale">${item.sale}</div>`
		strignIn += "</div>"
		return strignIn
	})
	let htmlString = '<div class="Ccry-Header">Курсы Валют</div><div class="RowNames"><div>Валюта</div><div>Покупка</div><div>Продажа</div></div>';
	for(let i =0;i<string.length;i++) {
		htmlString += string[i]
	}
	document.querySelector(".ExRates").innerHTML = htmlString


}
dataOutput()


// end of ccyr

const WeatherOutput = async() => {
	data = await getApi("https://api.openweathermap.org/data/2.5/weather?q=Kyiv&APPID=1e4c5456ddd367823b707047bd9635d2");
	console.log(data)
	let stringHtml = '<div class="weather-header">Погода в Киеве сейчас</div>'
	stringHtml += "<div class='weather-row'>"
	stringHtml += "<div class='weather-name'>Температура С</div>"
	stringHtml += `<div class='weather-data'>${parseFloat((data.main.temp - 273.15).toFixed(3))}</div>`
	stringHtml += "</div>"
	stringHtml += "<div class='weather-row'>"
	stringHtml += "<div class='weather-name'>Скорость Ветра</div>"
	stringHtml += `<div class='weather-data'>${data.wind.speed}</div>`
	stringHtml += "</div>"
	document.querySelector(".Weather").innerHTML = stringHtml
}
WeatherOutput()