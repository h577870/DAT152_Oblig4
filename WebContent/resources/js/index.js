"use strict"

import { Registration } from './registration.js'

let root = document.getElementsByClassName('container')[0]
const formbutton = document.getElementById('index-submit')

formbutton.addEventListener('click', () => {
	let registration = new Registration(root)
	registration._fill(root, null)
	registration._add(this)
})