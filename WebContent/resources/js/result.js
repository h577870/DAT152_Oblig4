"use strict"

window.addEventListener("DOMContentLoaded", () => {
	if (localStorage.getItem('Confirmation') != null) {
		const result = localStorage.getItem('Confirmation')
		document.getElementById('result').textContent = result
	}
})

const button = document.getElementById('toindex')
button.addEventListener('click', () => {
	localStorage.removeItem('Confirmation')
})