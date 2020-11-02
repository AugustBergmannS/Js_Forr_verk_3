document.querySelector("#here").style.color = "green";
var peppe = document.querySelectorAll("p");
for(var x=0; x < peppe.length; x++){
    peppe[x].textContent = "Wooooo that's what I've been waiting for";
}
var nytxt = document.createElement("p");
nytxt.innerHTML="Ágúst Bergmann Sigurðsson";
document.body.append(nytxt);