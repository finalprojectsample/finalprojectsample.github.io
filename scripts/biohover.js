$(document).ready(function() {


//hover only works on desktop
  $(".profileblockhover").mouseover(function() {
    if ($(".profileblock").css("float") !== "none") {
      $(this).find(".bioblock").show();
      $(this).find(".bioblock").css("display", "flex");
    } else {
      $(this).find(".bioblock").hide();
    }
  $(".profileblockhover").mouseout(function() {
    $(this).find(".bioblock").hide();
  });

});

});
