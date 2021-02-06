var body=document.body;
var table=document.createElement('table');
for(var i=1;i<=3;i++){
    var R=document.createElement('tr');
    for(var j=1;j<=3;j++){
        var C=document.createElement('td');
        R.appendChild(C);
    }
    table.appendChild(R);
}
body.appendChild(table);