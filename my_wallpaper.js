//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;

//Fox Motif, Center
let eyeWid = (15); //15*
let noseW = (15); //15*
let noseH = (5); //5*
let noseX = (100);//basis for location X, 100
let noseY = (125);//basis for location Y, 125
let foxsize = (1); //size of fox 1, when in trio .5
let foxysin = true //true, fox is singular| false, theres three foxes

//Left fox 
let eyeWidB = (15); // 15*
let noseWB = (15); //15*
let noseHB = (5); //5*
let noseXB = (400);//basis for location X, 400
let noseYB = (225);//basis for location Y, 225
let foxsizeB = (.5); //size of fox .5

//Right fox
let eyeWidC = (15); //15*
let noseWC = (15); //15*
let noseHC = (5); //5*
let noseXC = (0);//basis for location X, 0
let noseYC = (225);//basis for location Y, 225
let foxsizeC = (.5); //size of fox .5

//Mushie A (Coloured In True)
let mushsize = (.34); //size of mushie when fox is (1) .34 | when fox is (.5), Mush is .4
let mushX = (125) //x co-ord for mush orgin 125
let mushY = (100) //x co-ord for mush orgin 100
let mush = true //true, Mushroom is Colour | False, Mushroom is Linework
let mushheav = 2 //2*

//Mushie B
let mushBsize = (.34); //size of mushie when fox is (1) .34 | when fox is (.5), Mush is .4
let mushBX = (125) //X at .34, 125 |
let mushBY = (485) //Y at .34,  485 |
let mushB = false //True, Mushroom is Linework only | False, Mushroom is in colour
let mushBheav = 2 //2*

//Leaf A (Coloured in)
let leafAsize = (.75) //Size of leaf .75 when Fox is 1 | Size of leaf .9 when Fox is .35
let leafA = true //TRUE COLOURED |FALSE LINE
let leafAX = (245) //245 at .75
let leafAY = (180) //180 at .75

//Leaf B (Line work only)
let leafBsize = (.75) //Size of leaf .75 when Fox is 1 | Size of leaf 1 when Fox is .35
let leafB = false //TRUE LINE |FALSE COLOURED
let leafBX = (210) //210 for default at .75
let leafBY = (7) //always 7 for height

