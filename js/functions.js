var el = document.getElementById("no");
if (el.addEventListener) el.addEventListener("click", clear, false);
else if (el.attachEvent) el.attachEvent("onclick", clear);

var el = document.getElementById("ok");
if (el.addEventListener) el.addEventListener("click", traducir, false);
else if (el.attachEvent) el.attachEvent("onclick", traducir);

function clear() {
  document.getElementById("textarea").value = "";
  location.reload();
}

function traducir() {
  head();
  let str = document.getElementById("textarea").value;

  var body = document.getElementsByTagName("body")[0];

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < str.length; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      var celda = document.createElement("td");
      var binar = binario(str.charCodeAt(i));      
      var textoCelda = document.createTextNode(
        " " + str.charCodeAt(i) 
        + "__" + binar.charAt(0)
        + "__" + binar.charAt(1)
        + "_" + binar.charAt(2)
        + "__" + binar.charAt(3)
        + " " + binar.charAt(4)
        + " " + binar.charAt(5)
        + " " + binar.charAt(6)
        + " " + binar.charAt(7)
      );
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);

  body.appendChild(tabla);

  tabla.setAttribute("border", "2");
}

function binario(dec) {
  let answer = "";
  if (dec >= 128) {
    dec = dec-128;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 64) {
    dec = dec-64;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 32) {
    dec = dec-32;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 16) {
    dec = dec-16;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 8) {
    dec = dec-8;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 4) {
    dec = dec-4;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 2) {
    dec = dec-2;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  if (dec >= 1) {
    dec = dec-1;
    answer = answer+"1";
  } else {
    answer = answer+"0";
  }

  return answer;
}

function head(){
    var body = document.getElementsByTagName("body")[0];

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");

  for (var i = 0; i < 1; i++) {
    var hilera = document.createElement("tr");

    for (var j = 0; j < 1; j++) {
      var celda = document.createElement("td");      
      var textoCelda = document.createTextNode(
        "Cod 128 64 32 16 8 4 2 1"
      );
      celda.appendChild(textoCelda);
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }

  tabla.appendChild(tblBody);

  body.appendChild(tabla);

  tabla.setAttribute("border", "2");
}
