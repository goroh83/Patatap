var sound1 = new Howl({
  src: ['sounds/bubbles.mp3']
});

var sound2 = new Howl({
  src: ['sounds/clay.mp3']
});

var circles = [];

function onKeyDown(event) {
    sound1.play();
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = 'gold';
    circles.push(newCircle);
}

function onFrame(event) {
    for(var i  = 0; i<circles.length; i++) {
    circles[i].fillColor.hue +=1;
    circles[i].scale(.9);
    }
}


/*

var sound = new Howl({
  src: ['sound.mp3']
});

sound.play();

*/