function setup_wallpaper(pWallpaper) {
 //pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GLIDE_WALLPAPER);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
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

if (foxysin){//Fox Motif, middle main
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

push() //Foxes Nose
  scale(foxsize)
  fill(brownA);
  stroke(brownA)
    ellipse(noseX,noseY-12,noseW, noseH); 
pop()

push() //Foxes Left Eye
  scale(foxsize)
  stroke(brownA)
  fill(brownA); //Left Eye
    ellipse(noseX-25,noseY-35,5,eyeWid);
pop()

push() //Foxes Right Eye
  scale(foxsize)
  stroke(brownA)
  fill(brownA); 
    ellipse(noseX+25,noseY-35,5,eyeWid);
pop()}

else { //Triple Foxes Alternative
  push()
  scale(foxsizeB);
  fill(orangeA);
  stroke(crimsonA);
  beginShape(); //Left Foxes Head
    vertex(noseXB,noseYB-50);
  
    vertex(noseXB-15,noseYB-50); //Left Side
    vertex(noseXB-15,noseYB-85);
    vertex(noseXB-55,noseYB-50);
    vertex(noseXB-65,noseYB-45);
    vertex(noseXB-55,noseYB-35);
    vertex(noseXB-65,noseYB-25);
    vertex(noseXB-55,noseYB-15);
    vertex(noseXB-70,noseYB-5);
    vertex(noseXB-52,noseYB+5);
  
    vertex(noseXB,noseYB+20); //Bottom
  
    vertex(noseXB+52,noseYB+5); //Right Side
    vertex(noseXB+70,noseYB-5);
    vertex(noseXB+55,noseYB-15);
    vertex(noseXB+65,noseYB-25);
    vertex(noseXB+55,noseYB-35);
    vertex(noseXB+65,noseYB-45);
    vertex(noseXB+55,noseYB-50);
    vertex(noseXB+15,noseYB-85);
    vertex(noseXB+15,noseYB-50);
  
    vertex(noseXB,noseYB-50) //Top
  endShape(CLOSE)
  pop()
  push()
scale(foxsizeB)
fill(whiteB); 
stroke(crimsonA)
beginShape(); //Left Foxes Little White marking
  vertex(noseXB,noseYB-10);
  vertex(noseXB,noseYB-10); //Center Nose
  vertex(noseXB-20,noseYB-20) 
  vertex(noseXB-35,noseYB-15)
  vertex(noseXB-65,noseYB-25);
  vertex(noseXB-55,noseYB-15);
  vertex(noseXB-70,noseYB-5);
  vertex(noseXB-52,noseYB+5);
  vertex(noseXB,noseYB+20); //Center Chin
  vertex(noseXB+52,noseYB+5);
  vertex(noseXB+70,noseYB-5);
  vertex(noseXB+55,noseYB-15);
  vertex(noseXB+65,noseYB-25);
  vertex(noseXB+35,noseYB-15);
  vertex(noseXB+20,noseYB-20);

  vertex(noseXB,noseYB-10); //Center Nose

endShape(CLOSE);
pop();

push() //Left Foxes Nose
  scale(foxsizeB)
  fill(brownA);
  stroke(brownA)
    ellipse(noseXB,noseYB-12,noseWB, noseHB);
pop()

push() //Left Foxes Left Eye
  scale(foxsizeB)
  stroke(brownA)
  fill(brownA); //Left Eye
    ellipse(noseXB-25,noseYB-35,5,eyeWidB);
pop()

push() //Left Foxes Right Eye
  scale(foxsizeB)
  stroke(brownA)
  fill(brownA);
    ellipse(noseXB+25,noseYB-35,5,eyeWidB);
pop()

push()
scale(foxsizeC);
fill(orangeA);
stroke(crimsonA);
beginShape(); //Head
  vertex(noseXC,noseYC-50);

  vertex(noseXC-15,noseYC-50); //Left Side
  vertex(noseXC-15,noseYC-85);
  vertex(noseXC-55,noseYC-50);
  vertex(noseXC-65,noseYC-45);
  vertex(noseXC-55,noseYC-35);
  vertex(noseXC-65,noseYC-25);
  vertex(noseXC-55,noseYC-15);
  vertex(noseXC-70,noseYC-5);
  vertex(noseXC-52,noseYC+5);

  vertex(noseXC,noseYC+20); //Bottom

  vertex(noseXC+52,noseYC+5); //Right Side
  vertex(noseXC+70,noseYC-5);
  vertex(noseXC+55,noseYC-15);
  vertex(noseXC+65,noseYC-25);
  vertex(noseXC+55,noseYC-35);
  vertex(noseXC+65,noseYC-45);
  vertex(noseXC+55,noseYC-50);
  vertex(noseXC+15,noseYC-85);
  vertex(noseXC+15,noseYC-50);

  vertex(noseXC,noseYC-50) //Top
endShape(CLOSE)
pop()

push()
scale(foxsizeC)
fill(whiteB); 
stroke(crimsonA)
beginShape(); //Little White marking
  vertex(noseXC,noseYC-10);
  vertex(noseXC,noseYC-10); //Center Nose
  vertex(noseXC-20,noseYC-20) 
  vertex(noseXC-35,noseYC-15)
  vertex(noseXC-65,noseYC-25);
  vertex(noseXC-55,noseYC-15);
  vertex(noseXC-70,noseYC-5);
  vertex(noseXC-52,noseYC+5);
  vertex(noseXC,noseYC+20); //Center Chin
  vertex(noseXC+52,noseYC+5);
  vertex(noseXC+70,noseYC-5);
  vertex(noseXC+55,noseYC-15);
  vertex(noseXC+65,noseYC-25);
  vertex(noseXC+35,noseYC-15);
  vertex(noseXC+20,noseYC-20);

  vertex(noseXC,noseYC-10); //Center Nose

endShape(CLOSE);
pop();
  
  push()
  scale(foxsizeC)
  fill(brownA);
  stroke(brownA)
  ellipse(noseXC,noseYC-12,noseWC, noseHC); //Nose
  pop()
  
  push()
  scale(foxsizeC)
  stroke(brownA)
  fill(brownA); //Left Eye
  ellipse(noseXC-25,noseYC-35,5,eyeWidC);
  pop()
  
  push()
  scale(foxsizeC)
  stroke(brownA)
  fill(brownA); //Right Eye
  ellipse(noseXC+25,noseYC-35,5,eyeWidC);
  pop()

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
  stroke(brownA)
  fill(brownA); //Left Eye
  ellipse(noseX-25,noseY-35,5,eyeWid);
  pop()
  
  push()
  scale(foxsize)
  stroke(brownA)
  fill(brownA); //Right Eye
  ellipse(noseX+25,noseY-35,5,eyeWid);
  pop()
}

if (mush){
//Mushroom, Top Left
//mush Stump
push();
scale(mushsize);
fill(whiteB);
stroke(crimsonC);
strokeWeight(mushheav)
beginShape();
  vertex(mushX,mushY);

  vertex(mushX+25,mushY);
  vertex(mushX+40,mushY+25);
  vertex(mushX+20,mushY+85);

  vertex(mushX,mushY+85);

  vertex(mushX-20,mushY+85);
  vertex(mushX-40,mushY+25);
  vertex(mushX-25,mushY);

endShape(CLOSE);
pop()

push() //Mushroom Hat
scale(mushsize)
fill(redA);
stroke(crimsonC);
strokeWeight(mushheav)
beginShape();
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
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+10,mushY-70)
  vertex (mushX+47,mushY-70)
  vertex(mushX+65,mushY-52)
  vertex(mushX+55,mushY-42)
  vertex(mushX+20,mushY-40)
  vertex(mushX,mushY-45)
  vertex(mushX-15,mushY-55)
  vertex(mushX,mushY-70)
  vertex(mushX+10,mushY-70)

endShape(CLOSE)
pop()

push()//Spot dos
scale(mushsize)
fill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX-26,mushY-70)
  vertex(mushX-5,mushY-70)
  vertex(mushX-18,mushY-57)
  vertex(mushX-28.5,mushY-60)
