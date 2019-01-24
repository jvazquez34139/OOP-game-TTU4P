class Phrase{
  constructor(phrase){
    this.phrase = phrase;
    this.chars = this.phrase.split('')
    //win condition is an empty array of unique chars
    this.uniqueChars = [];
    this.chars.forEach( char => {
      let unique = true;
      for(let i = 0; i < this.uniqueChars.length; i++){
        if(char == this.uniqueChars[i]){
          unique = false;
        }
      }
      if(unique){
        this.uniqueChars.push(char);
      }
    });
    this.uniqueChars = this.uniqueChars.filter(char => char != ' ');
  }
  addPhraseToDisplay(){
    //adds new li element for each chars
    //might need to keep the space in
    for(let i = 0; i < this.chars.length; i++){
      const char = document.createElement('li');
      //determines if space or letter
      if(this.chars[i] == " "){
          char.textContent = " ";
          char.setAttribute('class', 'space');
      }else{
        char.textContent = this.chars[i].toUpperCase();
        char.setAttribute('class', 'letter');
      }
      document.querySelector('#phrase ul').appendChild(char);
    }
  }
  checkLetter(letter){
    let contains = false;
    this.chars.forEach(char => {
      if(letter == char){
        contains = true;
        //for determining win condition progress
        this.uniqueChars = this.uniqueChars.filter(char => char != letter);
      }
    });
    return contains;
  }
  showMatchedLetter(letter,element){
    const blank = document.querySelectorAll('#phrase ul li');
    this.chars.forEach((char,index) => {
      if(char == letter){
        // console.log(index)
        blank[index].setAttribute('class', 'letter show');
      }
    })
  }
}
