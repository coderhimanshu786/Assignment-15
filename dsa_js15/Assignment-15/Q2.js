//Complexity-
//Time COmplexity - O(n^2)
//Auxialllary Space - O(1)

function printPrevSmaller( arr, n)
{
	// Always print empty for first element
	console.log("-1");

	// Start from second element
	for (let i=1; i<n; i++)
	{
		// look for smaller element on left of 'i'
		let j;
		for (j=i-1; j>=0; j--)
		{
			if (arr[j] < arr[i])
			{
				console.log(arr[j] + ", ");
				break;
			}
		}

		// If there is no smaller element on left of 'i'
		if (j == -1)
		console.log("-1");
	}
}

	//Example-1 n = 3 // a = {1, 6, 2}
	//let arr = [1, 6, 2];

	//Example-2 n = 6  // a = {1, 5, 0, 3, 4, 5}
	let arr = [1, 5, 0, 3, 4, 5]
	let n = arr.length;
	printPrevSmaller(arr, n);
