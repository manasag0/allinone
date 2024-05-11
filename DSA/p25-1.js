const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of integers (n): ', (n) => {
    const inputNumbers = [];

    rl.on('line', (input) => {
        inputNumbers.push(parseInt(input));

        if (inputNumbers.length === parseInt(n)) {
            rl.close();
        }
    });

    rl.on('close', () => {
        for (let i = 0; i < inputNumbers.length; i++) {
            if (inputNumbers[i] === 42) {
                break;
            } else {
                console.log(inputNumbers[i]);
            }
        }
    });
});
