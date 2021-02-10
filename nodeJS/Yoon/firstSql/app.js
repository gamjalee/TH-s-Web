var fs=require('fs');
var ejs=require('ejs');
var mysql=require('mysql');
var express=require('express');
var bodyParser=require('body-parser');
const { nextTick } = require('process');

var client=mysql.createConnection({
    user:"root",
    password:"",
    database:"Company"
});
client.connect(function(err){  
    if(!err) {  
        console.log("Database is connected ... \n\n");    
    } else {  
        console.log(err.stack);
        console.log("Error connecting database ... \n\n");    
    }  
});

var app=express();
app.use(bodyParser.urlencoded({
    extended:false
}));

app.listen(52273, function(){
    console.log('52273번 서버 포트 돌아가는 중');
    
});

app.get('/', function(req, res, next){
    fs.readFile('list.html', 'utf-8', function(err, data){
        client.query('select * from products;', function(err, results){
            if(err) {
                next(err);
                return;
            }
            res.send(ejs.render(data, {
                data: results
            }));
        });
    });
});
app.get('/delete/:id', function(req, res, next){
    client.query('delete from products where id=?', [req.params.id], function(err){
        if(err) next(err);
        else res.redirect('/');
    });
});
app.get('/insert', function(req, res, next){
    fs.readFile('insert.html', 'utf-8', function(err, data){
        if(err) next(err);
        else res.send(data);
    })
});
app.post('/insert', function(req, res, next){
    var body=req.body;
    client.query('insert into products (name, modelnumber, series) values (?, ?, ?)', [
        body.name, body.modelnumber, body.series
    ], function(err){
        if(err) next(err);
        else res.redirect('/');
    });
});
app.get('/edit/:id', function(req, res, next){
    fs.readFile('edit.html', 'utf-8', function(err, data){
        client.query('select * from products where id=?', [
            req.params.id
        ], function(err, result){
            if(err) {
                next(err);
                return;
            }
            res.send(ejs.render(data, {
                data:result[0]
            }));
        });
    });
});
app.post('/edit/:id', function(req, res, next){
    var body=req.body;
    client.query('update products set name=?, modelnumber=?, series=? where id=?', [
        body.name, body.modelnumber, body.series, req.params.id
    ], function(err){
        if(err) {
            next(err);
        }
        else{
            console.log('edit query not problem!')
            res.redirect('/');
        }
    });
});

app.use(function(err, req, res, next) {
    console.log('에러 내용은 아래와 같다');
    console.log(err);
    fs.readFile('error.html', 'utf-8', function(err, data){
        res.status(500).send(data);
    });
})
