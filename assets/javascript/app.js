$(document).ready(function(){
  console.log("wus good");
  //Scroll function for navbar
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
  //Hides the other options when clicking on projects
  $('.projects').on('show.bs.collapse', function() {
    $(this).siblings().children().collapse('hide');
 });

})


