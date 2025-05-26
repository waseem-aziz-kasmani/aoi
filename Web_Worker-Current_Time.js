var i = 0;
//const d = new Date();
var d1 = 0;
function timedCount() {
  i = i + 1;
  d1 = d1 + 1;
  postMessage(i);
 
  setTimeout("timedCount()",1000);
  document.getElementById("TX4").innerHTML = i;   
  document.getElementById("TX5").innerHTML = new Date();   
}
