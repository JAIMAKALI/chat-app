
var socket=io();

var go = document.getElementById("button");
var txt = document.getElementById("message2");

 function handle(event) {
    event.preventDefault();

    message();
        
}

function message()
{
document.getElementById('time').innerHTML=new Date().toString();
var text1=document.getElementById('message2').value;
if(text1){
  socket.emit('createMessage',{from:'Admin',text:text1});
    //for clear the box
}
  if(document.getElementById) {
     document.getElementById('message2').value='';
  }
  return false;

}
//sendLocation
function sendLocation(){
if ("geolocation" in navigator) {
  /* geolocation is available */
  navigator.geolocation.getCurrentPosition(function(position) {
socket.emit('sendLocation',{lat:position.coords.latitude,lon:position.coords.longitude});

},function (){
  console.log('unavle to find');
});
} else {
  /* geolocation IS NOT available */
  console.log('geolocation is not available');
}
}


socket.on('newMessage',(data)=>{
    console.log(data);
    var node = document.createElement("LI");
    var textnode = document.createTextNode(data.from+'::'+data.text);
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
});



 socket.on('newLocation',(data)=>{
  console.log(data);
  var node = document.createElement("LI");
  var aTag = document.createElement('A');
  var textnode = document.createTextNode('my location please click here');
aTag.setAttribute('href',data.url);
aTag.setAttribute('target','_blank');
aTag.appendChild(textnode);
node.appendChild(aTag);
document.getElementById("myList").appendChild(node);
});
