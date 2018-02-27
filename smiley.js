<!DOCTYPE html>
<html>
<head>
<style> 
#face {
	position: absolute;
    left:10px;
    top: 300px;
    height: 50px;
    -webkit-transition: width 2s; /* For Safari 3.1 to 6.0 */
    transition: width 2s, left 2s, top 2s;

}

#face:hover {
    left: 100px;
    top: 0px;
}
</style>
</head>
<body>

  <img src= "https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SY355_.jpg" id="face">
  <script>
  fill(0,0,0);
  rect(50,50,100,100);
   var Player = function(x,y) {
   this.x = 50;
   this.y = 50;
  };
  fill(0, 0, 0);
  rect(50,50,100,100);
  Player.prototype.draw = function() {
    fill(0,0,0);
    rect(50,50,100,100);  
  };
  
  
  </script>

  </body>
  </html>










