
function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		push();
		var spectrum = fourier.analyze();
		noStroke();
		
		fill(0,255,0)
		for (var i = 0; i< spectrum.length; i++){
			// var x = map(i, 0, spectrum.length, 0, width);
		    // var h = -height + map(spectrum[i], 0, 255, height, 0);
			// rect(x, height, width / spectrum.length, h );
			//console.log(h)
			var r = map(spectrum[i], 0, 255, 0, 255)
			var g = map(spectrum[i], 0, 255, 255, 0)
			fill(r, g, 0)
			var y = map(i, 0, spectrum.length, 0, height);
			var w = map(spectrum[i], 0, 255, 0, width)
			
			rect(0, y, w, height/spectrum.length)
  		}
	
		pop();
	};
}
