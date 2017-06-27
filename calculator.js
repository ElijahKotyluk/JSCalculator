function addChar(input, character) {
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}
// Sqare root button display
function sqrt(form) {
	form.display.value = Math.sqrt(form.display.value);
}
// Natural Logarithm button display
function ln(form) {
	form.display.value = Math.log(form.display.value);
}
// Exponential button display
function exp(form) {
	form.display.value = Math.exp(form.display.value);
}
// Del button -1 character to displayed value
function deleteChar(input) {
	input.value = input.value.substring(0, input.value.length - 1)
}
// Turns number in display to percent
var val = 0.0;
function percent(input) {
  val = input.value;
  input.value = input.value + "%";
}
// Converts negative positive to negative/Negative to positive
function changeSign(input) {
	if(input.value.substring(0, 1) == "-")
		input.value = input.value.substring(1, input.value.length)
	else
		input.value = "-" + input.value
}
// Calculates user's math problem
function compute(form) {
    form.display.value = eval(form.display.value);
  }

// multiplies number in display by itself
function square(form) {
	form.display.value = eval(form.display.value) * eval(form.display.value)
}
// Restricts number/type of characters in display
function checkNum(str) {
	for (var i = 0; i < str.length; i++) {
		var ch = str.charAt(i);
		if (ch < "0" || ch > "9") {
			if (ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
				&& ch != "(" && ch!= ")" && ch != "%") {
				alert("invalid entry!")
				return false
				}
			}
		}
		return true
}
