import * as http from 'http';
import * as fs from 'fs';
import * as p from 'path';
import * as url from 'url';

const server = http.createServer();

const publicDir = p.resolve(__dirname,'public');
server.on('request',(request,response)=>{
    const {method,url:path,headers} = request;
    const {pathname,search} = url.parse(path);
    const filename = pathname.substr(1)
    fs.readFile(p.resolve(publicDir,filename),(error,data)=>{
        if(error) {
            response.statusCode=404;
            response.end();
        }else{
            response.end(data.toString())
        }
    });
});
server.listen(8888)
