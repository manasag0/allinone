let car = {};
car.milage = 53213;
car.color = "green";

car.turnOnEngine = function() {
    console.log("Engine is on");
}
car.lightsOn= function(){
    console.log("Lignts Onn!!")
}
console.log(car.milage,car.color);
car.turnOnEngine();
car.lightsOn();
