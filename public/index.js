var socket=io();


function message()
{

var text1=document.getElementById('message2').value;
  socket.emit('createMessage',{from:'manish',text:text1});

}




socket.on('newMessage',(data)=>{
  console.log(data);
  var node = document.createElement("LI");
    var textnode = document.createTextNode(data.text);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
})
