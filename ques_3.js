
///3)Develop the REPL program to find odd or even number



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkOddEven = (number) => {
    if (number % 2 === 0) {
        console.log(`${number} is Even.`);
    } else {
        console.log(`${number} is Odd.`);
    }
};

const startREPL = () => {
    rl.question('Enter a number (or type "exit" to quit): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log('Exiting...');
            rl.close();
        } else {
            const number = parseInt(input, 10);
            if (isNaN(number)) {
                console.log('Please enter a valid number.');
            } else {
                checkOddEven(number);
            }
       
            startREPL();
        }
    });
};

startREPL();


////output 

/*$ node oddEvenREPL.js
Enter a number (or type "exit" to quit): 4
4 is Even.
Enter a number (or type "exit" to quit): 7
7 is Odd.
Enter a number (or type "exit" to quit): 10
10 is Even.
Enter a number (or type "exit" to quit): 13
13 is Odd.
Enter a number (or type "exit" to quit): abc
Please enter a valid number.
Enter a number (or type "exit" to quit): exit
Exiting...*/



