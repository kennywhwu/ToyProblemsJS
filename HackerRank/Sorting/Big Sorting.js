// Consider an array of numeric strings, , where each string is a positive number with anywhere 
// from  to  digits. Sort the array's elements in non-decreasing 
// (i.e., ascending) order of their real-world integer values and print each element of the sorted array on a new line.

// https://www.hackerrank.com/challenges/big-sorting

const customSort = (a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) return 1;
        if (a[i] < b[i]) return -1;
    }
    
    return 0;
}


function main() {
    var n = parseInt(readLine());
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }
    let res = unsorted.sort(customSort);
    res.forEach(n => console.log(n))
}
