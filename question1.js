/*First question. Function for factorial
start time: 3:50pm
end time: 4:00pm 

In order to test this script, pease add input as an argument of the function factorial
*/

var result;

function factorial(number) {
	result = number;
	if (number == 0 || number == 1){
		return 1;
	}
	else {
		while (number > 1) {
			number--;
			result = result * number;
		}
		return result;
	}
}


factorial(5);