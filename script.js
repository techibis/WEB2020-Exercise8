window.onscroll = function (e) {
	if (document.documentElement.scrollTop < 500 ) {
		console.log("Near Top");
	}
	else if (document.documentElement.scrollTop < 2500)
		console.log("Near Middle");
	else
		console.log("Near Bottom");

	limeBox.innerHTML = document.documentElement.scrollTop;

	if (document.documentElement.scrollTop >= 2000)
		dog.style.top = "2000px";
}

var limeBox = document.getElementById("limeBox");
limeBox.innerHTML = document.body.scrollTop;

var blueBox = document.getElementById("blueBox");
var redBox = document.getElementById("redBox");

blueBox.onscroll = function(e) {
	redBox.innerHTML = blueBox.scrollTop;
	if (blueBox.scrollTop == 1921)
		link.style.visibility = "inherit";
}
function clicked() {
	alert("Thank you for agreeing");
}

var link = document.getElementById("agree");
agree.style.visibility = "hidden";

var dog = document.getElementById("dog");












