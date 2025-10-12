function repeatString(str, count) {
	let repeat = "";
	if (count < 0)
		return "ERROR"
	for (let i = 0; i < count; i++) {
		repeat += str;
	}
	return repeat;
}
// Do not edit below this line
module.exports = repeatString;
