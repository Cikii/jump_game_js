const dino = document.getElementById("dino");
const kaktus = document.getElementById("kaktus");
let sekundy = 0;
let minuty = 0;
let milisekundy = 0;
let myVar;
let stopky2 = window.setInterval(stopky, -10);

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
        alert("Konec hry. Čas je: " + minuty + ":" + sekundy + "." + milisekundy)
        clearTimeout(myVar);
        window.location.reload();
    }

}, 10);

document.addEventListener("keydown", function (){
       jump();
            
});


function stopky(){
    milisekundy++;
    if(milisekundy === 100){
        milisekundy = 0;
        sekundy ++;

        if(sekundy === 60 ){
            sekundy = 0;
            minuty++;
        }
    }
    
    document.getElementById("display").innerHTML = minuty + ":" + sekundy + "." + milisekundy;
}