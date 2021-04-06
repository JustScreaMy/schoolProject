const timeElement = document.getElementById("time");
const nav = document.getElementsByTagName("nav")[0];
const showNav = document.getElementById("showNav");

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

showNav.onclick = () => {
	if (nav.style.display === "table") {
		nav.style.display = "none";
	} else {
		nav.style.display = "table";
	}
};
