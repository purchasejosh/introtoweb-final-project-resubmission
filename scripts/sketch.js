let vid1, vid2, vid3, vid4;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    vid1 = createVideo(['videos/stablediff_video_01.mp4']);
    vid1.elt.muted = true;
    vid1.loop();
    vid1.hide();

    vid2 = createVideo(['videos/stablediff_video_02.mp4']);
    vid2.elt.muted = true;
    vid2.loop();
    vid2.hide();

    vid3 = createVideo(['videos/stablediff_video_03.mp4']);
    vid3.elt.muted = true;
    vid3.loop();
    vid3.hide();

    vid4 = createVideo(['videos/stablediff_video_04.mp4']);
    vid4.elt.muted = true;
    vid4.loop();
    vid4.hide();
}

function draw() {
background(0, 0, 0);
    
push();
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.01);
    rotateZ(frameCount * -0.01);
    texture(vid4);
    torus(400, 50, 50, 50);
pop();

push();
    rotateX(frameCount * 0.015);
    rotateY(frameCount * 0.015);
    rotateZ(frameCount * 0.015);
    texture(vid3);
    torus(300, 50, 50, 50);
pop();

push();
    rotateX(frameCount * -0.02);
    rotateY(frameCount * -0.02);
    rotateZ(frameCount * -0.02);
    texture(vid2);
    torus(200, 50, 50, 50);
pop();

push();
    rotateX(frameCount * 0.025);
    rotateY(frameCount * 0.025);
    rotateZ(frameCount * 0.025);
    texture(vid1);
    torus(100, 50, 50, 50);
pop();
}