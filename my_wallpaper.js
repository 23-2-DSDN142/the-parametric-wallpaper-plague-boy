//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;


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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let noseX = (100)
  let noseY = (125)

fill(240, 129, 65); //Orange
stroke(168, 74, 20); //Dusty Orange
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

fill(255, 255, 255); //WHITE
noStroke(168, 74, 20)
beginShape(); //Little White marking
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

fill(168, 74, 20);
ellipse(noseX,noseY-12,15,5); //Nose

fill(168, 74, 20); //Left Eye
ellipse(noseX-25,noseY-35,5,15);

fill(168, 74, 20); //Right Eye
ellipse(noseX+25,noseY-35,5,15);
}
