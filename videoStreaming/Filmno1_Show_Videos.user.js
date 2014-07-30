// ==UserScript==
// @name        Filmno1 Show Videos
// @namespace   tk.hoangkim.filmno1.trim
// @description Show links of videos to click
// @include     http://filmno1.com/xem-phim/online/*
// @version     1
// @grant       none
// ==/UserScript==


(function(){
var root = "<head><meta charset='utf-8'><title>Simplified</title></head><body></body>",
    //parser = new DOMParser(), // parser.parseFromString(xmlString, "text/xml");
    //htmlType = "text/xml",
    title = document.getElementsByTagName("title")[0].innerHTML,
    pattern = /\"proxy.link\":\"(.*?)\"/g,
    player = document.getElementById('xplayer'),
    link, servers;
  
var getLink = function()
{
  var ret, tmp;
  
  tmp = player.getElementsByTagName("iframe");//[0].getAttribute('src');
  if (tmp.length>0){
    ret = tmp[0].getAttribute('src');
  }
  
  if (!ret){
    tmp = pattern.exec(player.innerHTML);
    if (tmp.length > 1){
      ret = tmp[1];
    }
  }
  return ret ? "<a href='" + ret + "'>"+ title +"</a>" : "nothing here!";
}


servers = document.getElementById('servers').outerHTML;
link = getLink();  

document.getElementsByTagName("html")[0].innerHTML= root;
document.getElementsByTagName("body")[0].innerHTML= link + servers;  
})();
