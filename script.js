
let zSpacing = -1000,
defPos = zSpacing / 5,
$frames = document.getElementsByClassName('frame'),
frames = Array.from($frames),
zVals = [];

window.onscroll = function() {
	let top = document.documentElement.scrollTop,
		delta = defPos - top;

	defPos = top;

	frames.forEach(function(n, i){
		zVals.push((i * zSpacing) + zSpacing);
		zVals[i] += delta * -2;
		let frame = frames[i],
			transform = `translateZ(${zVals[i]}px)`;
			opacity = zVals[i] < Math.abs(zSpacing) / 1.5 ? 1 : 0;
		frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
	})
}


	window.onload = function () {
		window.scrollTo(0,25);
	}