"use strict"

export class Registration {
	//plain
	constructor() {
		this.id = this._createId()
		this.car_type = null
		this.location = null
		this.pickup_date = null
		this.dropoff_date = null
		this.pickup_time = null
		this.dropoff_time = null
	}
	
	_fill(car_type) {
		let select_car = document.getElementsByClassName('car-form')[0]
		let select_pickupdate = document.getElementsByClassName('date-form')[0]
		let select_dropoffdate = document.getElementsByClassName('date-form')[1]
		let select_pickuptime = document.getElementsByClassName('time-form')[0]
		let select_dropofftime = document.getElementsByClassName('time-form')[1]
		let select_location = document.getElementsByClassName('location-form')[0]
		if (car_type == null) {
			this.car_type = select_car.value
		} 
		else { 
			this.car_type = car_type 
		}
		this.location = select_location.value
		this.pickup_time = select_pickuptime.value
		this.dropoff_time = select_dropofftime.value
		this.pickup_date = select_pickupdate.value
		this.dropoff_date = select_dropoffdate.value
	}
	
	_createId() {
		return Math.floor((Math.random() * 100000) + 1).toString()
	}
	
}