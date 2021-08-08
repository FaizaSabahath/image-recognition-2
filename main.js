function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    canvas.position(550,200)
}

function draw(){}
  
function take_snapshot(){
    save('famous name.png');
}