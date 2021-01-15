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

    //post请求接收数据
    const array=[];
    request.on('data',(chunk)=>{
        array.push(chunk)
    });
    request.on('end',()=>{
        const body=Buffer.concat(array).toString();
        console.log('body:');
        console.log(body);
        //响应，发送给到请求方
        response.end('hi')
    })

});
server.listen(8888)
