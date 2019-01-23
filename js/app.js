//DOMs
const $startButton = $('#btn__reset');
const $startOverlay = $('#overlay');
const $keys = $('.key');
//objects
const PHGame = new Game();

//event listeners
//start game level by clicking start
$startButton.on('click', function(){
  $startOverlay.hide();
  PHGame.startGame();
});
//handles interactions
//disables letter clicked
$keys.on('click', function(e){
  let letter = e.target.innerText;
  PHGame.handleInteraction(letter, e.target);
});

const resetDisplay = () => {

}
const markButton = () => {

}
