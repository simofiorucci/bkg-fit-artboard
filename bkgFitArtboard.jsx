/*

Illustrator CC script
======
Pre-requisites:
- requires rgbToHex.jsx and colorPicker.js in the /helpers folder
======
Initial scenario:
- An active .ai document
======
What this script does:
1. Creates a new layer and renames it
2. Sends it to back (z-position)
3. Creates a rectangle inside the new layer
4. Fits its size and position to the selected artboard ones
5. Sets its fill color to a desired value
6. Sets its border color to null
7. Renames the rectangle with reference to the HEX code of the fill color
======
Options:
- Prompts a windows with a color picker to let the user choose the background color
======
Usage:
1. Create a new document or open an existing one
2. Run this script
======
Credits:
- colorPicker.js is created by smallpath https://github.com/smallpath/adobe-color-picker

*/

#include "helpers/rgbToHex.jsx"
#include "helpers/colorPicker.js"

function main() {
	// check if there is an active document to work on
	try {
		var activeDoc = app.activeDocument
	} catch (e) {
		alert(
			'Create a new document or open an existing one before running this script'
		)
		return
	}
	// main code
	var arts = activeDoc.artboards
	// check if there is an active artboard
	if (arts.length > 0) {
		pickedColor = floatToByte(colorPicker());
		var bkgLayer = activeDoc.layers.add()
		bkgLayer.name = "background-color"
		bkgLayer.zOrder(ZOrderMethod.SENDTOBACK)
		var activeArt = arts[arts.getActiveArtboardIndex()]
		var artSizeAndPos = activeArt.artboardRect
		var bkgRect = bkgLayer.pathItems.rectangle(
			artSizeAndPos[0],
			artSizeAndPos[1],
			artSizeAndPos[2],
			-artSizeAndPos[3]
		)
		setFillAndStroke(bkgRect, pickedColor, false)
		nameWithFillColor(bkgRect, 'BKG')
	} else {
		alert('Please select an artboard')
	}
}

// functions

function floatToByte(floatColor) {
	for (var i=0; i<3; i++) {
		floatColor[i] = floatColor[i]*255
	}
	return floatColor
}

function setRgbFill(item, color) {
	item.fillColor.red = color[0]
	item.fillColor.green = color[1]
	item.fillColor.blue = color[2]
}

function setFillAndStroke(rect, color, isStroked) {
	setRgbFill(rect, color)
	rect.stroked = isStroked
}

function nameWithFillColor(item, name) {
	itemColorToHex = fullColorToHex(item.fillColor.red, item.fillColor.green, item.fillColor.blue)
	item.name = name + ' #' + itemColorToHex
}

main()
