$(document).ready(function() {
  var inputAge = prompt("Enter your age:");

  if (inputAge < 18) {
    $(".minors").show();
  } else {
    $(".adults").show();
  }
});
