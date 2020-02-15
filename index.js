const fs = require('fs');
const http = require('http');
const url = require('url');

//FIles

// const textIn = fs.readFileSync('./input.txt', 'utf-8');
// console.log(textIn);

// const textOut =  `this is what we know ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync('./output.txt', textOut);
// console.log('file Written ');


//non-blocking, asunc

// fs.readFile('./start.txt', 'utf-8', (err,data1) => { 
//     fs.readFile( data1.txt, 'utf-8', (err,data2) => { 
//         console.log(data2);
//    });
// });
// console.log('will read file!'); 

//server

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if( pathName === '/' || pathName === '/overview') {
        res.end('this is overview');
    } else if(pathName === '/product') {
        res.end('this is product');
    } else if(pathName === '/api') {
        fs.readFile('./data.json', 'utf-8', (err, data) => {
           const productData = JSON.parse(data);
           res.writeHead(200, { 'Content-type' : 'application/json'})
            res.end(data);
        }); 
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header' : 'page not found!' 
        });
        res.end( '<h1>my-own-header</h1>');
    }
});

server.listen(8081, '127.0.0.1', () => {
     console.log('server running at port 8081');
});
//routing without dependies


