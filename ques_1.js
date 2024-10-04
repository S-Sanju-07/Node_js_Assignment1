
/// 1) Blocking Code
const fs = require('fs');

console.log('Start reading file...');

const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

console.log('Finished reading file.');

///output

/*Start reading file...
File content: Hello, Node.js!
Finished reading file.*/



///// Non-Blocking Code

const fs = require('fs');

console.log('Start reading file...');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
});

console.log('Finished reading file.');

///output

/*Start reading file...
Finished reading file.
File content: Hello, Node.js!*/




