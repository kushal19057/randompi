
const r = 200;
var totalDots = 0;
var circleDots = 0;
var bestEstimate = 0;

function setup() {
    createCanvas(500, 500);
    background(0);
    translate(width/2, height/2);
    stroke(255);
    strokeWeight(4);

    noFill();
    ellipse(0, 0, 2*r, 2*r);
    rectMode(CENTER);
    rect(0, 0, 2*r, 2*r);
    totalDots = 0;
    circleDots = 0;
    bestEstimate = 0;
}

function draw() {
    translate(width/2, height/2);
    strokeWeight(1);
    for(let i = 0; i < 10; i+=1) {
        const x = random(-r, r);
        const y = random(-r, r);
        const d = sqrt(x*x + y*y);
        if(d < r) {
            stroke(100, 255, 0);
            circleDots += 1;
        } else {
            stroke(0, 191, 255);
        }
        totalDots += 1;
        point(x, y);
    }
    const pi = 4* circleDots/totalDots;
    document.getElementById('currentpi').textContent = "π = 4 * " + circleDots + "/" + totalDots + " = "  + pi.toFixed(5);
}

function reset() {
    setup();
}