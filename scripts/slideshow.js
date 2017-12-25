$(document).ready(function() {

	var imagesline = $(".allphotos img");
	var ognode = 0;
	var nodecount = 0;
	var finalnode = imagesline.length - 1;


//only works on desktop version
	console.log($("#aboutdescription").css("font-size") !== "13px");

if ($("#aboutdescription").css("font-size") !== "13px") {

	setInterval(function() {
			if (nodecount < finalnode) {
				$(".allphotos").animate({"margin-left": '-=100%'}, 1000);
				nodecount = nodecount + 1;
			}
			else if (nodecount === finalnode) {
				$(".allphotos").animate({"margin-left": '+=400%'}, 1000);
				nodecount = 0;
			}}, 3000);

}




});
