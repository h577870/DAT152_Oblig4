"use strict"

import { Registration } from './registration.js'

const param = window.location.search
const urlparams = new URLSearchParams(param)
let result = null
if (urlparams.get("car") != null) {
	result = urlparams.get("car").toUpperCase()
} else { 
	result = 'a'.toUpperCase() 
}

const rentcarform = document.getElementById('rentcar-page-form')

window.addEventListener("DOMContentLoaded", () => {
	document.getElementById('car-type').value = result
}, true)

rentcarform.addEventListener("submit", () => {
	let registration = new Registration()
	registration._fill(result)
	localStorage.setItem("registration", JSON.stringify(registration,undefined,2))
}, true)
