//day 22 // day 49 //48 days left
//20.4.2024

//this keyword

let laptop1 = {
    cpu: "i5",
    ram: "8GB",
    greet: function(){
        console.log("Hello, I am a "+ this.cpu +" CPU with "+ this.ram +" RAM.");
    }
}



let laptop2 = {
    cpu: "i3",
    ram: "8GB",
    greet: function () {
        console.log("Hello, I am a " + this.cpu + " CPU with " + this.ram + " RAM.");
    }
}

laptop1.greet()


