let vid9, vid10, vid11, vid12;

let hand;

let theta = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    vid9 = createVideo(['videos/stablediff_video_09.mp4']);
    vid9.elt.muted = true;
    vid9.loop();
    vid9.hide();

    vid10 = createVideo(['videos/stablediff_video_10.mp4']);
    vid10.elt.muted = true;
    vid10.loop();
    vid10.hide();

    vid11 = createVideo(['videos/stablediff_video_11.mp4']);
    vid11.elt.muted = true;
    vid11.loop();
    vid11.hide();

    vid12 = createVideo(['videos/stablediff_video_12.mp4']);
    vid12.elt.muted = true;
    vid12.loop();
    vid12.hide();

    hand  = loadModel('models/hand.obj', true);
}

function draw() {
    background(0, 0, 0);

    noStroke();

    push();
        translate(-width / 4, -height / 4, 0);
        rotateX(PI/2);
        rotateY(0);
        rotateZ(theta);
        scale(2);
        texture(vid9);
        model(hand);
    pop();

    push();
        translate(width / 4, -height / 4, 0);
        rotateX(0);
        rotateY(PI/2);
        rotateZ(theta);
        scale(2);
        texture(vid10);
        model(hand);
    pop();

    push();
        translate(-width / 4, height / 4, 0);
        rotateX(0);
        rotateY(PI/-2);
        rotateZ(theta);
        scale(2);
        texture(vid11);
        model(hand);
    pop();

    push();
        translate(width / 4, height / 4, 0);
        rotateX(PI/-2);
        rotateY(0);
        rotateZ(theta);
        scale(2);
        texture(vid12);
        model(hand);
    pop();

    theta += 0.01;
}

// 3D hand model taken from: https://poly.pizza/m/btWmPNVSKUc