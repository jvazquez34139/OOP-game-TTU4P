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
  let hitOrMiss = PHGame.handleInteraction(letter, e.target);
  markButton(e.target,hitOrMiss)
});

const resetDisplay = () => {

}
const markButton = (element,outcome) => {
  element.disabled = true;
  if(outcome){
    element.setAttribute('class', 'key chosen');
  }else{
    element.setAttribute('class', 'key chosen wrong');
  }
}