endShape(CLOSE)
pop()

push()//Spot tres
scale(mushsize)
fill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+55,mushY-38)
  vertex(mushX+35,mushY-37)
  vertex(mushX+30,mushY-30)
  vertex(mushX+40,mushY-20)
  vertex(mushX+55,mushY-20)
  vertex(mushX+60,mushY-30)
endShape(CLOSE)
pop()

push()//Spot quatro
scale(mushsize)
fill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+68,mushY-49)
  vertex(mushX+58,mushY-39)
  vertex(mushX+63,mushY-32)
  vertex(mushX+67,mushY-30)
  vertex(mushX+78,mushY-40)
endShape(CLOSE)
pop()
}
else {
 //Mushroom, Line Only
//mushroom Stump, Line Only
push();
scale(mushsize);
noFill(whiteB);
stroke(crimsonC);
strokeWeight(mushheav)
beginShape();
  vertex(mushX,mushY);

  vertex(mushX+25,mushY);
  vertex(mushX+40,mushY+25);
  vertex(mushX+20,mushY+85);

  vertex(mushX,mushY+85);

  vertex(mushX-20,mushY+85);
  vertex(mushX-40,mushY+25);
  vertex(mushX-25,mushY);

endShape(CLOSE);
pop()

push() //Mushroom Hat Line Only
scale(mushsize)
noFill(redA);
stroke(crimsonC);
strokeWeight(mushheav)
beginShape(); 
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
noFill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+10,mushY-70)
  vertex (mushX+47,mushY-70)
  vertex(mushX+65,mushY-52)
  vertex(mushX+55,mushY-42)
  vertex(mushX+20,mushY-40)
  vertex(mushX,mushY-45)
  vertex(mushX-15,mushY-55)
  vertex(mushX,mushY-70)
  vertex(mushX+10,mushY-70)

