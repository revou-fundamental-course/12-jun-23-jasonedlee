function resett() {
  document.getElementById("inCelsius").value = "";
  document.getElementById("inFahrenheit").value = "";
  document.getElementById("ckal").value = "";
}

function konversi() {
  const angkaIn = document.getElementById("inCelsius").value;
  if (angkaIn == "") {
    alert("Masukkan Angka");
  } else {
    if (document.getElementById("title-celsius").innerHTML == "Celsius:") {
      var angkaOut = (angkaIn * 9) / 5 + 32;
      document.getElementById("inFahrenheit").value = angkaOut;
      document.getElementById("ckal").value = `Fahrenheit = (${angkaIn} * 9) / 5 + 32 = ${angkaOut}${String.fromCharCode(176)}F`;
    } else {
      var angkaOut = ((angkaIn - 32) * 5) / 9;
      document.getElementById("inFahrenheit").value = angkaOut;
      document.getElementById("ckal").value = `Celsius = (${angkaIn} - 32) * 5 / 9 = ${angkaOut}${String.fromCharCode(176)}C`;
    }
  }
}

function balik() {
  document.getElementById("title-fahtocel").innerHTML = "Fahrenheit to Celsius";
  document.getElementById("title-celsius").innerHTML = "Fahrenheit";
  document.getElementById("title-fahrenheit").innerHTML = "Celsius";
  document.getElementById("revv").setAttribute("onclick", "balik2()");
}

function balik2() {
  document.getElementById("title-fahtocel").innerHTML = "Celsius to Fahrenheit";
  document.getElementById("title-celsius").innerHTML = "Celsius";
  document.getElementById("title-fahrenheit").innerHTML = "Fahrenheit";
  document.getElementById("revv").setAttribute("onclick", "balik()");
}