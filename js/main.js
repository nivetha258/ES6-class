class car{
	constructor(brand,model,color,price,fuelType){
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.price = price;
		this.fuelType = fuelType;
	}
	set setcolor(shadow){
		this.color= shadow;
	}
	set setModel(model){
		this.model = model;
	}
	get newColor(){
		return this.color;
	}
	get newModel(){
		return this.model;
	}
}

const car1 = new car("mahindra","thar","red",1055498,"petrol");
const car2 = new car("tata","punch","red",853497,"petrol")
const car3 = new car("mg","hector","rust",1555395,"diesel")

console.log(car1,car2,car3)

car1.setcolor ="blue"
let shade = car1.newColor
console.log(shade)

car2.setModel = "nexon";
let design = car2.newModel
console.log(design)

car3.setcolor ="orange"
car3.newColor

console.log(car1,car2,car3)