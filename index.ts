import * as http from 'http';
const server = http.createServer();

server.on('request',(request,response)=>{
    // //当有人请求时会在这打印这一句
    // console.log('有人请求了');
    // //当有人请求了会给他发一个hi
    // response.end('hi');
    console.log('request.method');
    console.log(request.method);
    console.log('request.url');
    console.log(request.url);
    console.log('request.headers');
    console.log(request.headers);

});
server.listen(8888)
