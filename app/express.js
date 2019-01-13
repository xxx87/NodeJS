const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/register", urlencodedParser, function (request, response) {
	response.sendFile(__dirname + "/register.html");
});
app.post("/register", urlencodedParser, function (request, response) {
	if(!request.body) return response.sendStatus(400);
	console.log(request.body);
	console.log(urlencodedParser);
	response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){
	response.send("Главная страница");
});

app.listen(3000);


/*
const express = require("express");

const app = express();
app.get("/", function(request, response) {

	response.send("<h1>Главная страница</h1>");
});
app.use("/about", function(request, response) {

	let id = request.query.id;
	let userName = request.query.name;
	response.send(`<h1>Информация</h1><p>id=${id}</p><p>name=${userName}</p>`);
	console.log(request.query);
});

app.listen(3000);
*/


/*
const express = require("express");

const app = express();

app.get("/bo*k", function (request, response) {
	response.send(request.url)
});
app.get("/book(.html)?", function (request, response) {
	response.send(request.url)
});
app.use("/index",function (request, response) {
	response.redirect("https://metanit.com")
});


app.listen(3000);
*/

/*const express = require("express");
const fs = require("fs");

const app = express();
app.use(function(request, response, next){

	let now = new Date();
	let hour = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	let data = `${hour}:${minutes}:${seconds} ${request.method} ${request.url} ${request.get("user-agent")}`;
	console.log(data);
	fs.appendFile("server.log", data + "\n", function(){});
	next();
});

app.get("/", function(request, response){
	response.send("Hello");
});
app.get("/article", function(request, response){
	response.send('Helloeeeee');
});
app.listen(3000);*/

/*// подключение express
const express = require("express");
// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.get("/abc", function(request, response){

	// отправляем ответ
	response.send("<h2>Привет Express!</h2>");
});
app.get("*", function(request, response){

	// отправляем ответ
	response.send("<h2>url не распознан</h2>");
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);*/
