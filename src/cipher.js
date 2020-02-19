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

/*
decode: function (resultEncode, offset) {
  let resultDecode = "";

  for (var i = 0; i < resultEncode.length; i++) {
      let wordCipher = word.charCodeAt(i);

      if (wordCipher >= 65 && wordCipher <= 90) {
          let formula = (wordCipher - 65 - offset) % 26 + 65;
          let newLetter = String.fromCharCode(formula);

          resultDecode += newLetter;

      }
  }
  return resultDecode;
}
  }
export default cipher */
