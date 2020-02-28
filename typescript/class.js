var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Function displays Brand is  :   " + this.brand);
    };
    return Car;
}());
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    //constructor
    function Toyota() {
        var _this = _super.call(this) || this;
        _this.brand = "Toyota";
        return _this;
    }
    return Toyota;
}(Car));
function brand(obj) {
    return "Brand is " + obj.brand;
}
function isBrand(brand) {
    switch (brand) {
        case "Toyota": {
            return "Brand exists";
        }
        default: {
            return "Brand does not exist";
        }
    }
}
//create an object 
var obj = new Toyota();
//access the field 
console.log("Reading attribute value Brand as :  " + obj.brand);
//access the function
obj.disp();
document.getElementById("car").innerHTML = brand(obj);
document.getElementById("isBrand").innerHTML = isBrand("Toyota");
