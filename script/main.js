window.addEventListener('load', ()=>document.querySelector('.preloader').classList.add('hidePreloader'))

const createCars = (()=>{
	//car data
	const cars = [];
	//car class

	class Car{
		constructor(make,country,img,special,model,price,type,trans,gas){
			this.make = make;
			this.country = country;
			this.img = img;
			this.special = special;
			this.model = model;
			this.price = price;
			this.type = type;
			this.trans  = trans;
			this.gas = gas;
		}
	}
	//create car function
	function makeCar(make,country,img = 'img/mercedes-benz-1862769__340.jpg', special = true, model = 'new model', price = '10000', type = 'sedan', trans = 'automatic',gas = '50'){
		const car = new Car(make,country,img,special,model,price,type,trans,gas);
		cars.push(car)
	}
	// produce cars
	function produceCars(){
		makeCar('mercedes', 'american');
		makeCar('bmw', 'american', 'img/mercedes-3417100__340.jpg', true);
		makeCar('toyota', 'german', 'img/mercedes-3418805__340.jpg', false);
		makeCar('toyota', 'german', 'img/mercedes-3760878__340.jpg', false, 'some model');
		makeCar('honda', 'american', 'img/car-2115062__340.jpg', false, 'some model');
		makeCar('toyota', 'german', 'img/mercedes-3760879__340.jpg', undefined, 'other model');
		makeCar('toyota', 'american', 'img/mercedes-841465__340.jpg', false, 'some model');
		makeCar('toyota', 'german', 'img/mercedes-benz-1470136__340.jpg', true, 'some model');
		makeCar('lexus', 'german', 'img/mercedes-benz-1470152__340.jpg', false, 'some model');
		makeCar('lexus', 'american', 'img/mercedes-benz-1470152__340.jpg', false, 'some model');
		makeCar('lexus', 'german', 'img/mercedes-3760878__340.jpg', true, 'some model');
		makeCar('honda', 'american', 'img/car-2115062__340.jpg', false, 'some model');
	}
	produceCars();
	// console.log(cars);
	//special cars
	const specialCars = cars.filter(car => car.special === true)
	// console.log(specialCars);

	return{
		cars,
		specialCars
	}
})();

const displaySpecialCars = ((createCars) =>{
	const specialCars = createCars.specialCars;
	const info = document.querySelector('.featured-info');

	// document loaded event
	document.addEventListener('DOMContentLoaded', ()=>{
		info.innerHTML = '';
		// console.log(info);

		let data = '';

		specialCars.forEach(item => {
			data += `<div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
						<span data-img="${item.img}" class="featured-icon mr-2">
							<i class="fas fa-car"></i>
						</span>
						<h5 class="font-weight-bold mx-1">${item.make}</h5>
						<h5 class="mx-1">${item.model}</h5>
					</div>`
		})
		info.innerHTML = data;
		// console.log(data);
	})
	//change img
	info.addEventListener('click', (event) =>{
		// console.log(event.target);
		if(event.target.parentElement.classList.contains('featured-icon')){
			// console.log('great'); returning one item...check for error
			const img = event.target.parentElement.dataset.img;
			// console.log(img); based on the previous console
			document.querySelector('.featured-photo').src= img;
		}
	})
})(createCars);

const displayCars = ((createCars) => {
	// all cars
	const cars = createCars.cars;
	// console.log(cars); working
	const inventory = document.querySelector('.inventory-container');
	// console.log(inventory); working
	//content load
	document.addEventListener('DOMContentLoaded', () =>{
		inventory.innerHTML=''; //working

		let output = '';
		cars.forEach((car) =>{
			output+= `<div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
			<div class="card car-card">
				<img class="card-img-top car-img" src="${car.img}" alt="Card image cap">
				<div class="card-body">
					<div class="car-info d-flex justify-content-between">
						<!-- first flex child -->
						<div class="car-text text-uppercase">
							<h6 class="font-weight-bold">${car.make}</h6>
							<h6>${car.model}</h6>
						</div>
						<!-- second flex child -->
						<h5 class="car-value align-self-center py-2 px-3">
							$
							<span class="car-price">${car.price}</span>
						</h5>
					</div>
				</div>
				<div class="card-footer text-capitalize d-flex justify-content-between">
					<p><span><i class="fas fa-car"></i>${car.type}</span></p>
					<p><span><i class="fas fa-cogs"></i>${car.trans}</span></p>
					<p><span><i class="fas fa-gas-pump"></i>${car.gas}</span></p>
				</div>
			</div>
		</div>`
		})
		inventory.innerHTML= output; //working
	})
})(createCars);
//filter cars
const filterCars = (() =>{
	const filter = document.querySelectorAll('.filter-btn');
	// console.log(filter); 
	filter.forEach((btn) =>{
		btn.addEventListener('click', (event) => {
			const value = event.target.dataset.filter; //target attribute
			// console.log(value); working
			const singleCar = document.querySelectorAll('.single-car');
			// console.log(singleCar); working
			singleCar.forEach(car =>{
				if(value==='all'){
					car.style.display = 'block';
				}else{
					(!car.classList.contains(value))? car.style.display = 'none': car.style.display = 'block';
				}
			})
		}) 
	})
})();