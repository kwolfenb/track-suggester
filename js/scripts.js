$(document).ready(function() {
  $("#trackSuggester").submit(function(event) {
    event.preventDefault();

    var name = $("input#nameInput").val();

    var value1 = parseInt($("input:radio[name=question1]:checked").val());
    var value2 = parseInt($("input:radio[name=question2]:checked").val()); //do not included in "sum"
    var value3 = parseInt($("input:radio[name=question3]:checked").val());
    var value4 = parseInt($("input:radio[name=question4]:checked").val());
    var value5 = parseInt($("input:radio[name=question5]:checked").val());
    var sum = (value1 + value3 + value4 + value5);


    // if ("1" > "0") {
      $("p").css({'color': 'red'});
      // $("#css").show();
    // }  else if ($("input#question3").val() === "android" || $("input#question5").val() === "android") {
    //   $("#android").show();
    // } else if (sum <= 6) {
    //   $("#c").show();
    // } else if (sum > 6 && sum <= 9) {
    //   $("#php").show();
    // } else if (sum > 9) {
    //   $("#ruby").show();
  });

});
