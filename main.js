var activities = [];

// fuction that will add event to the tarray (activities) when it is called
function addEvent(event, action) {
	activities.push({
		events: event,
		transformed: action,
	});
}
// calling the function in order to record daily activities
addEvent(
	["matchpast", "dancing", "drama", "singing", "playing", "resting"],
	false,
);
addEvent(["cake", "sharwama", "pizza", "bread", "noddles", "supergheti"], true);
addEvent(["cake", "sharwama", "pear", "bread", "noddles", "supergheti"], false);
addEvent(["soccer", "table-tennis", "ruby", "bascket-ball", "golf"], false);
addEvent(["groundnut", "pizza", "chicken", "pork", "beef"], true);
addEvent(["avacado", "wheat", "water-melon", "pizza", "golf"], true);
addEvent(["cake", "fish", "pizza", "apple", "noddles", "pap"], true);
addEvent(["egg", "meat", "ruby", "plantain", "cray-fish"], false);
addEvent(["soccer", "table-tennis", "ruby", "pizza", "carrot"], false);
addEvent(["pear", "grape", "mango", "bascketball", "golf"], false);
addEvent(["garri", "pizza", "ruby", "bascketball", "golf"], true);
addEvent(["soccer", "cashew", "semovita", "corn", "orange"], false);
console.log(activities);

const changes = activities.filter(function (change, day) {
	if (change.events.indexOf("pizza") && change.transformed === true) {
		// return true;
		console.log(`werewolf turned immedietly he eat pizza on day ${day + 1}`);
		// console.log(changes);
	}
});
