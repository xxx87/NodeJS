const express = require("express");
const nunjucks = require('nunjucks');
const app = express();

app.engine('html', nunjucks.render);
nunjucks.configure(__dirname, {
    express: app
});

app.set("view engine", "html");

app.use("/contact", function(request, response){
console.log(__dirname);
    response.render("index.html", {
					title: "My Doc",
					isAdmin: true,
				});
});
app.use("/", function(request, response){

    response.send("Главная страница");
});
app.listen(3000);


/*const express = require("express");

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();

app.post("/user", jsonParser, function (request, response) {
	console.log(request.body);
	if(!request.body) return response.sendStatus(400);
	// console.log(request.body);
	response.json(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/", function(request, response){

	response.sendFile(__dirname + "/index.html");
});

app.listen(3000);
*/

/*
const express = require("express");
const app = express();

// определяем Router
const productRouter = express.Router();

// определяем маршруты и их обработчики внутри роутера
productRouter.use("/create", function(request, response){
	response.send("Добавление товара");
});
productRouter.use("/:id", function(request, response){
	response.send(`Товар ${request.params.id}`);
});
productRouter.use("/", function(request, response){
	response.send("Список товаров");
});
// сопотавляем роутер с конечной точкой "/products"
app.use("/products", productRouter);

app.use("/about", function (request, response) {
	response.send("О сайте");
});

app.use("/", function (request, response) {
	response.send("Главная страница");
});
app.listen(3000);
*/


/*
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
*/


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
