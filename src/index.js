import cipher from './cipher.js';

let userNameValue = document.getElementById('user');
let btnLogIn = document.getElementById('btnLogIn');
let btnMenu = document.querySelectorAll('.btn-menu');
let returnMenu = document.getElementById('returnMenu');
let tryAgain = document.getElementById('tryAgain');
let generatedCode = document.getElementById("generatedCode");

function showHide(section) {
    if (document.getElementById) {
        var section = document.getElementById(section);
        section.style.display = (section.style.display == 'none') ? 'block' : 'none';
    }
}
window.onload = function () {
    showHide("menu");
    showHide("code");
};

btnLogIn.addEventListener('click', function () {
    let userName = document.getElementById('userName');
    userName.innerHTML = 'Bienvenida ' + userNameValue.value + ',';
    document.getElementById("homepage").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("code").style.display = "none";
    event.preventDefault();
});


btnMenu.forEach((button) => {
    button.addEventListener('click', function () {
        document.getElementById("homepage").style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("code").style.display = "block";
    });
});

returnMenu.addEventListener('click', function () {
    document.getElementById("homepage").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("code").style.display = "none";
});

/* tryAgain.addEventListener('click', function () {
    let string = document.getElementById("phrase");
    let offset = document.getElementById("number");
    let encodeText = document.getElementById("encodeText");
    let decodeText = document.getElementById("decodeText");
    string.innerHTML = 'hola';
    offset.innerHTML = '';
    encodeText.innerHTML = '----';
    decodeText.innerHTML = '----';
}); */

tryAgain.addEventListener('click', function () {
    let string = document.getElementById("phrase");
    let offset = document.getElementById("number");
    let encodeText = document.getElementById("encodeText");
    let decodeText = document.getElementById("decodeText");
    string.value = '';
    offset.value = '';
    encodeText.innerHTML = '----';
    decodeText.innerHTML = '----';
});


generatedCode.onclick = function () {
    let string = document.getElementById("phrase").value;
    let offset = parseInt(document.getElementById("number").value);
    let releasedCode = cipher.encode(offset, string);
    document.getElementById("encodeText").innerHTML = (releasedCode);

};

generatedDecode.onclick = function () {
    let string = document.getElementById("phrase").value;
    let releasedDecode = string;
    document.getElementById("decodeText").innerHTML = (releasedDecode);
};

