/*
 * @name Video Capture
 * @frame 710,240
 * @description <p><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * at least one video file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em></p><br><br>
 * Capture video from the webcam and display
 * on the canvas as well with invert filter. Note that by
 * default the capture feed shows up, too. You can hide the
 * feed by uncommenting the capture.hide() line.
 */
var capture;

function setup() {
  createCanvas(1080, 720);
  capture = createCapture({
    
     video: {
        facingMode: {
 
         exact: "enviroment"
        }
      }
    });
  
  capture.size(1080, 720);
  capture.hide();
  
}

function draw() {
  background(255);
  tint(255, 0, 0)
  
  image(capture, 0, 0, 960, 720);
  //filter(RED);


}

function mousePressed() {
  fullScreen(true);
}