endShape(CLOSE)
pop()

push()//Spot dos
scale(mushsize)
noFill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX-26,mushY-70)
  vertex(mushX-5,mushY-70)
  vertex(mushX-18,mushY-57)
  vertex(mushX-28.5,mushY-60)
endShape(CLOSE)
pop()

push()//Spot tres
scale(mushsize)
noFill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+55,mushY-38)
  vertex(mushX+35,mushY-37)
  vertex(mushX+30,mushY-30)
  vertex(mushX+40,mushY-20)
  vertex(mushX+55,mushY-20)
  vertex(mushX+60,mushY-30)
endShape(CLOSE)
pop()

push()//Spot quatro
scale(mushsize)
noFill(whiteA)
stroke(crimsonC)
strokeWeight(mushheav)
beginShape()
  vertex(mushX+68,mushY-49)
  vertex(mushX+58,mushY-39)
  vertex(mushX+63,mushY-32)
  vertex(mushX+67,mushY-30)
  vertex(mushX+78,mushY-40)
endShape(CLOSE)
pop() 
}

if (mushB){
  //Mushroom B, Line only on True
  //Mushroom B stump, line only
  push();
  scale(mushBsize);
  noFill(whiteB);
  stroke(crimsonC);
  strokeWeight(mushBheav)
  beginShape();
    vertex(mushBX,mushBY);
  
    vertex(mushBX+25,mushBY);
    vertex(mushBX+40,mushBY+25);
    vertex(mushBX+20,mushBY+85);
  
    vertex(mushBX,mushBY+85);
  
    vertex(mushBX-20,mushBY+85);
    vertex(mushBX-40,mushBY+25);
    vertex(mushBX-25,mushBY);
  
  endShape(CLOSE);
  pop()
  
  push() //Mushroom B Hat, line only
  scale(mushBsize)
  noFill(redA);
  stroke(crimsonC);
  strokeWeight(mushBheav)
  beginShape(); 
    vertex(mushBX,mushBY-75); //center middle top
  
    vertex(mushBX+50,mushBY-75);
    vertex(mushBX+100,mushBY-25);
    vertex(mushBX+75,mushBY);
  
    vertex(mushBX,mushBY);
  
    vertex(mushBX-75,mushBY);
    vertex(mushBX-100,mushBY-25);
    vertex(mushBX-50,mushBY-75);
  
    vertex(mushBX,mushBY-75);
  endShape(CLOSE);
  pop()
  
  push() //Spot Uno
  scale(mushBsize)
  noFill(whiteA)
  stroke(crimsonC)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+10,mushBY-70)
    vertex (mushBX+47,mushBY-70)
    vertex(mushBX+65,mushBY-52)
    vertex(mushBX+55,mushBY-42)
    vertex(mushBX+20,mushBY-40)
    vertex(mushBX,mushBY-45)
    vertex(mushBX-15,mushBY-55)
    vertex(mushBX,mushBY-70)
    vertex(mushBX+10,mushBY-70)
  
  endShape(CLOSE)
  pop()
  
  push()//Spot dos
  scale(mushBsize)
  noFill(whiteA)
  stroke(crimsonC)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX-26,mushBY-70)
    vertex(mushBX-5,mushBY-70)
    vertex(mushBX-18,mushBY-57)
    vertex(mushBX-28.5,mushBY-60)
  endShape(CLOSE)
  pop()
  
  push()//Spot tres
  scale(mushBsize)
  noFill(whiteA)
  stroke(crimsonC)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+55,mushBY-38)
    vertex(mushBX+35,mushBY-37)
    vertex(mushBX+30,mushBY-30)
    vertex(mushBX+40,mushBY-20)
    vertex(mushBX+55,mushBY-20)
    vertex(mushBX+60,mushBY-30)
  endShape(CLOSE)
  pop()
  
  push()//Spot dos
  scale(mushBsize)
  noFill(whiteA)
  stroke(crimsonC)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+68,mushBY-49)
    vertex(mushBX+58,mushBY-39)
    vertex(mushBX+63,mushBY-32)
    vertex(mushBX+67,mushBY-30)
    vertex(mushBX+78,mushBY-40)
  endShape(CLOSE)
  pop()
  }
  else {
   //Mushroom B, False, Coloured in
  //Mushroom B, Stump, Line Only
  push();
  scale(mushBsize);
  fill(whiteB);
  stroke(whiteC);
  strokeWeight(mushBheav)
  beginShape();
    vertex(mushBX,mushBY);
  
    vertex(mushBX+25,mushBY);
    vertex(mushBX+40,mushBY+25);
    vertex(mushBX+20,mushBY+85);
  
    vertex(mushBX,mushBY+85);
  
    vertex(mushBX-20,mushBY+85);
    vertex(mushBX-40,mushBY+25);
    vertex(mushBX-25,mushBY);
  
  endShape(CLOSE);
  pop()
  
  push() //Mushroom B, Hat, Line only
  scale(mushBsize)
  fill(redA);
  stroke(crimsonB);
  strokeWeight(mushBheav)
  beginShape();
    vertex(mushBX,mushBY-75); //center middle top
  
    vertex(mushBX+50,mushBY-75);
    vertex(mushBX+100,mushBY-25);
    vertex(mushBX+75,mushBY);
  
    vertex(mushBX,mushBY);
  
    vertex(mushBX-75,mushBY);
    vertex(mushBX-100,mushBY-25);
    vertex(mushBX-50,mushBY-75);
  
    vertex(mushBX,mushBY-75);
  endShape(CLOSE);
  pop()
  
  push() //Spot Uno
  scale(mushBsize)
  fill(whiteA)
  stroke(crimsonB)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+10,mushBY-70)
    vertex (mushBX+47,mushBY-70)
    vertex(mushBX+65,mushBY-52)
    vertex(mushBX+55,mushBY-42)
    vertex(mushBX+20,mushBY-40)
    vertex(mushBX,mushBY-45)
    vertex(mushBX-15,mushBY-55)
    vertex(mushBX,mushBY-70)
    vertex(mushBX+10,mushBY-70)
  
  endShape(CLOSE)
  pop()
  
  push()//Spot dos
  scale(mushBsize)
  fill(whiteA)
  stroke(crimsonB)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX-26,mushBY-70)
    vertex(mushBX-5,mushBY-70)
    vertex(mushBX-18,mushBY-57)
    vertex(mushBX-28.5,mushBY-60)
  endShape(CLOSE)
  pop()
  
  push()//Spot tres
  scale(mushBsize)
  fill(whiteA)
  stroke(crimsonB)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+55,mushBY-38)
    vertex(mushBX+35,mushBY-37)
    vertex(mushBX+30,mushBY-30)
    vertex(mushBX+40,mushBY-20)
    vertex(mushBX+55,mushBY-20)
    vertex(mushBX+60,mushBY-30)
  endShape(CLOSE)
  pop()
  
  push()//Spot quatro
  scale(mushBsize)
  fill(whiteA)
  stroke(crimsonB)
  strokeWeight(mushBheav)
  beginShape()
    vertex(mushBX+68,mushBY-49)
    vertex(mushBX+58,mushBY-39)
    vertex(mushBX+63,mushBY-32)
    vertex(mushBX+67,mushBY-30)
    vertex(mushBX+78,mushBY-40)
  endShape(CLOSE)
  pop() 
  }

