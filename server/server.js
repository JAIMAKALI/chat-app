
var http=require('http');

var path=require('path');


var publicPath=path.join(__dirname,'../public');
var express=require('express');

var app=express();

var server=http.createServer(app);
var io=require('socket.io')(server);

var {message}=require('./utils/message');
var port=process.env.PORT || 3000;

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
  console.log('connection is stablished');


  socket.emit('newMessage',message('manish','something happen'));

socket.on('createMessage',(data)=>{
  console.log('hello',data);
  io.emit('newMessage',message(data.from,data.text));
});

socket.on('something',(data)=>{
  console.log('hello',data);
  
});

socket.on('disconnect',()=>{
  console.log('user disconnected');
});

});



server.listen(port,()=>{
  console.log('app is listeinig on port 3000');
})
