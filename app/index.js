/*const calc = require('./calc')
const numbersToAdd = [
    3,
    4,
    10,
    2
]
const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`);*/

/*const fs = require('fs')
let content
try {
    content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
    console.log(ex)
}
console.log(content)*/

/*const fs = require('fs')
console.log('start reading a file...')
fs.readFile('file.md', 'utf-8', function (err, content) {
    if (err) {
        console.log('error happened during reading the file')
        return console.log(err)
    }
    console.log(content)
})
console.log('end of the file')*/

/*const http = require('http')
const port = 3000
const requestHandler = (request, response) => {
    console.log(request.url)
    response.end('Hello Node.js Server!')
}
const server = http.createServer(requestHandler)
server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})*/

const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
    response.send('Hello from Express!')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})