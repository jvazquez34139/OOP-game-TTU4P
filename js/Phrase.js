class Phrase{
  constructor(phrase){
    this.phrase = phrase;
    this.chars = this.phrase.split('').filter(char => char != ' ');
  }
  addPhraseToDisplay(){
    //adds new li element for each chars
    //might need to keep the space in
    for(let i = 0; i < this.chars.length; i++){
      const char = document.createElement('li');
      char.textContent = this.chars[i];
      char.setAttribute('class', 'space letter')
      document.querySelector('#phrase ul').appendChild(char);
    }
    console.log(document.querySelector('#phrase ul'));
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
  showMatchedLetter(letter,element){
    const blank = document.querySelectorAll('#phrase ul li');
    console.log(blank);
    this.chars.forEach((char,index) => {
      if(char == letter){
        // console.log(index)
        blank[index].setAttribute('class', 'letter space show');
      }
    })
  }
}
