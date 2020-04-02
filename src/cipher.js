const cipher = {
    encode: function (offset, string) {
        let resultEncode = "";

        for (let i = 0; i < string.length; i++) {
            let wordCipher = string.charCodeAt(i);

            if (wordCipher >= 65 && wordCipher <= 90) {
                let formula = (wordCipher - 65 + offset) % 26 + 65;
                let newLetter = String.fromCharCode(formula);

                resultEncode += newLetter;

            } else if (wordCipher >= 97 && wordCipher <= 122) {
                let formula = (wordCipher - 97 + offset) % 26 + 97;
                let newLetter = String.fromCharCode(formula);
                resultEncode += newLetter;

            } else {
                alert("NO ES CARACTER VALIDO")

            }


            return resultEncode;
        }
    },

    decode: function (offset, string) {
        let resultDecode = "";

        for (let i = 0; i < string.length; i++) {
            let wordCipher = string.charCodeAt(i);

            if (wordCipher >= 65 && wordCipher <= 90) {
                let formula = (wordCipher - 65 - offset) % 26 + 65;
                let newLetter = String.fromCharCode(formula);

                resultEncode += newLetter;

            } else if (wordCipher >= 97 && wordCipher <= 122) {
                let formula = (wordCipher - 97 - offset) % 26 + 97;
                let newLetter = String.fromCharCode(formula);
                resultEncode += newLetter;
            }

            return resultDecode;
        }
    }
}

export default cipher
