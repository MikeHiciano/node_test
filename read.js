const fs = require('fs')
const { promisify } = require('util')

const readFilePromisify = promisify(fs.readFile)

fs.readFilePromisify('./text.txt','utf-8')
    .then(text => {
        console.log('primer texto:', text)
})

console.log('dooiiingg boring things :( ')

const text2 = fs.readFile('./text2.txt','utf-8', (err,text2) => 
    console.log(text2)
)

console.log(text2)