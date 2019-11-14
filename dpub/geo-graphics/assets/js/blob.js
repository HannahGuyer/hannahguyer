$( document ).ready(function() {
    
console.clear();

gsap.registerPlugin(SplitText);

select = e => document.querySelector(e);

let fontSize = gsap.getProperty(':root', '--fontSize');
let txt = select('.txt');
let wheel = select('.wheel');
let numLines = 5;
let radius = (fontSize/2)/Math.sin((180/numLines)*(Math.PI/180)); // from Pythagoras Eq
let angle = 360/numLines;
let origin = `0% 50% -${radius*2}px`;
let mySplitText = new SplitText(txt, {type:"chars", charsClass:"char", position: "relative" }); 

function cloneTxt() {
	for (i=0; i<numLines-1; i++) {
		var clone = txt.cloneNode(true);
		wheel.appendChild(clone);
	}
}

function positionTxt() {
	gsap.set('.container__inner', {
		rotation: 65,
		rotationX: 0,
		rotationY: 20,
		y: -150
	});
	gsap.set('.txt', {
		rotationX: function(index) {
			return angle*index;
		},
		z: radius*2,
		transformOrigin: origin
	});
	gsap.set('.char', {
		rotateX: -90,
		transformOrigin: "50% 50%"
	});
}

cloneTxt();
positionTxt();

gsap.set('.container', { autoAlpha: 1 });

let charEase = "power4.inOut";
let gtl = gsap.timeline();

function pulse() {
	tl = gsap.timeline( {
		defaults: {
			ease: 'none',
			z: 80,
			ease: 'sine.inOut',
			
			stagger: {
				each: 0.06,
				yoyo: true,
				repeat: -1
			},
			duration: 0.5
		}
	});
	for(i=0; i<numLines; i++) {
		tl.to(`.txt:nth-of-type(${i+1}) .char`, {}, 0)
		tl.to(`.txt:nth-of-type(${i+1})`, {
			fontWeight: 100,
			fontStretch: '400%'
		}, 0)
	}
	return tl;
}

gtl.add(pulse());

gsap.to(wheel, {
	rotationX: -360,
	transformOrigin: "50% 50%",
	repeat: -1,
	ease: 'none',
	duration: 8
});
