var params = {
	scale: 10,
    speed: 5,
	spacing: 30
}

var mode = "squares";
var seed = 0;
var bgcolor = '#111';
var grid = [];

function setup() {
	w = min(windowWidth, windowHeight)
    createCanvas(w, w);
	params.spacing = w/params.spacing;
	seed = hl.random(1000);
	noiseSeed(seed);
}

function draw() {
	create();
    hl.token.capturePreview();
}

function create() {
	background(bgcolor);
	for(var i = 0; i < width/params.spacing; i++) {
		for(var j = 0; j < height/params.spacing; j++) {
			var n = noise(i / params.scale, j / params.scale, frameCount/1000*params.speed);
            show(i * params.spacing, j * params.spacing, params.spacing, round(n/(1/6)));
		}
	}
}

function show(x, y, w, n) {
    stroke(bgcolor); strokeWeight(1); fill("#eeeeee");
    switch(n) {
        default:
        case 0: rect(x, y, w, w); break;
        case 1: rect(x, y, w, w); fill(bgcolor); rect(x+w/4, y+w/4, w/2); break;
        case 2: rect(x, y, w, w); fill(bgcolor); circle(x+w/2, y+w/2, w*2/3); break;
        case 3: circle(x+w/2, y+w/2, w*2/3); break;
        case 4: beginShape(); vertex(x+w/2, y+w/4); vertex(x+w*3/4, y+w/2); vertex(x+w/2, y+w*3/4); vertex(x+w/4, y+w/2); endShape(CLOSE); break;
        case 5: fill(bgcolor); rect(x, y, w, w); break;
    }
}