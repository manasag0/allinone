//day 23 // day 48 //47 days left
//21.4.2024

// why this keyword


// let laptop1 = {
//     brand: "HP",
//     cpu:'i7',
//     ram:18,
//     compare: function(other){
//         if(this.cpu > other.cpu) return laptop1;
//         else if (this.cpu < other.cpu) return laptop2;
//         else return 'They are equal'
//     }
// }

// let laptop2 = {
//     brand:"apple",
//     cpu: 'i4',
//     ram:4
// }

// console.log(laptop1.compare(laptop2))

// constructor

// function Laptop(brand, cost){
//     this.brand = brand;
//     this.cost = cost;
//     this.ram = function(){
//         console.log('learn  about RAM')
//     }
// }

// let  hpLaptop = new Laptop("HP",500);
// let falaptop = new Laptop('appple',600);

// console.log(hpLaptop);
// hpLaptop.ram();

//array methods

// push //pop
// shift remove first element from array and return it
// unshift add element to the beginning of
// slice (startIndex , endIndex ) - returns a copy of elements in that range
// splice(indexToStart , howManyToRemove , item1 ,item2 ...) - removes and adds elements

let numbers = [1,3,5,6,7,8,3]
// numbers.push(10)

numbers.splice(4, 6, 1,3,5,6,21,4)

console.log(numbers)