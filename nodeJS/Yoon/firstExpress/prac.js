var express=require('express');
var fs=require('fs');

var app=express();

app.use(function(request,response){
  fs.readFile("pr.html", function(error, data){
    response.writeHead(200, {
      'Content-Type':'text/html'
    });
    response.end(data);
  });
});
app.listen(52273, function(){
  console.log("52273번 포트 돌아가는 중~");
})