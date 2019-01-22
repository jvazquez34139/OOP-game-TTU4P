class Game{
  constructor(){
    this.missed = 0;
    this.phrases = ["hello world"];
  }
  getRandomPhrase(){
    //pick random phrase from phrases[]
    return this.phrases[Math.random() * (this.phrases.length - 1)];
  }
  handleInteraction(){

  }
  removeLife(){
    //cant miss more than 5 times
    if(this.missed > 4){
      this.missed > 4;
    }
    //change the image
    const hearts = document.querySelector('#scoreboard ol');
    const heart = hearts.children[this.missed].children[0];
    heart.setAttribute('src', 'images/lostHeart.png');
  }
  checkForWin(){

  }
  gameOver(){

  }
  startGame(){
    //makes a phrase object
    this.phrase = new Phrase(this.getRandomPhrase());
    //displays hidden characters
    this.phrase.addPhraseToDisplay();
  }
}
