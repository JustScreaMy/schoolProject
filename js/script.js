const timeElement = document.getElementById("time");


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

