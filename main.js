nosex = "";
nosey = "";

function preload() {
    pic=loadImage("mustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posemodel = ml5.poseNet(video, modelloaded);
    posemodel.on("pose", getresults);
}

function draw() {
    image(video, 0, 0, 300, 300);
    // fill("red");
    // stroke("black");
    // circle(nosex, nosey, 30);
    image(pic,nosex-20,nosey,50,35);
}

function take_snapshot() {
    save("my_pic.png");
}

function modelloaded() {
    console.log("model loaded succesfully");
}

function getresults(r) {
    if (r.length > 0) {
        console.log(r);
        nosex = r[0].pose.nose.x;
        nosey = r[0].pose.nose.y;
    }
}