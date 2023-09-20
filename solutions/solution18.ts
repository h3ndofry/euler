// :)

// traverse the triangle, selecting the highest possible value out of the choices given.
// path traversal is effectively using a binary search in a tree, like below:
//
//           3
//          / \
//         /   \
//        7(10) 4
//       / \     
//      /   \     
//     2     4(14)     
//          / \
//         /   \
//        5     9(23)
//
// ... and so on. Complexity: O(N)

/**
 * Returns the answer to solution 18 (and apparently 67!) of Project Euler. https://projecteuler.net/problem=18
 * @param triangle The triangle to traverse
 * @returns the result - in this case the maximum sum of the path.
 */
const solution = (triangle: Array<Array<number>>): number => {
  // we are starting from the second-to-last row here and iterating upwards
  for (let i = triangle.length - 2; i >= 0; i--) {
    // ... but here, we will iterate across each row's members
    for (let j = 0; j <= i; j++) {
      // we are comparing the next row's values (this is why we had to select the second-to-last row)
      // and then replacing the current array member with the sum of the values so far.
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  // ...by this point we should only have one value left. 
  return triangle[0][0];
};

export default solution;
