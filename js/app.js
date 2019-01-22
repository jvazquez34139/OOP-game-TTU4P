//DOMs
const $startButton = $('#btn__reset');
const $startOverlay = $('#overlay');

//objects
const PHGame = new Game();

//start game level by clicking start
$startButton.on('click', function(){
  $startOverlay.hide();
  PHGame.startGame();
});


const resetDisplay = () => {

}
const markButton = () => {

}
