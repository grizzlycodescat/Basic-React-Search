/*First question. Function for factorial
start time: 4:05pm
end time: 4:15pm 

In order to test this script, pease add input as an argument of the function factorial
*/


var sorted = false;
var temp, current, next;
array = [2,5,4,3,7,5];

function swapSort() {
	if (sorted == true){
		console.log('yes');
	} else {
		while (sorted == false){
			for ( var i=0; i < array.length - 1; i++){
				current = array[i];
				next = array[i+1];
				// console.log(current, next);
				if (current >= next){
					temp = array[i];
					array[i] = array[i+1];
					array[i+1] = temp;
				}
			}
			sorted = true;
		}	
	}
	console.log(array);
}


swapSort();