var fs=require('fs');
var http=require('http');

http.createServer(function(request, response){
    fs.readFile('HTMLPage.html', function(error, data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    });
}).listen(3000, function(){
    console.log('3000번 포트로 서버 돌아가는 중');
});