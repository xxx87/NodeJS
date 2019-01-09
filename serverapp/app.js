const http = require("http");
const fs = require("fs");
http.createServer(function(request, response){
 fs.readFile("serverapp/public/index.html", "utf8", function(error, data){

         let message = "Изучаем Node.js";
         let header = "Главная страница";
         let admin = true;
         data = data.replace("{header}", header).replace("{message}", message).replace("{isAdmin}", admin);
         response.end(data);
     })
    // console.log(`Запрошенный адрес: ${request.url}`);
    // if(request.url.startsWith("/public")){
    //
    //     // получаем путь после слеша
    //     var filePath = request.url.substr(1);
    //     console.log(filePath);
    //     fs.readFile('serverapp/' + filePath, function(error, data){
    //
    //         if(error){
    //
    //             response.statusCode = 404;
    //             response.end("Resourse not found!");
    //         }
    //         else{
    //             response.setHeader("Content-Type", "text/html");
    //             response.end(data);
    //         }
    //     })
    // }
    // else{
    //     // во всех остальных случаях отправляем строку hello world!
    //     // response.write(request.url.substr(1))
    //     response.end("Hello World!");
    // }
}).listen(3000);
