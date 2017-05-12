// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.

// Input Format

// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.

// Constraints

// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

const highestDiagonal = (matrix) => {
    let i, d1 = 0, d2 = 0;
    let len = matrix.length;
    let diag = 0;
    
    for (i = 0; i < len; i++) {
        let num = matrix[i][diag++];
        d1 += isNaN(num) ? 0 : num;
    }
    
    diag = 0;
    for (i = len - 1; i >= 0; i--) {
        let num = matrix[i][diag++];
        d2 += (isNaN(num) ? 0 : num);
    }
    
    return Math.abs(d1 - d2);
}









