// Celebrate button function
function celebrate(){

// play music
document.getElementById("bgMusic").play();

// show message
document.getElementById("wishText").innerHTML =
"🌸 Happy Anniversary Premlata Ma'am! May your life always be filled with love and happiness 💖";

// start gallery rotation
document.querySelector(".gallery").classList.add("rotate");

// start flower rain
startFlowerRain();

}


// start flower rain
function startFlowerRain(){

setInterval(createFlower,100);

}


// create flowers
function createFlower(){

const flower = document.createElement("div");

flower.className = "flower";

flower.innerHTML = "🌸";

// random position
flower.style.left = Math.random()*100 + "vw";

// random size
flower.style.fontSize = (10 + Math.random()*20) + "px";

// random animation duration
flower.style.animationDuration = (4 + Math.random()*3) + "s";

document.body.appendChild(flower);

// remove flower after animation
setTimeout(function(){
flower.remove();
},7000);

}