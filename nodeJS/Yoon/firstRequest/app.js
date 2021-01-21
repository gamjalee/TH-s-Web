var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(request, response){
    var pathname=url.parse(request.url).pathname;

    if(pathname=='/'){
        fs.readFile('index.html', function(error, data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
    else{
        fs.readFile('otherPage.html', function(error, data){
            response.writeHead(200, {'Content-Type':'text/html'});
            response.end(data);
        });
    }
}).listen(52273, function(){
    console.log("52273번 포트 서버 돌아가는 중~");
});