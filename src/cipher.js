
function cipher(word, offset){
  var result="";

for(var i = 0; i < word.length ;  i++){
  let wordCipher = word.charCodeAt(i); // convierte la letra en numero ascii

 if (wordCipher >= 65 && wordCipher <= 90){ // condicion que debe cumplir el texto una vez convertido en ASCII
   let formula = (wordCipher - 65 + offset) % 26 + 65; // aplica la formula a las letras
   let newLetter = String.fromCharCode(formula); //palabra cifrada
   
   result += newLetter;
 }
}
return result; //

}

//const cipher = {
// ...
//};

export default cipher;