if (leafA){
//Leaf A, Top right, coloured
push()
scale(leafAsize) 
fill(crimsonA)
stroke(brownB)
beginShape()
  vertex(leafAX-40,leafAY+50)
  vertex(leafAX-50,leafAY+40)
  vertex(leafAX-40,leafAY+35)
  vertex(leafAX-35,leafAY+10)
  vertex(leafAX-25,leafAY+25)
  vertex(leafAX,leafAY) //top point
  vertex(leafAX,leafAY+35)
  vertex(leafAX+15,leafAY+35)
  vertex(leafAX,leafAY+50)
  vertex(leafAX+10,leafAY+60)
  vertex(leafAX,leafAY+65)
  vertex(leafAX-30,leafAY+60)
endShape(CLOSE)
line(leafAX-39,leafAY+75,leafAX-16,leafAY+35) //stem
pop()
}
else{push() //Leaf A, top right, line only
  scale(leafAsize) 
  noFill()
  stroke(brownB)
  beginShape()
    vertex(leafAX-40,leafAY+50)
    vertex(leafAX-50,leafAY+40)
    vertex(leafAX-40,leafAY+35)
    vertex(leafAX-35,leafAY+10)
    vertex(leafAX-25,leafAY+25)
    vertex(leafAX,leafAY) //top point
    vertex(leafAX,leafAY+35)
    vertex(leafAX+15,leafAY+35)
    vertex(leafAX,leafAY+50)
    vertex(leafAX+10,leafAY+60)
    vertex(leafAX,leafAY+65)
    vertex(leafAX-30,leafAY+60)
  endShape(CLOSE)
  line(leafAX-39,leafAY+75,leafAX-16,leafAY+35) //stem
  pop()}

