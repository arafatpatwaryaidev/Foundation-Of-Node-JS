// const path = require('path');

// const myPath = 'D:\Node_JS\Foundation\components\index.js';

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.parse(myPath));
// const os = require('os');
// console.log(os.cpus());
const fs = require('fs');
fs.writeFileSync('myfile.txt', 'Hello Programmers');
fs.appendFileSync('myfile.txt', ' How are you?');