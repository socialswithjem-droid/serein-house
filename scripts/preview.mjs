import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('out');const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.webp':'image/webp','.svg':'image/svg+xml','.json':'application/json','.txt':'text/plain','.woff2':'font/woff2'};
http.createServer((req,res)=>{let target;try{target=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400);res.end('Bad request');return;}let file=path.resolve(root,'.'+target);if(!file.startsWith(root+path.sep)&&file!==root){res.writeHead(403);res.end();return;}if(fs.existsSync(file)&&fs.statSync(file).isDirectory())file=path.join(file,'index.html');if(!fs.existsSync(file)){file=path.join(root,'404.html');res.statusCode=404;}res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');fs.createReadStream(file).pipe(res);}).listen(3000,'127.0.0.1',()=>console.log('Serein House preview: http://127.0.0.1:3000'));
