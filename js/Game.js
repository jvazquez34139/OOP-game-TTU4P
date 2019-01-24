class Game{
  constructor(){
    this.missed = 0;
    this.phrases = ["hello world"];
  }
  getRandomPhrase(){
    //pick random phrase from phrases[]
    return this.phrases[Math.random() * (this.phrases.length - 1)];
  }
  handleInteraction(letter, element){
    //removes lifes if wrong or show letters
    //marks the keys on the keyboard
    if(this.phrase.checkLetter(letter)){
      this.checkForWin();
      return true;
    }else{
      if(this.missed >= 4){
        this.gameOver('YOU LOST!', 'lose');
        this.missed = 5
        this.removeLife();
      }else{
        this.missed++;
        this.removeLife();
      }
      return false
    }
    //check for win
  }
  removeLife(){
    //cant miss more than 5 times
    //change the image
    const hearts = document.querySelector('#scoreboard ol');
    const heart = hearts.children[this.missed-1].children[0];
    heart.setAttribute('src', 'images/lostHeart.png');
  }
  checkForWin(){
    // if(win){
    //   gameOver("YOU WIN!", "win");
    // }
    //end game if win or loss;
  }
  gameOver(msg,color){
    //if no more lifes or if phrase was guessed
    //add text to #game-over-message
    const $overlay = $('#overlay');
    $overlay.show();
    overlay.setAttribute('class',`start ${color}`)
    const message = document.querySelector('#game-over-message');
    message.innerText = msg;
  }
  startGame(){
    //makes a phrase object
    this.phrase = new Phrase(this.getRandomPhrase());
    //displays hidden characters
    this.phrase.addPhraseToDisplay();

  }
}
