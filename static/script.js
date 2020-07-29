var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

red.oninput = function () {
    sendData();
}

green.oninput = function () {
    sendData();
}

blue.oninput = function () {
    sendData();
}

function sendData() {
    var data = "red=" + red.value + "&green=" + green.value + "&blue=" + blue.value;
    var request = new XMLHttpRequest();
    request.open('POST', '', true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(data);
}