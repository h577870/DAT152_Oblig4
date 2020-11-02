"use strict"

let result = null

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem('Change') != null) { localStorage.removeItem('Change') }
	if (localStorage.getItem('registration') != null) { result = JSON.parse(localStorage.getItem('registration')) }
	document.getElementById('location-conf').textContent = result.location
	document.getElementById('car-conf').textContent = result.car_type
	document.getElementById('pickup-conf').textContent = `${result.pickup_date}, kl.: ${result.pickup_time}`
	document.getElementById('dropoff-conf').textContent = `${result.dropoff_date}, kl.: ${result.dropoff_time}`
}, true)

const confirmation = document.getElementById('conf_button')
const change = document.getElementById('change_button')


confirmation.addEventListener('click', () => {
	localStorage.setItem('Confirmation', `Confirmation of order nr. ${result.id} at ${getTime()}`)
})

change.addEventListener('click', () => {
	localStorage.removeItem('registration')
	localStorage.setItem('Change', `Order with id ${result.id} was cancelled.`)
})

function getTime() {
	let today = new Date();
	let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
	let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	let dateTime = date+' '+time;
	return dateTime
}