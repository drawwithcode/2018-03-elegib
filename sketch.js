function preload(){
  // put preload code here
}

var i ;
var p ;
var R1 = 15;
var change = 1;
var myColors = ['red', 'green', 'blue', 'orange', 'yellow', 'purple', 'pink'];
var myColors2 = ['#8c2525', '#eaaa39',];
var pattern = 0;
var press = 0;

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);
  var cx = (windowWidth - width) / 2;
  var cy = (windowHeight - height) / 2;
  canvas.position(cx, cy);
  frameRate(20);

}

// pattern 1
function disegno() {
  background(0);
  colorMode(HSB)
  noFill();
  noStroke();

// texture X
for (i = 30; i < width ; i+= 60) {

//texture Y
    for(p = 30; p < height; p+= 60) {

//color change
     if(mouseX <960 && mouseY<540) {
       var r1 = floor(random(0,2));
       fill(myColors2[r1]);}
     else if(mouseX > 960 && mouseY < 540) {
         var r = floor(random(0,6));
         fill(myColors[r]); }
     else if(mouseX < 960 && mouseY > 540 ) {
          fill(p/2,i+50, 100, );}
    else if(mouseX > 960 && mouseY > 540) {
         fill(p/10, p/5, 87, random(0,1));
    }

//moving balls
     ellipse(i + sin(frameCount/5)*R1, p+cos(frameCount/5)*R1, sin(frameCount/20)*20);
     ellipse(i - sin(frameCount/5)*R1, p -cos(frameCount/5)*R1, sin(frameCount/20)*20);

//fixed balls
     ellipse(i , p, sin(frameCount/10)*10);
}}}

//pattern 2
function disegno1() {
  colorMode(HSB)
  background(0);
  noFill();
  noStroke();

// texture X
for (i = 30; i < width ; i+= 60) {

//texture Y
    for(p = 30; p < height; p+= 60) {

//color change
if(mouseX <960 && mouseY<540) {
  var r1 = floor(random(0,2));
  fill(myColors2[r1]);}
else if(mouseX > 960 && mouseY < 540) {
    var r = floor(random(0,6));
    fill(myColors[r]); }
else if(mouseX < 960 && mouseY > 540 ) {
     fill(p/2,i+50, 100, );}
else if(mouseX > 960 && mouseY > 540) {
    fill(p/10, p/5, 87, random(0,1));
    }

//fixed balls
    ellipse(i + sin(frameCount/20)*R1, p+cos(frameCount/5)*R1, sin(frameCount/20)*20);
    ellipse(i - sin(frameCount/20)*R1, p -cos(frameCount/5)*R1, sin(frameCount/20)*20);

//moving balls
    ellipse(i , p, sin(frameCount/10)*10);
}}}

// pattern 3
function disegno2() {
  colorMode(HSB)
  background(0);
  noFill();
  noStroke();

// texture X
for (i = 30; i < width ; i+= 60) {

//texture Y
    for(p = 30; p < height; p+= 60) {

//color change
if(mouseX <960 && mouseY<540) {
  var r1 = floor(random(0,2));
  fill(myColors2[r1]);}
else if(mouseX > 960 && mouseY < 540) {
    var r = floor(random(0,6));
    fill(myColors[r]); }
else if(mouseX < 960 && mouseY > 540 ) {
     fill(p/2,i+50, 100, );}
else if(mouseX > 960 && mouseY > 540) {
    fill(p/10, p/5, 87, random(0,1));
    }

//fixed balls
    ellipse(i + sin(frameCount/5)*R1, p+cos(frameCount/5)*R1, sin(frameCount/20)*20);
    ellipse(i - sin(frameCount/5)*R1, p +cos(frameCount/5)*R1, sin(frameCount/20)*20);

//moving balls
    ellipse(i , p, sin(frameCount/10)*10);
}}}


  function mousePressed() {if (press == 0) {pattern = 1;}
                           else if (press == 1) {pattern = 0}
                           else if (press == 2) {pattern = 2}}


function draw() {
  if (pattern == 0 ) {disegno(); press = 2;  }
  else if (pattern == 1) {disegno1(); press = 1; }
  else if (pattern == 2) {disegno2(); press = 0;}
  push();
  translate(windowWidth/2, windowHeight/2)
  textAlign(CENTER, CENTER);
  textSize(25);
  textLeading(40);
  if (frameCount <80) {fill(50,50,50,0.9); rect(-250,-100, 500, 200,40); fill(255);text('Move the mouse to change the colours \nand\n click to change the pattern',0,0 );}
  pop();
  // put drawing code here
}
