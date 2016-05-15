var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("reindeer");

for (var i = 0; i < reindeer.length-1; i++) {
	hohohoElement.innerHTML += ("<li>" + colors[i]+ " " + reindeer[i] + "," + "</li>");
}
hohohoElement.innerHTML += ("<li>" + colors[colors.length-1] + " " + reindeer[reindeer.length-1] + "." + "</li>");
