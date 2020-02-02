# Create a colorful backgroud that fits the artboard

> An Adobe Illustrator JS script for setting a plain color as the background of your active document.

Setting a background color is usually the first step when you start creating your art, design or illustration. Doing it manually requires a series of easy but boring steps. This simple piece of code helps you speed up the process — just pick your desired background color and run this script.

## Pre-requisites

Requires `rgbToHex.jsx` and `colorPicker.js` in the `/helpers` folder

## Initial scenario

An active `.ai` document.

## What this script does

#### Code breakdown

This is basically what happens behind the scenes:

1. Lets the user select a desired background color using a color picker (or directly typing its HEX/HSB/RGB code).
2. Creates a new layer and renames it.
3. Sends it to back (Z-position).
4. Creates a rectangle inside the new layer.
5. Fits its size and position to the selected artboard ones.
6. Sets its fill color to the desirede one.
7. Sets its border color to null.
8. Renames the rectangle with reference to the HEX code of the fill color

## Usage

It couldn't be easier:

1. Create a new document or open an existing one
2. Run this script

## Credits

`colorPicker.js` is created by [smallpath](https://github.com/smallpath) — check [this repo](https://github.com/smallpath/adobe-color-picker) for alle the info.
