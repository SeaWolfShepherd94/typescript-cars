class Car { 
   //field 
   brand:string;
   
   //function 
   disp():void { 
      console.log("Function displays Brand is  :   "+this.brand) 
   }
}

class Toyota extends Car{
   //constructor
   constructor() {
      super()
      this.brand = "Toyota"
   }
} 

function brand(obj:Car) {
	return "Brand is "+obj.brand
}

function isBrand(brand):string {
   switch(brand) {
      case "Toyota": { 
         return "Brand exists"
      }
      default: {
         return "Brand does not exist"
      }
   }
}

//create an object 
var obj = new Toyota()

//access the field 
console.log("Reading attribute value Brand as :  "+obj.brand)

//access the function
obj.disp()

document.getElementById("car").innerHTML = brand(obj)
document.getElementById("isBrand").innerHTML = isBrand("Toyota")
