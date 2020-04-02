import cipher from './cipher.js';

let generatedCode = document.getElementById("generatedCode");

generatedCode.onclick = function(){
    let string = document.getElementById("phrase").value;
    let offset = parseInt(document.getElementById("number").value);
    let releasedCode = cipher.encode (offset, string);
    document.getElementById("encodeText").innerHTML = (releasedCode);

}

generatedDecode.onclick = function(){
     let string = document.getElementById("phrase").value;
     let releasedDecode = string;
    document.getElementById("decodeText").innerHTML = (releasedDecode);
}