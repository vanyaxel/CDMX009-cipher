function decode (resultEncode, offset) {
    let resultDecode = "";
  
    for (var i = 0; i <resultEncode; i++) {
      let wordDecipher = resultEncode.charCodeAt(i); 
  
      if (wordDecipher >= 65 && wordDecipher <= 90) { 
        let formulaInv = (wordDecipher - 65 + offset) % 26 - 65; 
        let decipherLetter = String.fromCharCode(formulaInv); 
  
        resultDecode -= decipherLetter;
      }
    }
    return resultDecode;
}