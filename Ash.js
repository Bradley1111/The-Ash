//Zen engine Variables
cd = 1
is1 = 0
is2 = 0
is3 = 0
ram = 100
lam = 6
px = 100
py = 100
iss = 1
is1c = [255,255,255]
is2c = [255,255,255]
is3c = [255,255,255]
ie = 0

function preload() {
//Zen engine images

s = loadSound("Assets/s.mp3");
cf = loadImage("Assets/phcf1.png")
cb = loadImage("Assets/phcb2.png")
cr = loadImage("Assets/phcr3.png")
cl = loadImage("Assets/phcl4.png")
}


function setup() {
createCanvas(windowWidth - 25, windowHeight - 25);
}

function draw() {
  background(105,255,255)
  // Zen Engine Start

// Movement System
  if (cd === 1) {image(cf,px,py,25,25)


  }

  if (cd === 2) {image(cb,px,py,25,25)

  }

  if (cd === 3) {image(cr,px,py,25,25)


  }

  if (cd === 4) {image(cl,px,py,25,25)


  }


if (key == 'w') {cd = 1 
py = py - 1
}
if (key == 's') {cd = 2
py = py + 1
}
if (key == 'd') {cd = 3
px = px + 1
}
if (key == 'a') {cd = 4
px = px - 1
}


// Movement System Stop

// Inventory System

if (key === '1') {iss = 1}
if (key === '2') {iss = 2}
if (key === '3') {iss = 3}


if (iss === 1) {is1c = [155,155,155]}
	else {is1c = [255,255,255]}

if (iss === 2) {is2c = [155,155,155]}
	else {is2c = [255,255,255]}

		if (iss === 3) {is3c = [155,155,155]}
	else {is3c = [255,255,255]}

fill(is1c)
rect (windowWidth / 2.08, windowHeight - 70,30,30)
fill(is2c)
rect (windowWidth / 1.98, windowHeight - 70,30,30)
fill(is3c)
rect (windowWidth / 1.88, windowHeight - 70,30,30)
//M92 inv check
fill(0)
//M92 inv check 1
if (is1 == 1) {
text('M92',windowWidth / 2.07,windowHeight - 60,30,30)

}
//M92 inv check 2
if (is2 == 1) {
text('M92',windowWidth / 1.97, windowHeight - 60,30,30)

}
//M92 inv check 3
if (is3 == 1) {

text('M92',windowWidth / 1.87, windowHeight - 60,30,30)
}
//Item equipped reset check
if (iss === 1 && is1 === 0) {ie = 0}
if (iss === 2 && is2 === 0) {ie = 0}
if (iss === 3 && is3 === 0) {ie = 0}


//M92 equipped checked
if (iss === 1 && is1 === 1) {ie = 1}
if (iss === 2 && is2 === 1) {ie = 1}
if (iss === 3 && is3 === 1) {ie = 1}
32

//M92 equipped Check Finish







//M92 Use

if (ie === 1) {


//M92 Object Start

if (cd === 1) {

rect(px + 7,py - 10.5,10,10)

}

if (cd === 2) {

rect(px + 7,py + 25,10,10)

}

if (cd === 3) {

rect(px + 25,py + 7,10,10)


}

if (cd === 4) {

rect(px - 10.5,py + 7,10,10)

}
//M92 Object End

//M9s Shoot

mousePressed = function() {

if (ie === 1) {
if (lam > 0) {
s.play()
lam = lam - 1

}// if 2 end

}// if 1 end

}// function end


}//M92 use end

//M92 Reload Start

if (key == 'r') { 

if (lam === 0) {

lam = 6
ram = ram - 6

}


}





//Zen Engine Stop
}
