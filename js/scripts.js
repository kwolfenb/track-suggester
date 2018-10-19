$(document).ready(function() {
  $("#formSuggester").submit(function(event) {
  event.preventDefault();

  var value1 = parseInt($("input:radio[name=question1]:checked").val());
  var value3 = parseInt($("input:radio[name=question3]:checked").val());

  var sum = (value1 + value3);

});

});
