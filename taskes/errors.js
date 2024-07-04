// function addTwoNumbers(a,b){
//     try{
//         if(typeof(a)!="number"){
//             throw new ReferenceError("The first argument is not a number")
//         } else if (typeof (b) != "number") {
//             throw new ReferenceError("The second argument is not a number")
//         }else
//         console.log(a + b)
//     }catch(err){
//         console.log("Error !",err)
//     }
    
// }

// addTwoNumbers(5,"5")
// console.log("has runned")

function letterFinder (word,match){
    condition1 = typeof(word)=="string" && word.length >=2;
    condition2 = typeof(match)=='string' && match.length ==1;
    if(condition1 && condition2){
        for(let i = 0; i<word.length;i++){
            if(word[i]== match){
                console.log("found the", match, " at ", i)
            }else{
                console.log("--- not found the match", i)
            }
        }
    }else{
        console.log("Please pass correct arguments to the function")
    }
 }

 letterFinder([],[])
 letterFinder("cat",'c')