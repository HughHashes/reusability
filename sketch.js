var img;
var budi;
var hulk;
var rr;
var celtics;
var promp = prompt("What do you like more, Youtube, Basketball, or Fighting?");



function preload() {
  budi = loadImage("budi.png");
  hulk = loadImage("download.jpg");
  rr = loadImage("rr.jpg");
  celtics = loadImage("celtics.jpg");
  
}

function setup(){
    createCanvas( 600, 400);
    background(0);
    
    
    
}

function draw(){
    
    
    if(mouseIsPressed){
        pic(mouseX, mouseY);
    }
}


function pic(x, y){
    
    if(promp == "Basketball"){
        img = image(celtics, x - 25, y + 15, 100, 100);
    }
    if(promp == "Fighting"){
        img = image(hulk, x - 25, y + 15, 100, 100);
    }
    if(promp == "Youtube"){
        img = image(rr, x - 30, y + 4, 100, 100);
    }
    
        
    img;
    image(budi, x, y, 50, 50);
    
}

function hogan(x, y){
    image(hulk, x - 25, y + 15, 100, 100);
    image(budi, x, y, 50, 50);
    
}

function roll(x, y){
    image(rr, x - 25, y , 100, 100);
    image(budi, x, y, 50, 50);
    
}