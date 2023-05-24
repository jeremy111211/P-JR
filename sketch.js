var rock, player, coin, plant, cliff, background, bg

var rockImg, playerImg, coinImg, plantImg, cliffImg, backgroundImg




function preload(){
    
rockImg = loadImage("Rocks Image.png");
playerImg = loadImage("Character Image.png");
coinImg = loadImage("Coin Image.png");
plantImg = loadImage("image-removebg-preview.png");
cliffImg = loadImage("Cliff Image.png");
backgroundImg = loadImage("Background.png");





}

function setup(){
    createCanvas(windowWidth,windowHeight);

    bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
    bg.addImage("background",backgroundImg)




}

function draw(){
    background("white");

    drawSprites();
}