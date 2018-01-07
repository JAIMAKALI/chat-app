var message=(from,text)=>{
  return {from,text};
}

var sendLocation=(lat,lon)=>{
  return {
    url:`https://www.google.co.in/maps/?q=${lat},${lon}`
  }
}

module.exports={message,sendLocation};
