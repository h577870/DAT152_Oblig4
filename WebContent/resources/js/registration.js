"use strict"

export class Registration {
	//plain
	constructor(root) {
		this.root = root
		this.id = this._createId()
		this.car_type = null
		this.location = null
		this.pickup_date = null
		this.dropoff_date = null
		this.pickup_time = null
		this.dropoff_time = null
		this._registrationlist = []
	}
	
	_fill(root, car_type) {
		let select_car = root.getElementsByClassName('car-form')[0]
		let select_pickupdate = root.getElementsByClassName('date-form')[0]
		let select_dropoffdate = root.getElementsByClassName('date-form')[1]
		let select_pickuptime = root.getElementsByClassName('time-form')[0]
		let select_dropofftime = root.getElementsByClassName('time-form')[1]
		this.location = root.getElementsByClassName('location-form')[0]
		if (car_type == null) {
			this.car_type = select_car.value
		} 
		else { 
			this.car_type = car_type 
		}
		this.pickup_time = select_pickuptime.value
		this.dropoff_time = select_dropofftime.value
		this.pickup_date = select_pickupdate.value
		this.dropoff_date = select_dropoffdate.value
	}
	
	_add(registration) {
		this._registrationlist.forEach( reg => { 
			if (reg.id == registration.id) {
				registration.id = this._createId()
				this._add(registration)
			}
		})
		return this._registrationlist.push(registration)
	}
	
	_createId() {
		return Math.floor((Math.random() * 100000) + 1).toString()
	}
	
}