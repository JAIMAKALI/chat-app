
var http=require('http');

var path=require('path');


var publicPath=path.join(__dirname,'../public');
var express=require('express');

var app=express();

var server=http.createServer(app);
var io=require('socket.io')(server);


app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('connection is stablished');

  socket.emit('mypen',{data:'hello sckoet io'});

  socket.on('something',(data)=>{
    console.log(data.data);
  })
});

server.listen(3000,()=>{
  console.log('app is listeinig on port 3000');
})
