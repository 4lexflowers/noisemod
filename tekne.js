var params = {
	scalex: hl.randomInt(5, 20),
    scaley: hl.randomInt(5, 20),
    speed: hl.randomInt(10, 15),
	spacing: hl.randomInt(20, 40)
}

var modes = [{type: "mix", amount: 6}, {type: "squares", amount: 6}, {type: "stripes", amount: 6}, {type: "triangles", amount: 8}, {type: "circles", amount: 4}];
var mode = hl.randomElement(modes);
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
			var n = noise(i / params.scalex, j / params.scaley, frameCount/1000*params.speed);
            show(i * params.spacing, j * params.spacing, params.spacing, round(n/(1/mode.amount)));
		}
	}
}

function show(x, y, w, n) {
    stroke(bgcolor); strokeWeight(1); fill("#eeeeee");
    switch(mode.type) {
        case "mix":
            switch(n) {
                default:
                case 0: rect(x, y, w, w); break;
                case 1: rect(x, y, w, w); fill(bgcolor); rect(x+w/4, y+w/4, w/2); break;
                case 2: rect(x, y, w, w); fill(bgcolor); circle(x+w/2, y+w/2, w*2/3); break;
                case 3: circle(x+w/2, y+w/2, w*2/3); break;
                case 4: beginShape(); vertex(x+w/2, y+w/4); vertex(x+w*3/4, y+w/2); vertex(x+w/2, y+w*3/4); vertex(x+w/4, y+w/2); endShape(CLOSE); break;
                case 5: fill(bgcolor); rect(x, y, w, w); break;
            }
        break;
        case "squares":
            switch(n) {
                default:
                case 0: rect(x, y, w, w); break;
                case 1: rect(x, y, w, w); fill(bgcolor); rect(x+w/4, y+w/4, w/2); break;
                case 2: beginShape(); vertex(x+w/2, y); vertex(x+w, y+w/2); vertex(x+w/2, y+w); vertex(x, y+w/2); endShape(CLOSE); break;
                case 3: rect(x, y, w/3, w/3); rect(x+2*w/3, y, w/3, w/3); rect(x+w/3, y+w/3, w/3, w/3); rect(x, y+2*w/3, w/3, w/3); rect(x+2*w/3, y+2*w/3, w/3, w/3); break;
                case 4: beginShape(); vertex(x+w/2, y+w/4); vertex(x+w*3/4, y+w/2); vertex(x+w/2, y+w*3/4); vertex(x+w/4, y+w/2); endShape(CLOSE); break;
                case 5: fill(bgcolor); rect(x, y, w, w); break;
            }
        break;
        case "triangles":
            switch(n) {
                default:
                case 0: rect(x, y, w, w); break;
                case 1: triangle(x, y, x, y+w, x+w, y+w); break;
                case 2: triangle(x, y, x+w, y, x+w, y+w); break;
                case 3: triangle(x, y, x+w, y, x, y+w); break;
                case 4: triangle(x+w, y, x+w, y+w, x, y+w); break;
                case 5: triangle(x+w/2, y, x+w, y+w, x, y+w); break;
                case 6: triangle(x, y, x+w, y, x+w/2, y+w); break;
                case 7: fill(bgcolor); rect(x, y, w, w); break;
            }
        break;
        case "circles":
            switch(n) {
                default:
                case 0:
                    circle(x+w/6, y+w/6, w/6); circle(x+3*w/6, y+w/6, w/6); circle(x+5*w/6, y+w/6, w/6);
                    circle(x+w/6-w/12, y+3*w/6, w/6); circle(x+3*w/6-w/12, y+3*w/6, w/6); circle(x+5*w/6-w/12, y+3*w/6, w/6);
                    circle(x+w/6, y+5*w/6, w/6); circle(x+3*w/6, y+5*w/6, w/6); circle(x+5*w/6, y+5*w/6, w/6);
                break;
                case 1:
                    circle(x+w/5, y+w/5, w/4); circle(x+3*w/5, y+w/5, w/4);
                    circle(x+w/2, y+w/2, w/4); circle(x+w/2+2*w/5, y+w/2, w/4);
                    circle(x+w/5, y+w-w/5, w/4); circle(x+3*w/5, y+w-w/5, w/4);
                break;
                case 2:
                    circle(x+w/4, y+w/4, w/2); circle(x+3*w/4, y+3*w/4, w/2);
                break;
                case 3:
                    circle(x+w/2, y+w/2, w*4/5);
                break;
            }
        break;
        case "stripes":
            switch(n) {
                default:
                case 0: rect(x, y, w, w); break;
                case 1:
                    beginShape(); vertex(x, y); vertex(x+w, y+w); vertex(x+w/2, y+w); vertex(x, y+w/2); endShape(CLOSE);
                    triangle(x+w, y, x+w, y+w/2, x+w/2, y);
                break;
                case 2:
                    beginShape(); vertex(x+w, y); vertex(x, y+w); vertex(x+w/2, y+w); vertex(x+w, y+w/2); endShape(CLOSE);
                    triangle(x, y, x+w/2, y, x, y+w/2);
                break;
                case 3:
                    rect(x, y+w/4, w, w/4);
                    rect(x, y+3*w/4, w, w/4);
                break;
                case 4:
                    rect(x+w/4, y, w/4, w);
                    rect(x+3*w/4, y, w/4, w);
                break;
                case 5: fill(bgcolor); rect(x, y, w, w); break;
            }
        break;
    }
}