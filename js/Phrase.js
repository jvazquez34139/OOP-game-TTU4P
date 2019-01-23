class Phrase{
  constructor(phrase){
    this.phrase = phrase;
    this.chars = this.phrase.split('').filter(char => char != ' ');
  }
  addPhraseToDisplay(){
    //adds new li element for each chars
    //might need to keep the space in
    for(let i = 0; i < this.chars.length; i++){
      let char = document.createElement('li');
      char.innerHTML = '<li class="letter space"> </li>';
      document.querySelector('#phrase ul').appendChild(char);
    }

  }
  checkLetter(letter){
    let contains = false;
    this.chars.forEach(char => {
      if(letter == char){
        contains = true;
      }
    });
    return contains;
  }
  showMatchedLetter(letter){

  }
}
