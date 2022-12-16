var cols, rows;
var scl = 10;
var w = 1400;
var h = 1000;

var flying = 0;

var terrain = [];

let vid1

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  
    cols = w / scl;
    rows = h / scl;

    for (var x = 0; x < cols; x++) {
        terrain[x] = [];
        for (var y = 0; y < rows; y++) {
            terrain[x][y] = 0; //specify a default value for now
        }
    }

    vid1 = createVideo(['videos/stablediff_video_01.mp4']);
    vid1.elt.muted = true;
    vid1.loop();
    vid1.hide();
}

function draw() {
    background(0, 0, 0);

    flying -= 0.1;
    var yoff = flying;
    for (var y = 0; y < rows; y++) {
        var xoff = 0;
        for (var x = 0; x < cols; x++) {
            terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
            xoff += 0.2;
        }
        yoff += 0.2;
    }

    let locX = mouseX - width/2;
    let locY = mouseY - height/2;
    pointLight(255, 255, 255, locX, locY, 100);

    translate(0, 50, 0);
    rotateX(PI / 3);
    noStroke();
    texture(vid1);
    translate(-w / 2, -h / 2);
    for (var y = 0; y < rows - 1; y++) {
        beginShape(TRIANGLE_STRIP);
        for (var x = 0; x < cols; x++) {
            vertex(x * scl, y * scl, terrain[x][y]);
            vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
        }
        endShape();
    }
}

//based on code found here: https://editor.p5js.org/codingtrain/sketches/OPYPc4ueq