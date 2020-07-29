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
    document.body.style.backgroundColor = rgb(Number(red.value),Number(green.value),Number(blue.value))
    
}

function rgb(r,g,b) {
    r = r.toString(16);
    console.log(r.toString(16))
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    return "#" + r + g + b;
}
