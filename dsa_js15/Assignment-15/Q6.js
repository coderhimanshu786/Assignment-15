//Complexity-
//Time COmplexity - O(n)
//Auxialllary Space - O(n)

// Method to evaluate value of a postfix expression
function evaluatePostfix(exp)
{
	//create a stack
		let stack=[];
		
		// Scan all characters one by one
		for(let i=0;i<exp.length;i++)
		{
			let c=exp[i];
			
			// If the scanned character is an operand (number here), push it to the stack.
			if(! isNaN( parseInt(c) ))
			stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
			
			// If the scanned character is an operator, pop two elements from stack apply the operator
			else
			{
				let val1 = stack.pop();
				let val2 = stack.pop();
				
				switch(c)
				{
					case '+':
					stack.push(val2+val1);
					break;
					
					case '-':
					stack.push(val2- val1);
					break;
					
					case '/':
					stack.push(val2/val1);
					break;
					
					case '*':
					stack.push(val2*val1);
					break;
			}
			}
		}
		return stack.pop();
}

// Example-1 Input: S = "231*+9-"
// let exp = "231*+9-";

//Example-2 Input: S = "123+*8-"
let exp = "123+*8-"
console.log("After solving the given expression postfix evaluation: "+evaluatePostfix(exp));
