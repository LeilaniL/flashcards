$(document).ready(function() {

  $("button#bark").click(function() {
    $("ul#bark").append("<li>Arf!</li>");
    $("ul#meow").append("<li>Meow!</li>");
    $("ul#bark").children("li").click(function() {
      $(this).remove();
    });
  });


  $("button#meow").click(function() {
    $("ul#meow").append("<li>Meow!</li>");
    $("ul#bark").append("<li>Arf!</li>");
    $("ul#meow").children("li").click(function() {
      $(this).remove();
      });
  });
});
