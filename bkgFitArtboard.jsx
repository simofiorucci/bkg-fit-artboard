/*

Illustrator CC script
======
Initial scenario:
- An active .ai document
======
What this script does:
1. Creates a rectangle
2. Sets its border color to null
2. Sets its fill color to a desired value
3. Fits its size and position to the selected artboard ones
4. Send it to back (z-position)
======
Options:
- Prompts a windows with a color picker to let the user choose the background color
======
Usage:
1. Create a new document or open an existing one
2. Run this script

*/

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
}

// functions

main()
