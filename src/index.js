import cipher from './cipher.js';

generatedCode.onclick = function(){
    let word = document.getElementById("phrase").value;
    let offset = parseInt(document.getElementById("number").value);
    let releasedCode = cipher.encode (word, offset);
    console.log(releasedCode);
    document.getElementById("encodeText").innerHTML = (releasedCode);

}

generatedDecode.onclick = function(){
     let word = document.getElementById("phrase").value;
     let releasedDecode = word;
    console.log(releasedDecode);
    document.getElementById("decodeText").innerHTML = (releasedDecode);
}

console.log(cipher);



