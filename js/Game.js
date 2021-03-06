class Game{
  constructor(){
    this.missed = 0;
    this.phrases = ["hello world",
                    "i am the ultra boss",
                    "how am i",
                    "rainbow",
                    "servent",
                    "science",
                    "january",
                    "february",
                    "march",
                    "april",
                    "may",
                    "june",
                    "july",
                    "august",
                    "september",
                    "october",
                    "november",
                    "december",
                    "friday",
                    "monday",
                    "tuesday",
                    "wednesday",
                    "thursday",
                    "sunday",
                    "saturday",
                    "baby",
                    "the kid",
                    "break my heart",
                    "eat the cat",
                    "bite the cow"
                  ];
  }
  getRandomPhrase(){
    //pick random phrase from phrases[]
    return this.phrases[Math.floor(Math.random() * (this.phrases.length))];
  }
  handleInteraction(letter, element){
    //removes lifes if wrong or show letters
    if(this.phrase.checkLetter(letter)){
      this.phrase.showMatchedLetter(letter);
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
    if(this.phrase.uniqueChars.length == 0){
      this.gameOver("YOU WIN!", 'win')
    }
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
    //reset button
    document.querySelector('#btn__reset').innerText = "Reset Game";
  }
  startGame(){
    //makes a phrase object
    this.phrase = new Phrase(this.getRandomPhrase());
    //displays hidden characters
    this.phrase.addPhraseToDisplay();
  }
}
