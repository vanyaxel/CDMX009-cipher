import cipher from './cipher.js';

let printName = document.getElementById("codePage");
let printSpace = document.getElementById("userName");
let buttonCode = document.getElementById("codeButton");
let buttonDecode = document.getElementById("decodeButton");
let encodeWord = document.getElementById("encode");
let decodeWord = document.getElementById("decode");

function showHide(section) {
    if (document.getElementById) {
        var section = document.getElementById(section);
        section.style.display = (section.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function () {
    showHide("menu");
    showHide("codePage");
};

/* export function mostrarPagina2() {
    document.getElementById("logIn").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("codePage").style.display = "none";
}

export function mostrarPagina3() {
    document.getElementById("logIn").style.display = "none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("codePage").style.display = "block";
}  */

function welcome() {
    let bienvenida = document.createElement("div");
    let name = document.getElementById("user").value;
    bienvenida.innerHTML = `
         <p>Bienvenid@  ${name}</p>
         `;
    return bienvenida;
}

printSpace.appendChild(welcome());


buttonCode.addEventListener("click", function () {
    let string = document.getElementById("randomWord").value;
    let offset = parseInt(document.getElementById("number").value);
    let releasedWord = cipher.encode(offset, string);
    encodeWord.innerHTML = (releasedWord);
});


buttonDecode.addEventListener("click", function () {
    let string = document.getElementById("randomWord").value;
    let offset = parseInt(document.getElementById("number").value);
    let releasedWord = cipher.decode(offset, string);
    decodeWord.innerHTML = (releasedWord);
});

submit; 