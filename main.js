// variables - 

// functions -

function preload(){
    img = loadImage("dog_cat.jpg");
}

function setup() {
 canvas = createCanvas(640,450);
 canvas.center();   
}

function draw(){
image(img,0,0,640,450);
fill("red");
text("Dog", 45,75);
stroke("red");
noFill();
rect(30,60,450,350)
}
