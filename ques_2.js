
//////2)Write file system module with sample coding


const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'example.txt');

// 1. Write to a file (overwrite if exists)
fs.writeFile(filePath, 'Hello, Node.js!', (err) => {
    if (err) {
        return console.error('Error writing to file:', err);
    }
    console.log('File written successfully!');

    // 2. Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.error('Error reading file:', err);
        }
        console.log('File contents:', data);

        // 3. Append to the file
        fs.appendFile(filePath, '\nAppending this line!', (err) => {
            if (err) {
                return console.error('Error appending to file:', err);
            }
            console.log('Data appended successfully!');

            // 4. Read the file again to see the appended content
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return console.error('Error reading file:', err);
                }
                console.log('Updated file contents:', data);

                // 5. Delete the file
                fs.unlink(filePath, (err) => {
                    if (err) {
                        return console.error('Error deleting file:', err);
                    }
                    console.log('File deleted successfully!');
                });
            });
        });
    });
});



///output  

/*File written successfully!
File contents: Hello, Node.js!
Data appended successfully!
Updated file contents: Hello, Node.js!
Appending this line!
File deleted successfully!
*/
