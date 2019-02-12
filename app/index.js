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

// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (request, response) => {
//     response.send('Hello from Express!')
// })
// app.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })

// const express = require('express')
// const app = express()
// app.use((request, response, next) => {
// 	request.data = 123
// 	console.log('****** request.headers ******')
// 	console.log(request.data)
// 	console.log('****** request.headers ******')
// 	next()
// })
// app.use((request, response, next) => {
// 	request.chance = Math.random()
// 	next()
// })
// app.get('/', (request, response) => {
// 	response.json({
// 		otvet: request.chance,
// 		vopros: request.chance
// 	})
// })
// app.listen(3000)

// const express = require('express')
// const app = express()
// app.get('/', (request, response) => {
//     throw new Error('‘oops’')
// })
// app.use((err, request, response, next) => {
//     // логирование ошибки, пока просто console.log
//     console.log(err)
//     response.status(500).send('‘Something broke!’')
// })
// app.listen(3000)

// function displaySync(data) {
// 	console.log(data);
// }
//
// console.log("Начало работы программы");
//
// displaySync("Обработка данных...");
//
// console.log("Завершение работы программы");

// function display(data, callback) {
//
// 	// с помощью случайного числа определяем ошибку
// 	var randInt = Math.random() * (10 - 1) + 1;
// 	var err = randInt > 5 ? new Error("Ошибка выполнения. randInt больше 5") : null;
//
// 	setTimeout(function() {
// 		callback(err, data);
// 	}, 0);
// }
//
// console.log("Начало работы программы");
//
// display("Обработка данных...", function(err, data) {
//
// 	if(err) throw err;
// 	console.log(data);
// });
//
// console.log("Завершение работы программы");

// function displaySync(callback){
//     callback();
// }
//
// console.log("Начало работы программы");
//
// setTimeout(function(){
//
//         console.log("timeout 500");
// }, 500);
//
// setTimeout(function(){
//
//         console.log("timeout 100");
// }, 100);
//
// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");


// const fs = require("fs");
//
// // асинхронное чтение
// fs.readFile("app/hello.txt", "utf8",
//             function(error,data){
//                 console.log("Асинхронное чтение файла");
//                 if(error) throw error; // если возникла ошибка
//                 console.log(data);  // выводим считанные данные
// });
//
// // синхронное чтение
// console.log("Синхронное чтение файла")
// let fileContent = fs.readFileSync("app/hello.txt", "utf8");
// console.log(fileContent);
//
// fs.appendFileSync("app/hello.txt", "Привет ми ми ми!");
//
// fs.appendFile("app/hello.txt", "Привет МИД!", function(error){
//     if(error) throw error; // если возникла ошибка
//
//     console.log("Запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("app/hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });

// const Emitter = require("events");
// let emitter = new Emitter();
// let eventName = "greet";
// emitter.on('hello', function(data){
//     console.log("Hello all! " + data);
// });
//
// emitter.on('11', function(){
//     console.log("Привет!");
// });
//
// let func = (data) => {
// 	emitter.emit('11', data);
// };
// func("Vasya")

// const EventEmitter = require("events");
//
// let eventName = "greet";
//
// class User extends EventEmitter {
//     sayHi(data) {
//         this.emit(eventName, data);
//     }
// }
//
// let user = new User();
// // добавляем к объекту user обработку события "greet"
// user.on(eventName, function(data){
//     console.log(data);
// });
// user.sayHi("Мне нужна твоя одежда...");


// const fs = require("fs");
//
// let writeableStream = fs.createWriteStream("hello.txt");
// writeableStream.write("Привет мир! \n");
// writeableStream.write("Продолжение записи \n");
// writeableStream.end("Завершение записи");
// let readableStream = fs.createReadStream("hello.txt", "utf8");
//
// readableStream.on("data", function(chunk){
//     console.log(chunk);
// });

//
// const fs = require("fs");
//
// let readableStream = fs.createReadStream("hello.txt", "utf8");
//
// let writeableStream = fs.createWriteStream("some2.txt");
//
// readableStream.pipe(writeableStream);


// const fs = require("fs");
// const zlib = require("zlib");
//
// let readableStream = fs.createReadStream("hello.txt", "utf8");
//
// let writeableStream = fs.createWriteStream("hello.txt.gz");
//
// let gzip = zlib.createGzip();
//
// readableStream.pipe(gzip).pipe(writeableStream);


const http = require("http");

http.createServer(function(request, response){
	console.log("Url: " + request.url);
	    console.log("Тип запроса: " + request.method);
	    console.log("User-Agent: " + request.headers["user-agent"]);
					response.setHeader("UserId", 12);
				    response.setHeader("Content-Type", "text/html; charset=utf-8;");
				    response.write("<h2>hello world</h2>");
				    response.end();
}).listen(3000);
