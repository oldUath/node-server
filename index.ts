import * as http from 'http';
import * as fs from 'fs';
import * as p from 'path';
import * as url from 'url';

const server = http.createServer();

const publicDir = p.resolve(__dirname,'public');
server.on('request',(request,response)=>{
    const {method,url:path,headers} = request;
    const obj = url.parse(path);
    const {pathname,search} = url.parse(path);
    console.log(pathname);
    switch (pathname) {
        case '/index.html':
            fs.readFile(p.resolve(publicDir,'index.html'),(error,data)=>{
                if(error)throw error
                response.end(data.toString())
            });
            break;
        case '/style.css':
            response.setHeader('Content-type','text/css;charset=utf-8')
            fs.readFile(p.resolve(publicDir,'style.css'),(error,data)=>{
                if(error)throw error
                response.end(data.toString())
            });
            break;
        case '/index.js':
            response.setHeader('Content-type','text/js;charset=utf-8')
            fs.readFile(p.resolve(publicDir,'index.js'),(error,data)=>{
                if(error)throw error
                response.end(data.toString())
            });
            break;
        default:
            response.statusCode=404;
            response.end();
    }
});
server.listen(8888)
