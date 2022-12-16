let vid5, vid6, vid7, vid8;

let theta = 0;
let spin = 0;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    vid5 = createVideo(['videos/stablediff_video_05.mp4']);
    vid5.elt.muted = true;
    vid5.loop();
    vid5.hide();

    vid6 = createVideo(['videos/stablediff_video_06.mp4']);
    vid6.elt.muted = true;
    vid6.loop();
    vid6.hide();

    vid7 = createVideo(['videos/stablediff_video_07.mp4']);
    vid7.elt.muted = true;
    vid7.loop();
    vid7.hide();

    vid8 = createVideo(['videos/stablediff_video_08.mp4']);
    vid8.elt.muted = true;
    vid8.loop();
    vid8.hide();
}

function draw() {
    background(0, 0, 0);

    orbitControl();

    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    let v = createVector(dx, dy, 0)

    ambientLight(255, 255, 255, v);
    directionalLight(255, 255, 255, v);
    v.div(100);

    push();
        rotateX(0);
        rotateY(spin);
        rotateZ(0);
        translate(0, 0, 0);
        texture(vid8);
        sphere(200, 50, 50, 50);
    pop();

    push();
        rotateX(0);
        rotateY(theta);
        rotateZ(0)
        translate(650, 0, 0);
        texture(vid7);
        sphere(100, 50, 50, 50);

        push();
            rotateX(0);
            rotateY(theta * 0.5);
            rotateZ(0);
            translate(200, 0, 0);
            texture(vid6);
            sphere(75, 50, 50, 50);
        pop();

        push();
            rotateX(0);
            rotateY(-theta * 2);
            rotateZ(0)
            translate(350, 0, 0);
            texture(vid5);
            sphere(50, 50, 50, 50);
        pop();
    pop();

    theta += 0.02;
    spin  -= 0.01;
}

//based on code found here: http://learningprocessing.com/examples/chp14/example-14-16-solar-system