const cipher = {
  encode: function (word, offset) {
    let resultEncode = "";

    for (var i = 0; i < word.length; i++) {
      let wordCipher = word.charCodeAt(i); 

      if (wordCipher >= 65 && wordCipher <= 90) { 
        let formula = (wordCipher - 65 + offset) % 26 + 65; 
        let newLetter = String.fromCharCode(formula); 

        resultEncode += newLetter;
      }
    }
    return resultEncode;

}
}
export default cipher


/* },

function decode (resultEncode, offset) {
  let resultDecode = "";

  for (var i = 0; i <resultEncode; i--) {
    let wordDecipher = resultEncode.charCodeAt(i); 

    if (wordDecipher >= 65 && wordDecipher <= 90) { 
      let formulaInv = (wordDecipher - 65 + offset) % 26 - 65; 
      let decipherLetter = String.fromCharCode(formulaInv); 

      resultDecode -= decipherLetter;
    }
  }
  return resultDecode;
  
} */