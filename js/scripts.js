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
    const name = $("input#name").val();
    if (name) {
    $("#questions").hide();
    $("form").show();
    } else {
      alert("Your journey awaits! Please enter your name.")
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    $(".showLater").hide();
    $("#intro").hide();
    $("#results").show();
  });

  $("#goodResult").click(function(event) {
    event.preventDefault();
    $(".showLater").hide();
    $("#intro").hide();
    $("#celebrate").show();
  });

  $("#badResult").click(function(event) {
    event.preventDefault();
    $(".showLater").hide();
    $("#intro").show();
    $("#retry").text("Oh, no! Your quest went awry :( Never fear! Repeat your quest here :)");
  });

});

// const color = $("input:radio[name=color]:checked").val();