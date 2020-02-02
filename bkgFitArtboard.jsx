/*

- File: bkgFitArtboard.jsx
- Description: Illustrator CC script
- Version: 1.1
- Author: Simone Fiorucci https://github.com/simofiorucci
- Credits: colorPicker.js is created by smallpath https://github.com/smallpath/adobe-color-picker

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
		// let the user pick a desired color
		pickedColor = floatToByte(colorPicker());
		// create a new layer, rename it, and send it to back
		var bkgLayer = activeDoc.layers.add()
		bkgLayer.name = "background-color"
		bkgLayer.zOrder(ZOrderMethod.SENDTOBACK)
		// get the arboard size and position
		var activeArt = arts[arts.getActiveArtboardIndex()]
		var artSizeAndPos = activeArt.artboardRect
		// create the background rectangle, fit size and position
		var bkgRect = bkgLayer.pathItems.rectangle(
			artSizeAndPos[0],
			artSizeAndPos[1],
			artSizeAndPos[2],
			-artSizeAndPos[3]
		)
		// set color and name
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
