// function determineResult(val1, val2, val3, val4, val5, val6) {
//   const quizTotal = val1 + val2 + val3 + val4 + val5 +val6; 
//   let result;

//   if () {
//     result = "Python";
//   } else if () {
//     result= "Ruby";
//   } else if() {
//     result = "C#";
//   } else {
//     result = "JavaScript";
//   }
// }

$(document).ready(function() {

  $("#continue1").click(function(event) {
    event.preventDefault();
    $("#intro").hide();
    $("#questions").show();
  });

  $("#continue2").click(function(event) {
    event.preventDefault();
    $("#questions").hide();
    $("form").show();
  });

  $("form").submit(function(event) {
    event.preventDefault();
    $(".showLater").hide();
    $("#intro").hide();
    $("#results").show();
  });

});