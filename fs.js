const fs = require('fs')

const stat = fs.statSync('./text.txt')
console.log(
    stat.isFile(),
    stat.isDirectory(),
    stat.isSymbolicLink(),
    stat.size
)