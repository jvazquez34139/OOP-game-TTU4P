//DOMs
const $startButton = $('#btn__reset');
const $startOverlay = $('#overlay');
const $keys = $('.key');
const $phrase = $('#phrase ul');
const $lives = $('.tries img');

//objects
const PHGame = new Game();

//event listeners
//start game level by clicking start
$startButton.on('click', function(){
  resetDisplay();
  PHGame.startGame();
  $startOverlay.hide();
});
//handles interactions
//disables letter clicked
$keys.on('click', function(e){
  let letter = e.target.innerText;
  let hitOrMiss = PHGame.handleInteraction(letter, e.target);
  markButton(e.target,hitOrMiss)
});
//finish this
const resetDisplay = () => {
  $keys.attr('class','key');
  $keys.prop('disabled', false)
  PHGame.missed = 0;
  $lives.attr('src', 'images/lostHeart.png');
  //just need to reset #phrase to have no list items
  $phrase.html("");
}
const markButton = (element,outcome) => {
  element.disabled = true;
  if(outcome){
    element.setAttribute('class', 'key chosen');
  }else{
    element.setAttribute('class', 'key chosen wrong');
  }
}
