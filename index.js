// Assignment Number 1. Create a function with a function name printSum( ) and print the sum of an array.
function printsum (array) {
  let sum = 0;
  for (const item of array) {
    sum += item
  }
  console.log(sum);
}
 printsum ([2, 4, 8, 10]);

// Assignment Number 2
//  Alice and Bob each created one problem for hackerrank, a viewer rates the challenges, awarding points from a scale of 1-100 for three categories: problem clarity, originality and difficulty.the rating for alice’s challenge is the triplet a=(a[0], a[1], a[2]) and the rating for Bob's challenge is the triplet b=(b[0], b[1], b[2]). The task is to find their different comparison points by comparing a[0] to b[0], a[1] to b[1], a[2] to b[2]
 function compareTriplets(a, b) {
  let aScore=0;
  let bScore=0;
  for(let i=0;  i<3; i++){
  
      if( a[ i]> b[ i])
      {
           aScore+=1;
      }
      else{
      if( a[ i]< b[ i])
      {
           bScore+=1;    
      }  
      } 
  }
  
  let comparison_array = [ aScore,  bScore];
  return comparison_array;
  }



// Assignment Number 3. 
// Given an array of integers, calculate the ratio of its elements that are positive, negative and zero. Print the decimal value of each fraction on a new line with places after the decimal.

function positiveNegativeZero(arr)
{
	let len = arr.length;
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;
	for(let i = 0; i < len; i++)
	{
		if (arr[i] > 0)
		{
			positiveCount++;
		}
		else if (arr[i] < 0)
		{
			negativeCount++;
		}
		else if (arr[i] == 0)
		{
			zeroCount++;
		}
	}
	document.write((positiveCount / len).toFixed(4) + " ");
	document.write((negativeCount / len).toFixed(4) + " ");
	document.write((zeroCount / len).toFixed(4));
	document.write("<br>");
}
// Test Case 1:
let a1 = [ 2, -1, 5, 6, 0, -3 ];
positiveNegativeZero(a1);
// Test Case 2:
let a2 = [ 4, 0, -2, -9, -7, 1 ];
positiveNegativeZero(a2);


// Assignment number 4.Create a function with a function name firstFunction( ) and return the sum of two integers(numbers).
function firstFunction(number) {
  return number + number ;
}
console.log(firstFunction(70));