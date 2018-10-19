$(document).ready(function() {
  $("#start").click(function() {
    $(".trackSuggester, #reset").show();
  });
  $(".trackSuggester").submit(function(event) {
  event.preventDefault();

    var name = $("input#nameInput").val();

    var q1 = parseInt($("input:radio[name=question1]:checked").val());
    var q2 = $("input:radio[name=question2]:checked").val(); //do not included in "sum"
    var q3 = parseInt($("input:radio[name=question3]:checked").val());
    var q4 = parseInt($("input:radio[name=question4]:checked").val());
    var q5 = parseInt($("input:radio[name=question5]:checked").val());
    var sum = (q1 + q3 + q4 + q5);

    $("#nameOutput").text(name);

    if (q2 === "css") {
      $("#android, #c, #php, #ruby").hide();
      $("#suggest #css").show();
      $(".track").text("CSS / Design");
    }
    else if (q3 === 0 && q4 === 0) {
      $("#css, #c, #php, #ruby").hide();
      $("#android, #suggest").show();
      $(".track").text("Java / Android");
    }
    else if (sum <= 6) {
      $("#css, #android, #php, #ruby").hide();
      $("#c, #suggest").show();
      $(".track").text("C# / .NET");
    }
    else if (sum > 6 && sum <= 9) {
      $("#css, #android, #c, #ruby").hide();
      $("#php, #suggest").show();
      $(".track").text("PHP / Drupal");
    }
    else if (sum > 9) {
      $("#css, #android, #c, #php").hide();
      $("#ruby, #suggest").show();
      $(".track").text("Ruby / Drupal");
    }

  });
  $("#reset").click(function() {
    window.location.reload();
  });

});
