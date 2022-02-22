// variables - 
Status = "";
Objects = [];

// functions -

function preload() {
    img = loadImage("picz.png");
}

function setup() {
    canvas = createCanvas(640, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    ObjectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() {
    image(video, 0, 0, 640, 450);
    if (Status != "") {
        r= random(255);
        g= random(255);
        b= random(255);
        
        for (i = 0; i < Objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("no_of_objects").innerHTML = "Number Of Objects : " + Objects.length;
            fill(r,g,b);
            percent = floor(Objects[i].confidence * 100);
            text(Objects[i].label + " " + percent + "%",Objects[i].x + 10,Objects[i].y + 10);
            noFill();
            stroke(r,g,b);
            rect(Objects[i].x,Objects[i].y,Objects[i].width,Objects[i].height);
        }
    }
    // stroke("#fcad03");
    // fill("#fcad03");
    // text("Dog", 45, 75);
    // noFill();
    // rect(30, 60, 450, 350, 15);
    // stroke("purple");
    // fill("purple");
    // text("Cat", 320, 120);
    // noFill();
    // rect(300, 90, 270, 320, 15);

}

function modelLoaded() {
    Status = true;
    ObjectDetector.detect(video, gotResults);
    console.log("Model Is Loaded");
}

function gotResults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        Objects = result;
    }
}
