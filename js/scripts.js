$(document).ready(function() {
  $('div.term').attr('id', function(n) {
    return 't' + (n+1);
  });

  $(".term h2").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " p";
    var destination2 = "#" + id + " h2";
    $(destination).show("200ms");
    $(destination2).hide("200ms");
  });

  $(".term p").click(function() {
    var id = $(this).parent().attr("id");
    var destination = "#" + id + " h2";
    var destination2 = "#" + id + " p";
    $(destination).show("200ms");
    $(destination2).hide("200ms");
  });

  // $("p").click(function() {
  //   var id = $(this).parent().attr("id");
  //   var destination = "#" + id + " p";
  //   $(".term").show("200ms");
  //   $(".definition").hide();
  // });

});
