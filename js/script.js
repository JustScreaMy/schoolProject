const timeElement = document.getElementById("time");
const nav = document.getElementsByTagName("nav")[0];
const childNav = nav.getElementsByTagName("ul")[1].getElementsByTagName("li");
const showNav = document.getElementById("showNav");

const hideNav = () => {
	if (document.body.clientWidth < 750) {
		nav.style.display = "";
	}
};

var intervalID = setInterval(() => {
	let date = new Date();
	timeElement.textContent =
		date.getHours().toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		}) +
		":" +
		date.getMinutes().toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		}) +
		":" +
		date.getSeconds().toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
}, 1000);

if (timeElement == null) {
	clearInterval(intervalID);
}

showNav.addEventListener("click", () => {
	if (nav.style.display === "table") {
		nav.style.display = "";
	} else {
		nav.style.display = "table";
	}
});

for (var i = 0; i < childNav.length; i++) {
	childNav[i].addEventListener("click", hideNav);
}
