$(document).ready(function() {
  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });

  $("h2").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    $(".definition").show();
    $(".term").hide();
  });

  $("p").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    $(".term").show("200ms");
    $(".definition").hide();
  });

  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });
});
