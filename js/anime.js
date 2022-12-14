// Wrap every letter in a span
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// INFITE LOOP
anime
	.timeline({
		loop: true
	})
	.add({
		targets: '.ml7 .letter',
		translateY: ['1.1em', 0],
		translateX: ['0.55em', 0],
		translateZ: 0,
		rotateZ: [180, 0],
		duration: 750,
		easing: 'easeOutExpo',
		delay: (el, i) => 50 * i
	})
	.add({
		targets: '.ml7',
		duration: 1000,
		easing: 'easeOutExpo',
		opacity: 0,
		delay: 1000
	});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml9 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({
		loop: true
	})
	.add({
		targets: '.ml9 .letter',
		scale: [0, 1],
		duration: 1500,
		elasticity: 600,
		delay: (el, i) => 45 * (i + 1)
	})
	.add({
		targets: '.ml9',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000
	});

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime
	.timeline({
		loop: true
	})
	.add({
		targets: '.ml2 .letter',
		scale: [4, 1],
		opacity: [0, 1],
		translateZ: 0,
		easing: 'easeOutExpo',
		duration: 950,
		delay: (el, i) => 70 * i
	})
	.add({
		targets: '.ml2',
		opacity: 0,
		duration: 1000,
		easing: 'easeOutExpo',
		delay: 1000
	});