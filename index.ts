import * as http from 'http';
import * as fs from 'fs';
import * as p from 'path';
import * as url from 'url';

const server = http.createServer();

const publicDir = p.resolve(__dirname,'public');
server.on('request',(request,response)=>{
    const {method,url:path,headers} = request;
    const {pathname,search} = url.parse(path);

    if(method !== 'GET'){
        response.statusCode=405;
        response.setHeader('Content-type','text/html;charset=utf-8')
        response.end('这是静态服务器，不能接收post等动态请求');
       return;
    }

    let filename = pathname.substr(1)
    if(filename === ''){
        filename = 'index.html'
    }
    fs.readFile(p.resolve(publicDir,filename),(error,data)=>{
        if(error) {
            if(error.errno === -4058){
                response.statusCode=404;
                fs.readFile(p.resolve(publicDir,'404.html'),(error,data)=>{
                    response.end(data);
                })
            }
        }else{
            response.end(data)
        }
    });
});
server.listen(8888)