//LEAF LINE, DESIGNED BY ME, REFLECTION CALCULATION DONE BY CHAT GPT BECAUSE I AM BAD AT MATH
if (leafB){ //Leaf B, bottom right, line only
  push();
  scale(-leafBsize, leafBsize); // Horizontal reflection by negating X scale
  noFill();
  stroke(brownB);
  beginShape();
  vertex(-leafBX - 40, leafBY + 50);
  vertex(-leafBX - 50, leafBY + 40);
  vertex(-leafBX - 40, leafBY + 35);
  vertex(-leafBX - 35, leafBY + 10);
  vertex(-leafBX - 25, leafBY + 25);
  vertex(-leafBX, leafBY); // top point
  vertex(-leafBX, leafBY + 35);
  vertex(-leafBX + 15, leafBY + 35);
  vertex(-leafBX, leafBY + 50);
  vertex(-leafBX + 10, leafBY + 60);
  vertex(-leafBX, leafBY + 65);
  vertex(-leafBX - 30, leafBY + 60);
  endShape(CLOSE);
  line(-leafBX - 39, leafBY + 75, -leafBX - 16, leafBY + 35); // stem
  pop();
}
else {
  push(); //Left B, bottom right, coloured in
  scale(-leafBsize, leafBsize); // Horizontal reflection by negating X scale
  fill(crimsonA);
  stroke(brownB);
  beginShape();
  vertex(-leafBX - 40, leafBY + 50);
  vertex(-leafBX - 50, leafBY + 40);
  vertex(-leafBX - 40, leafBY + 35);
  vertex(-leafBX - 35, leafBY + 10);
  vertex(-leafBX - 25, leafBY + 25);
  vertex(-leafBX, leafBY); // top point
  vertex(-leafBX, leafBY + 35);
  vertex(-leafBX + 15, leafBY + 35);
  vertex(-leafBX, leafBY + 50);
  vertex(-leafBX + 10, leafBY + 60);
  vertex(-leafBX, leafBY + 65);
  vertex(-leafBX - 30, leafBY + 60);
  endShape(CLOSE);
  line(-leafBX - 39, leafBY + 75, -leafBX - 16, leafBY + 35); // stem
  pop();
}
}