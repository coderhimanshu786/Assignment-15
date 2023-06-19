//Complexity-
//Time Complexity - O(n)
//Auxialllary Space - O(1)

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    const popped = this.stack.pop();

    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

//calling to function
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top(); // return 0
minStack.getMin(); // return -2
//print
console.log("Minimum element:", minStack.getMin()); // Output: -3

minStack.pop();

console.log("Top element:", minStack.top()); // Output: 0
console.log("Minimum element:", minStack.getMin()); // Output: -2
console.log("Null element:", minStack.nullElement); // Output: undefined
