var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));
// получение списка данных
app.get("/api/users", function(req, res){
    var content = fs.readFileSync(__dirname + "/users.json", "utf8");
    var users = JSON.parse(content);
    res.send(users);
});
app.get("/api/send", function(req, res){
    sendMail();
});
// получение одного пользователя по id
app.get("/api/users/:id", function(req, res){

    var id = req.params.id; // получаем id
    var content = fs.readFileSync(__dirname + "/users.json", "utf8");
    var users = JSON.parse(content);
    var user = null;
    // находим в массиве пользователя по id
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            user = users[i];
            break;
        }
    }
    // отправляем пользователя
    if(user){
        res.send(user);
    }
    else{
        res.status(404).send("NOT FOUNDS");
    }
});
// получение отправленных данных
app.post("/api/users", jsonParser, function (req, res) {

    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var userName = req.body.name;
    var userAge = req.body.age;
    var user = {name: userName, age: userAge};

    var data = fs.readFileSync(__dirname + "/users.json", "utf8");
    var users = JSON.parse(data);

    // находим максимальный id
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    // увеличиваем его на единицу
    user.id = id+1;
    // добавляем пользователя в массив
    users.push(user);
    var data = JSON.stringify(users);
    // перезаписываем файл с новыми данными
    fs.writeFileSync(__dirname + "/users.json", data);
    res.send(user);
});
 // удаление пользователя по id
app.delete("/api/users/:id", function(req, res){

    var id = req.params.id;
    var data = fs.readFileSync(__dirname + "/users.json", "utf8");
    var users = JSON.parse(data);
    var index = -1;
    // находим индекс пользователя в массиве
    for(var i=0; i<users.length; i++){
        if(users[i].id==id){
            index=i;
            break;
        }
    }
    if(index > -1){
        // удаляем пользователя из массива по индексу
        var user = users.splice(index, 1)[0];
        var data = JSON.stringify(users);
        fs.writeFileSync(__dirname + "/users.json", data);
        // отправляем удаленного пользователя
        res.send(user);
    }
    else{
        res.status(404).send();
    }
});
// изменение пользователя
app.put("/api/users", jsonParser, function(req, res){

    if(!req.body) return res.sendStatus(400);

    var userId = req.body.id;
    var userName = req.body.name;
    var userAge = req.body.age;

    var data = fs.readFileSync(__dirname + "/users.json", "utf8");
    var users = JSON.parse(data);
    var user;
    for(var i=0; i<users.length; i++){
        if(users[i].id==userId){
            user = users[i];
            break;
        }
    }
    // изменяем данные у пользователя
    if(user){
        user.age = userAge;
        user.name = userName;
        var data = JSON.stringify(users);
        fs.writeFileSync(__dirname + "/users.json", data);
        res.send(user);
    }
    else{
        res.status(404).send(user);
    }
});

let nodemailer = require('nodemailer');

function sendMail() {
    let transporter = nodemailer.createTransport({
        "host": "smtp.ukr.net",
        "port": 465,
        "secure": true,
        "auth": {
            "user": "xxx_87@ukr.net",
            "pass": "M1_P0chtA_Ukrnet"
        }
    });
    const mailOptions = {
        from: 'xxx_87@ukr.net', // sender address
        to: 'isayev.ilya@gmail.com', // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>'// plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
};



app.listen(3000, function(){
    console.log("Сервер ожидает подключения...");
});
