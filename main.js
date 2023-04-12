var http = require("http"); //서버 사용을 위해 http모듈 import

http.createServer(function(request, response){ //서버 생성
    //HTTP 헤더 전송
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    //Response Body에 "Hello World"로 응답 설정
    response.end("Hello World");
}).listen(3000);
//listen함수로 포트번호 3000인 서버를 실행

console.log("Server running at http://127.0.0.1:3000");