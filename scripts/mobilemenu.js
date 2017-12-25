$(document).ready(function() {

  $(".mobilemenu").mouseover(function() {
    $(".bar").css("background-color", "#cd3023");
  });

  $(".mobilemenu").mouseout(function() {
    $(".bar").css("background-color", "white");
  });

  $(".mobilemenu").click(function() {
    $(".mobilelinkpage").css("margin-left", "0%");
    $(".mobilemenu").hide();
  });

  $("#exitX").click(function() {
    $(".mobilelinkpage").css("margin-left", "100%");
    $(".mobilemenu").show();
  })


});
