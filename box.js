let div = document.querySelector("#container");


function random(e){
    return Math.floor(Math.random()*e);
}

function rnd(){
    let color = `rgb(${random(255)} ${random(255)} ${random(255)})`
    return color;
}

div.addEventListener("click", (event) => {
    event.target.style.backgroundColor = rnd();
});