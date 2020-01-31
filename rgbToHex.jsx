function fullColorToHex(r, g, b) {
	var red = singleColorToHex(r)
	var green = singleColorToHex(g)
	var blue = singleColorToHex(b)
	return red + green + blue
}

function singleColorToHex(rgb) {
	var hex = Number(rgb).toString(16)
	if (hex.length < 2) {
		hex = '0' + hex
	}
	return hex
}
