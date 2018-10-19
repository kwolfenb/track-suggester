$(document).ready(function() {
  $(".formOne").submit(function(event) {
  event.preventDefault();

  var operator1 = parseInt($("input:radio[name=question1]:checked").val());
  var operator2 = parseInt($("input:radio[name=question2]:checked").val());
  var operator3 = parseInt($("input:radio[name=question3]:checked").val());

  var sum = (operator1 + operator2 + operator3);

  }


});

});
