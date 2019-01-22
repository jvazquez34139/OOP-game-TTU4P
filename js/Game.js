class Game{
  constructor(){
    this.missed = 0;
    this.phrases = ["hello world"];
  }
  getRandomPhrase(){

  }
  handleInteraction(){

  }
  removeLife(){
    if(this.missed > 4){
      this.missed > 4;
    }
    const hearts = document.querySelector('#scoreboard ol');
    const heart = hearts.children[this.missed].children[0];
    heart.setAttribute('src', 'images/lostHeart.png');
  }
  checkForWin(){

  }
  gameOver(){

  }
  startGame(){

  }
}
