//Complexity-
//Time COmplexity - O(n^2)
//Auxialllary Space - O(1)

function printNGE(arr, n) {
  let next, i, j;
  for (i = 0; i < n; i++) {
    next = -1;
    for (j = i + 1; j < n; j++) {
      if (arr[i] < arr[j]) {
        next = arr[j];
        break;
      }
    }
    console.log(arr[i] + " --> " + next);
  }
}

//Example-1 --> N = 4, arr[] = [1 3 2 4]
//let arr = [1, 3, 2, 4];

//Example-2 --> N = 5, arr[] [6 8 0 1 3]
let arr = [6, 8, 0, 1, 3];
let n = arr.length;
printNGE(arr, n);
