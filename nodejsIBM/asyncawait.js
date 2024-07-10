// a Promise with a callback where we handle resolve and reject

const axios = require('axios');

const connectToURL = (url) => {
    const req = axios.get(url);
    req.then(resp => {
        let listOfEntries = resp.data.entries;
        listOfEntries.forEach((entry) => {
            console.log(entry.Category);
        });
    })
        .catch(err => {
            console.log(err.toString())
        });
}

console.log("Before connect URL")
connectToURL('https://api.publicapis.org/entries');
console.log("After connect URL")

// sample accomplished with async await

// const axios = require('axios');

// const connectToURL = async (url) => {
//     try {
//         const response = await axios.get(url);
//         const listOfEntries = response.data.entries;
//         listOfEntries.forEach((entry) => {
//             console.log(entry.Category);
//         });
//     } catch (error) {
//         console.error(error.toString());
//     }
// }

// console.log("Before connect URL");
// connectToURL('https://api.publicapis.org/entries');
// console.log("After connect URL");




// nesting the second set of promisesinto the first

const axios = require('axios');

async function connectToURL(url) {
    try {
        const response = await axios.get(url);
        const listOfEntries = response.data.entries;
        let categories = new Set();

        // Extract unique categories
        listOfEntries.forEach((entry) => {
            categories.add(entry.Category);
        });

        // Request details for each category starting with 'A'
        for (let category of categories) {
            if (category.startsWith("A")) {
                const resp = await axios.get(`https://api.publicapis.org/entries?Category=${category}`);
                console.log(`${category} - ${resp.data.count}`);
            }
        }
    } catch (error) {
        console.error(error.toString());
    }
}


connectToURL('https://api.publicapis.org/entries');


// The same objective is attained using async/await.

const axios = require('axios');
/*
In the following code we try to get list of all entries from remote url and then based on that make request about each of the 
category starting with 'A'. Finally print the API counts of the category. We are using axios get, which returns a promise. 
*/
async function connectToURL(url) {
    const resp = await axios.get(url);
    let listOfEntries = resp.data.entries;
    let Categories = listOfEntries.map((entry) => {
        return entry.Category
    });
    Categories = [...new Set(Categories)];

    Categories.forEach(async (Category) => {
        if (Category.startsWith("A")) {
            try {
                const resp = await axios({
                    method: 'get',
                    url: "https://api.publicapis.org/entries?Category=" + Category,
                    responseType: 'json'
                })
                console.log(Category + "   " + resp.data.count);
            }
            catch (e) {
                console.log(e);
            }
        }

    });
}
connectToURL('https://api.publicapis.org/entries').catch(err => {
    console.log(err.toString())
});
