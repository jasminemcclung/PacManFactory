function makePac() {
    // returns an object with values scaled {x: 33, y:21}
   let velocity = setToRandom(10);
   let position = setToRandom(200);
   //Add image to div id = game
   let game = document.getElementById('game');
   let newimg = document.createElement('img');
   newimg.style.position = 'absolute'
   newimg.src = 'PacMan1.png';
   newimg.width = 100;
   newimg.style.left = position.x;
newimg.style.top = position.y;
game.appendChild(newimg);
//new style of creating an object 
return {position, velocity, newimg}
}