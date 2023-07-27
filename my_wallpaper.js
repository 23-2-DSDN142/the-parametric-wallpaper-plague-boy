//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;

//Fox Motif
let eyeWid = 15; //15 deff
let noseW = (15); //15 deff
let noseH = (5); //5 deff
let noseX = (100);//basis for location X, 100
let noseY = (125);//basis for location Y, 125
let foxsize = (0.1); //size

//Mushie0
let mushsize = (1);
let mushX = (100)
let mushY = (100)


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  let mustardA = color(239, 169, 40);
  background(mustardA); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Colour Pallette
  let mustardA = color(239, 169, 40);
  let mustardB = color(217, 149, 24);
  let mustardC = color(198, 133, 13);

  let orangeA = color(212, 105, 11)
  let orangeB = color(191, 91, 4)
  let orangeC = color(178, 83, 0)

  let crimsonA = color(139, 42, 7)
  let crimsonB = color(115, 32, 2)
  let crimsonC = color(98, 26, 0)

  let brownA = color(87, 27, 5)
  let brownB = color(64, 18, 1)
  let brownC = color(50, 14, 0)

  let whiteA = color(241, 227, 213)
  let whiteB = color(221, 203, 186)
  let whiteC = color(189, 167, 146)

  let redA = color(209, 31, 15)
  let redB = color(191, 19, 4)
  let redC = color(168, 14, 0)

//Fox Motif
push()
scale(foxsize);
fill(orangeA);
stroke(crimsonA);
beginShape(); //Head
  vertex(noseX,noseY-50);

  vertex(noseX-15,noseY-50); //Left Side
  vertex(noseX-15,noseY-85);
  vertex(noseX-55,noseY-50);
  vertex(noseX-65,noseY-45);
  vertex(noseX-55,noseY-35);
  vertex(noseX-65,noseY-25);
  vertex(noseX-55,noseY-15);
  vertex(noseX-70,noseY-5);
  vertex(noseX-52,noseY+5);

  vertex(noseX,noseY+20); //Bottom

  vertex(noseX+52,noseY+5); //Right Side
  vertex(noseX+70,noseY-5);
  vertex(noseX+55,noseY-15);
  vertex(noseX+65,noseY-25);
  vertex(noseX+55,noseY-35);
  vertex(noseX+65,noseY-45);
  vertex(noseX+55,noseY-50);
  vertex(noseX+15,noseY-85);
  vertex(noseX+15,noseY-50);

  vertex(noseX,noseY-50) //Top
endShape(CLOSE)
pop()

push()
scale(foxsize)
fill(whiteB); 
stroke(crimsonA)
beginShape(); //Little White marking
  vertex(noseX,noseY-10);
  vertex(noseX,noseY-10); //Center Nose
  vertex(noseX-20,noseY-20) 
  vertex(noseX-35,noseY-15)
  vertex(noseX-65,noseY-25);
  vertex(noseX-55,noseY-15);
  vertex(noseX-70,noseY-5);
  vertex(noseX-52,noseY+5);
  vertex(noseX,noseY+20); //Center Chin
  vertex(noseX+52,noseY+5);
  vertex(noseX+70,noseY-5);
  vertex(noseX+55,noseY-15);
  vertex(noseX+65,noseY-25);
  vertex(noseX+35,noseY-15);
  vertex(noseX+20,noseY-20);

  vertex(noseX,noseY-10); //Center Nose

endShape(CLOSE);
pop();

push()
scale(foxsize)
fill(brownA);
stroke(brownA)
ellipse(noseX,noseY-12,noseW, noseH); //Nose
pop()

push()
scale(foxsize)
fill(brownA); //Left Eye
ellipse(noseX-25,noseY-35,5,eyeWid);
pop()

push()
scale(foxsize)
fill(brownA); //Right Eye
ellipse(noseX+25,noseY-35,5,eyeWid);
pop()

//Mushie
//mush leg
push();
scale(mushsize);
fill(whiteB);
stroke(whiteC);
beginShape();
  vertex(mushX,mushY);

  vertex(mushX+15,mushY);
  vertex(mushX+25,mushY+25);
  vertex(mushX+10,mushY+100);

  vertex(mushX,mushY+100);

  vertex(mushX-10,mushY+100);
  vertex(mushX-25,mushY+25);
  vertex(mushX-15,mushY);

endShape(CLOSE);
pop()

push()
scale(mushsize)
fill(redA);
stroke(crimsonB);
beginShape(); //mush hat
vertex(mushX,mushY-75); //center middle top

vertex(mushX+50,mushY-75);
vertex(mushX+100,mushY-25);
vertex(mushX+75,mushY);

vertex(mushX,mushY);

vertex(mushX-75,mushY);
vertex(mushX-100,mushY-25);
vertex(mushX-50,mushY-75);

vertex(mushX,mushY-75);
endShape(CLOSE);
pop()

push() //Spot Uno
scale(mushsize)
fill(whiteA)
stroke(crimsonB)
beginShape()
vertex(mushX+10,mushY-65)
vertex (mushX+45,mushY-65)
vertex(mushX+65,mushY-45)
vertex(mush+75,mushY-40)
vertex(mushX,mushY-45)
vertex(mushX-15,mushY-55)
vertex(mushX,mushY-65)
vertex(mushX+10,mushY-65)

endShape()
pop()
}
