function toReadable (number) {
    const numWords = require('num-words')
    
    const numberInWords = numWords(number)
    
    return numberInWords
  }

console.log(toReadable(327))