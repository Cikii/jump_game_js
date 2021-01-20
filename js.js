const dino = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");

function jump() {
    if (dino.classList != "jump"){
    dino.classList.add("jump");

    setTimeout(function(){
        dino.classList.remove("jump");
    }, 300);
  }
}
let zivot = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top")); 
    let kaktusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left")); 

    if (kaktusLeft<38 && kaktusLeft > 0 && dinoTop>= 140){
        alert("Konec hry.")
    }

}, 10);

document.addEventListener("keydown", function (event){
    jump();

});