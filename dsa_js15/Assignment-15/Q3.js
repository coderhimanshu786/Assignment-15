//Complexity-
//Time Complexity - O(n)
//Auxialllary Space - O(1)

// Implement stack using Two queues
class Stack {
	constructor() {
		this.q1 = [];
		this.q2 = [];
	}

	push(x) {
		// Push x first in isEmpty q2
		this.q2.push(x);
		// Push all the remaining elements in q1 to q2.
		while (this.q1.length != 0) {
			this.q2.push(this.q1[0]);
			this.q1.shift();
		}
		// swap names of two queues
		this.q = this.q1;
		this.q1 = this.q2;
		this.q2 = this.q;
	}

	pop() {
		// if no elements are there in q1
		if (this.q1.length == 0)
			return;
		this.q1.shift();
	}

	top() {
		if (this.q1.length == 0)
			return -1;
		return this.q1[0];
	}

	size() {
		console.log(this.q1.length);
	}

	isEmpty() {
		// return true if the queue is empty.
		return this.q1.length == 0;
	}

	front() {
		return this.q1[0];
	}
}

//Example-1 -->
let s = new Stack();
// s.push(2)
// s.push(3)
// s.push(4)

//Example-2 -->
s.push(2);
s.push(3);
console.log("current size: ");
s.size();
console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());