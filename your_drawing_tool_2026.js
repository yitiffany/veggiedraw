//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials = 'ty'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = [244, 255, 200]; // green background
var lastscreenshot = 61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  // img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage('https://arao-sjsu.github.io/images/cat.jpg');
  // img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  // img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}

function setup() {
  createCanvas(600, 600); // canvas size
  background(screenbg); // use our background screen color

  button = createButton('clear canvas');
  button.position(500, 645);
  // call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  // call saveme() when the button is pressed
  button.mousePressed(saveme);

  button = createButton('help text');
  button.position(500, 670);
  // call helptext() when the button is pressed
  button.mousePressed(helpText);

  // want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  // use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1

  helpText();
}

function draw() {

  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }

  if (mouseIsPressed) {
    newkeyChoice(choice); // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { // toolchoice is the key that was pressed

  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx

  if (toolChoice == '1') { // first tool

    strokeWeight(0);
    stroke(0);
    fill(213, 239, 171);
    ellipse(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '2') { // second tool

    strokeWeight(0);
    stroke(0);
    fill(196, 229, 137);
    ellipse(mouseX, mouseY, 30, 30);
  } else if (toolChoice == '3') { // third tool

    strokeWeight(0);
    stroke(0);
    fill(175, 213, 106);
    ellipse(mouseX, mouseY, 20, 40);
  } else if (toolChoice == '4') {

    strokeWeight(0);
    stroke(0);
    fill(136, 197, 78);
    ellipse(mouseX, mouseY, 40, 60);
  } else if (toolChoice == '5') { // this tool calls a function

    strokeWeight(5);
    stroke(92, 145, 42);
    testbox(114, 180, 52);
    testbox(114, 180, 52);

    // make testbox do something!
    // line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '6') {

    strokeWeight(5);
    stroke(74, 127, 24);
    fill(60, 103, 19);
    rect(mouseX, mouseY, 60, 80);
  } else if (toolChoice == '7') {

    stroke(0);
    strokeWeight(0);
    fill(31, 98, 14);
    rect(mouseX, mouseY, 90, 90);
  } else if (toolChoice == '8') {

    stroke(0);
    strokeWeight(0);
    fill(24, 77, 11, 90);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '9') {

    stroke(0);
    strokeWeight(0);
    fill(6, 57, 12, random(255));
    square(mouseX, mouseY, random(60, 90));
  } else if (toolChoice == '0') {

    stroke(0);
    strokeWeight(0);
    fill(0, 39, 15, random(255));
    ellipse(mouseX, mouseY, random(30, 90));
  } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    image(img, mouseX, mouseY, mouseX / 10, mouseX / 16); // what does this do?

    // } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    // image(img2, mouseX-25, mouseY-25, 50, 50,20);

    // } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    // image(img3, mouseX-25, mouseY-25, 50, 50,20);
  }

  // else if (toolChoice == 'x' || key == 'X') {

  // clearflag = 1;

  // } else if (key == 'p' || key == 'P') {

  // call saveme which saves an image of the screen
  // NOTE: I removed saveme() from here because it was causing the canvas
  // to save every time you drew.
}

function testbox(r, g, b) {
  // this function is called in brush #5
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x - 50, y - 50, 40, 40);
}

function clear_print() {
  // clears the screen by resetting the background
  background(screenbg); // set the screen back to the background color
}

function saveme() {
  // this will save the name as the initials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename = initials + day() + hour() + minute() + second();

  if (second() != lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key = "";
  }

  lastscreenshot = second(); // set this to the current second so no more than one per second
}

function keyPressed() { // https://p5js.org/reference/p5/keyPressed/

  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText() {
  fill("black");
  strokeWeight(0.2);
  textSize(15);

  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
}
