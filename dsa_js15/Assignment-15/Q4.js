//Complexity-
//Time Complexity - O(n)
//Auxialllary Space - O(1)


// using Stack class for stack implementation
let st = [];

// Below is a recursive function that inserts an element at the bottom of a stack.
function insert_at_bottom(x)
{
	if(st.length==0)
		st.push(x);
	else
	{
		// All items are held in Function Call Stack until we reach end of the stack. When the stack becomes empty, the st.size() becomes 0, the above if part is executed and the item is inserted at the bottom
			let a = st.pop();
			insert_at_bottom(x);

			// push allthe items held in Function Call Stack once the item is inserted at the bottom
			st.push(a);
	}
	
	
}
// Below is the function that reverses the given stack using insert_at_bottom()
function reverse()
{
	if(st.length > 0)
		{
			
			// Hold all items in Function Call Stack until we reach end of the stack
			let x = st.pop();
			reverse();
			
	 //Insert all the items heldin Function Call Stack one by one from the bottom to top. Every item is inserted at the bottom
			insert_at_bottom(x);
		}
}

//Example-1 push elements into the stack
// st.push('3');
// st.push('2');
// st.push('1');
// st.push('7');
// st.push('6');

//Example-2 push elements into the stack
st.push('4');
st.push('3');
st.push('9');
st.push('6');

console.log(`Original Stack -> ` + st.join(" "));

// function to reverse the stack
reverse();

console.log(`Reversed Stack -> ` + st.join(" "));