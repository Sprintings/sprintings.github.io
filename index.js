(function(){

  var myCanvas = document.createElement('canvas');
  var canvas = document.querySelector('body').appendChild(myCanvas);
  
  canvas.height=window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.id = 'shipcanvas';
  
  var stage = new createjs.Stage(canvas);
  var centerX = canvas.width/2;
  var centerY = canvas.height/2;
  
  
  ss = new createjs.SpriteSheet({
  animations: {
   fly: [0, 0,"fly", 0]}, 
  images: ["http://i.imgur.com/60p8hGl.jpg"],
  frames: {
    regX: 158, 
    regY: 113, 
    width: 439,
    height: 705
  }
});

  var ship = new createjs.BitmapAnimation(ss);
    ship.gotoAndPlay("fly");
    stage.addChild(ship); 
    createjs.Ticker.setFPS(60);
    ship.x = centerX;
    ship.y = 65;
  ship.scaleX = .4;
  ship.scaleY = .4;


  createjs.Ticker.addListener(function() {
    var difX = stage.mouseX - ship.x;
    var difY = stage.mouseY - ship.y;

    ship.x += difX/100; 
    ship.y += difY/100;

    stage.update();
  });
})();