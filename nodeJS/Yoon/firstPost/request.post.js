var http=require('http');
var fs=require('fs');
var querystring=require('querystring');

http.createServer(function(request, response){
    if(request.method=='GET'){
        fs.readFile('HTMLPage2.html', function(error, data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        })
    }
    else if(request.method=='POST'){
        request.on('data', function(data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end('<h1>'+data+'</h1>');
        })
    }
}).listen(52273, function(){
    console.log("52273번 포트 서버 돌아가는 중");
});