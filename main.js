function preload(){
    
}
function setup(){
    canvas=createCanvas(640, 480);
    canvas.position(60, 300);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill('red');
    circle(60, 60, 75);
    fill('green');
    rect(93, 50, 480, 20);
    fill('red');
    circle(580, 60, 75);
    fill('green');
    rect(570, 80, 20, 350);
    fill('red');
    circle(580, 420, 75);
    fill('green');
    rect(50, 80, 20, 350);
    fill('green');
    rect(80, 420, 480, 20);
    fill('red');
    circle(60, 420, 75);
    image(video,170,100,300, 300);
}
    function take_snapshot(){
    save('my_pic.png');
}