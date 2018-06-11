<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>repl.it</title>
    <link href="index.css" rel="stylesheet" type="text/css"> </link>
    <header>Chaos Theory</header>

  </head>
  <body>
    <p>Below is an interactive example of chaos theory. Imagine a pendulem with a magnet at the end that can swing not only from side to side, but also forward and backwards. Now say we place this pendulem above a grid with four magnets on it (represented by the circles)</p>
    <p> The pendulem is currently at rest. Click somewhere on the grid to pull the pendulem back to that spot and release it, and a path will apear, showing how the pendulem traveled, and the square you clicked on will turn the color of the magnet it ended over </p>
        <canvas onclick="swing(event)" id="myCanvas" width="600"  height="600" style="border:1px solid #000000;"> </canvas>
    <script src="https://elijahwilensky.github.io/chaosrun.js"></script>
    <p>Now click somewhere else. And again, and again. Feel free to click on every square. Notice any pattern? Not really. The reds and greens are more common in the upper left and lower right corners, and the blue and yellow are more common in the upper right and lower left corners, but there is still no strict pattern.</p>
    <p> In fact, if you click somewhere else on a square you've already clicked on, its color may change. We can reduce the size of these squares indefinitely and there will still be no discernable pattern, and we will never be able to say for certain if where the pendulem ends up would be the same for all points within a square. </p>
    <p>This is a great example of Chaos Theory. The pendulem is opperating according to very strict rules, it is pulled towards each magnet with a force inversely proportional to the square of its distance from the magnets, and it is pulled towards the center with a force equivelant to the force of gravety acting on the lever. These rules are pretty straigthforward and strict. But because each of these forces pull on it depending on distance, each of them have an effect on each other force. This system has 5 degrees of freedom, and that means that we cannot create one equation to find out where it will end up. If we could do the near infinite math to determine where the pendulem would end up, with a near infinite number of sig-figs, we would be able to exaclty calculate where it would end up every time. But we can't. The equation would be arbitrarily long. We couldn't simplify the equation because, as we can see here, approximate starting conditions do not always approximate future conditions. Therefore, this system is chaotic, and effectively unpredictable.</p>
  </body>
</html>
