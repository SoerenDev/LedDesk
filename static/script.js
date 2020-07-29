var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

red.oninput = function () {
    data = "red=" + this.value; 
    sendData(data);
}

green.oninput = function () {
    data = "green=" + this.value;
    sendData(data);
}

blue.oninput = function () {
    data = "blue=" + this.value;
    sendData(data);
}

function sendData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(data);
}