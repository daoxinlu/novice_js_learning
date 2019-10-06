var links=["https://www.baidu.com","https://www.tencent.com","https://www.bing.com","https://www.360.com"];
var connect = document.getElementById("randlink");
var rand = Math.floor(Math.random()*5);

document.write('<p>随机数为'+rand+'</p>');
connect.innerHTML = '<a href="'+ links[rand]+'">Random Site!</a>';