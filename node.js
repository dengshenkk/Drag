
var http = require('http');
var fs = require('fs');

var num=0;
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, { 'Content-Type': 'text/html;charset=UTF-8' });
	
	 request.addListener("data", function (postDataChunk) {
       cosole.log(postDataChunk)
    });
	
	//读取json文件并返回
	fs.readFile('city.json',function(err,res){
		if(!err){
			console.log('文件读取成功!'+num++)
			response.end(res)
			
		}
		
	})

	// 发送响应数据 "Hello World"
	//response.end('Hello World\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');