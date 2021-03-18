var genNum = "#"
var newGen
var displayNum = document.getElementById('num').innerHTML;

//document.getElementById("gen").addEventListener('click', generateNum());

function generateNum() {
  genNum = Math.floor((Math.random() * 100) + 1);
  document.getElementById('num').innerHTML = genNum;
}
