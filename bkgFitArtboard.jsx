/*

Illustrator CC script
======
Pre-requisites:
- requires rgbToHex.jsx in the /helpers folder
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

*/

function main() {
	#include "helpers/rgbToHex.jsx"

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
		bkgRect.fillColor.red = 255
		bkgRect.fillColor.green = 64
		bkgRect.fillColor.blue = 129
		bkgRect.stroked = false
		bkgRectFillToHex = fullColorToHex(bkgRect.fillColor.red, bkgRect.fillColor.green, bkgRect.fillColor.blue)
		bkgRect.name = 'BKG #' + bkgRectFillToHex
	} else {
		alert('Please select an artboard')
	}
}

// functions

main()
