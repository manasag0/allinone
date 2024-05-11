//day 25 // day 46 //45 days left
//23.4.2024

//set -collection of values and with unique values - unordered list- no index value- no repeated values

let nums = new Set();

// add method
nums.add(1);
nums.add(1);
nums.add(3);
nums.add(4);
nums.add("hello");

nums.forEach(value =>{
    // console.log(value)
})
// to check the value with has - true or false


// console.log(nums.has("hello"));

// map data strecture  - it is like a key pair value pairs
//has get set
let m = new Map();
m.set("key1","value1");
m.set("key2", "value2");

 for(let [k,c]of m){
    console.log(`${k} : ${c}`);
 }
console.log(m.get("key2"))


const cloth = [' shirt ', 3 , 'pants']
cloth.length = 0;
console.log(cloth[2]);