const fs = require('fs');

// Writing data to a file
fs.writeFile('example.txt', 'Hello Node.js File System!', (err) => {
  if (err) throw err;
  console.log('File written successfully.');

  // Reading the file
  fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
  });

});
