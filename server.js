var http = require('http'); // 1 - ���J Node.js ��ͼҲ� http
 
var server = http.createServer(function (req, res) {   // 2 - �إ�server
 res.send('OK');
    // �b���B�z �Ȥ�ݦV http server �o�e�L�Ӫ� req�C
 
});
 
server.listen(5000); //3 - �i�J����������ť port, �N�O localhost:xxxx �� xxxx
 
console.log('Node.js web server at port 5000 is running..')