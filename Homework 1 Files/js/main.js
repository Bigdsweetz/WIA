/*
     Name: Douglas J "DJay" Sweeting
     Date: July 10 2014
     Class & Section:  WIA-####
     Comments: "HTML5 Canvas Drawing"
 */

/*if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas1");
var ctx = theCanvas.getContext("2d");

//Draw some text on our canvas
ctx.font = "25pt Georgia";
ctx.fillText("Canvas is supported!", 20, 60);

} else {
	//Canvas is not supported
	//polyfill would go here
		} */

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here

if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas1");
var ctx = theCanvas.getContext("2d");


	//Draw a filled and stroked rectangle
	
ctx.fillStyle="blue";
ctx.fillRect(0,0,50,100);




} else {
	//Canvas is not supported
	//polyfill would go here
		}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas2");
var ctx = theCanvas.getContext("2d");

//Draw a circle

ctx.fillStyle='rgb(255, 0, 0)';
ctx.beginPath();
ctx.arc(50,50,30,0,2*Math.PI);
ctx.fill();

} else {
	//Canvas is not supported
	//polyfill would go here
		}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas3");
var ctx = theCanvas.getContext("2d");

//Draw some text on our canvas
	ctx.beginPath();
	//center
    ctx.moveTo(65,50);
	//Bottom Right
    ctx.lineTo(100,75);
	//Top Left
    ctx.lineTo(100,25);
    //center
    ctx.moveTo(110,50);
    //Bottom Right
    ctx.lineTo(75,75);
    //Top Left
    ctx.lineTo(75,25);
    ctx.fill();

} else {
	//Canvas is not supported
	//polyfill would go here
		}
		
		//This is my rendention of the sun. The sun is a star. This is as close as I'm getting to a star in this class. 

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here
if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas4");
var ctx = theCanvas.getContext("2d");

//Draw some text on our canvas
ctx.beginPath();
ctx.lineWidth = 6;
ctx.strokeStyle = "#333";
ctx.beginPath();
ctx.moveTo(42, 233);
ctx.bezierCurveTo(47, 88, 198, 95, 202, 238);
ctx.moveTo(200, 238);
ctx.bezierCurveTo(47, 88, 454, 111, 339, 236);
ctx.moveTo(42, 233);
ctx.bezierCurveTo(9, 90, 401, 102, 339, 236);

ctx.stroke();

//The worst looking umbrealla ever....I'm soo sorry about this.
} else {
	//Canvas is not supported
	//polyfill would go here
		}
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here

if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas5");
var ctx = theCanvas.getContext("2d");

//Draw some text on our canvas
ctx.font = "25pt Comic Sans";
ctx.fillText("This is a test...This is only a test", 20, 60);

} else {
	//Canvas is not supported
	//polyfill would go here
		}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here
if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas6");
var ctx = theCanvas.getContext("2d");


//Create a varaible to hold our image
var srcImg = document.getElementById("img1");
var srcImg2 = document.getElementById("img2");

//Draw some text on our canvas
ctx.drawImage(srcImg, 0, 0);
//half height ctx.drawImage(image, dx, dy, dw, dh);
ctx.drawImage(srcImg, 10, 10, 240, 300);
//slice a scetion out ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
ctx.drawImage(srcImg, 100, 40, 95, 140, 50, 50, 300, 600);


} else {
	//Canvas is not supported
	//polyfill would go here
		}


/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here
if(Modernizr.canvas){
	//Canvas is supported	
	
var theCanvas = document.getElementById("Canvas7");
var ctx = theCanvas.getContext("2d");

//Draw some text on our canvas
ctx.font = "25pt Georgia";
ctx.fillText("This is one of my 3!", 200, 60);

//My super awesome star
ctx.beginPath();
	//center
    ctx.moveTo(65,50);
	//Bottom Right
    ctx.lineTo(100,75);
	//Top Left
    ctx.lineTo(100,25);
    //center
    ctx.moveTo(110,50);
    //Bottom Right
    ctx.lineTo(75,75);
    //Top Left
    ctx.lineTo(75,25);
    ctx.fill();
	
//half height ctx.drawImage(image, dx, dy, dw, dh);
ctx.drawImage(srcImg2, 50, 75, 240, 300);	
	
//


} else {
	//Canvas is not supported
	//polyfill would go here
		}

