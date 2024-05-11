//day 24 // day 47 //46 days left
//22.4.2024


//for of loop with an array

// let nums = [];

// nums[0] = 5;
// nums[99] = 9;
// console.log(nums);

// for(let  i of nums) {
//     console.log(i)
// }

// for( let i in nums){
//     console.log(i, nums[i]);
// }

//array destruction
// let n =[]
// for( let num = 1;num<=10;num++){
// n.push(num)

// }
// console.log(...n)

// let sring = 'my name is manasa hello where are you'.split(" ");
// let [a,b,c,...d] = sring;
// console.log(d)

//forEach method

// let nums =[1,2,3,4,5,6]
//     nums.forEach( (n, i) =>{
//         console.log(n, i,nums)
//     })

//filter map reduce

let nums = [1, 2, 3, 4, 5, 6]
// takes the each value in the array
    // nums.forEach( (n, i) =>{
    //     console.log(n, i,nums)
    // })
//filter applies the condition
let res = nums
.filter(v=> v%2 ===0)
.map(n =>  n*1 )
    // map- take a value and change it
    // filter - take a value and decide whether
    //reduce
    .reduce((a,b)=>a+b)


console.log(res)

