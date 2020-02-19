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

  },


  decode: function (word) {
      let resultDecode = "";
      resultDecode = word;
      console.log(resultDecode)

      return resultDecode;
  }
}



export default cipher
