function determineResult(val1, val2, val3, val4, val5) {
  const quizTotal = val1 + val2 + val3 + val4 + val5; 
  let result;

  if (quizTotal <= 7) {
    result = "Ruby";
  } else if (quizTotal <= 12) {
    result= "Python";
  } else {
    result = "JavaScript";
  }
  return result;
}

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
      alert("Your journey awaits! Please enter your name.");
    }
  });

  $("form").submit(function(event) {
    event.preventDefault();
    const val1 = parseInt($("input:radio[name=flower]:checked").val());
    const val2 = parseInt($("input:radio[name=genre]:checked").val());
    const val3 = parseInt($("input:radio[name=day]:checked").val());
    const val4 = parseInt($("input:radio[name=dancing]:checked").val());
    const val5 = parseInt($("input:radio[name=familiar]:checked").val());
    const name = $("input#name").val();
    let languageResult = determineResult(val1, val2, val3, val4, val5);
    $(".name").text(name);
    $(".languageResult").text(languageResult);
    $(".showLater").hide();
    $("#intro").hide();
    $("#results").show();
  });

  $("#goodResult").click(function(event) {
    event.preventDefault();

    $(".showLater").hide();
    $("#intro").hide();

    const reward = $("input:radio[name=reward]:checked").val();
    if (reward === "coins") {
      $("body").addClass("coin-background");
    } else {
      $("body").addClass("confetti-background");
    }

    const color = $("input:radio[name=color]:checked").val();

    if (color === "pink") {
      $("#celebrate").addClass("pink-background");
      $(".jumbotron").addClass("pink-background");
    } else if (color === "green") {
      $("#celebrate").addClass("green-background");
      $(".jumbotron").addClass("green-background");
    } else if (color === "blue") {
      $("#celebrate").addClass("blue-background");
      $(".jumbotron").addClass("blue-background");
    } else {
      $("#celebrate").addClass("purple-background");
      $(".jumbotron").addClass("purple-background");
    }

    $("#celebrate").show();
    $("#continue4").show();
  });

  $("#continue4").click(function(event) {
    event.preventDefault();
    location.reload();
  });

  $("#badResult").click(function(event) {
    event.preventDefault();
      alert ("Oh, no! Your quest went awry :( Never fear! Repeat your quest here :)");
      location.reload();
  });

});

