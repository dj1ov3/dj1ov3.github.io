console.log("wus good");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navDiv").style.top = "0";
  } else {
    document.getElementById("navDiv").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}