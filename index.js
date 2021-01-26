var button = document.getElementById("button");
var p = document.getElementById("p");
var p2 = document.getElementById("p2");
var message = document.getElementById("message");

var xhttp = new XMLHttpRequest();
xhttp.open("POST", "https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec", true);


button.addEventListener('click',function(){
    var value = message.value;
    p.innerHTML=value;
    message.value='';

    var json = "{ \"cle\": \"CLE-TEST-IOT\", \"donnees\": \""+value+"\" }";
    //json['donnees']=value;
    
    //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    p2.innerHTML = xhttp.send(json);
});