"use strict"

import { Registration } from './registration.js'

const formbutton = document.getElementById('main-page-form')

formbutton.addEventListener('submit', () => {
	let registration = new Registration()
	registration._fill(null)
	localStorage.setItem("registration", JSON.stringify(registration))
}, true)
