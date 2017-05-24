function processData(input) {
    let n = readline(),
        store = {};
    
    while (n-- > 0) {
        let s = readline();
        store[s] = store[s] ? store[s] + 1 : 1;
    }
    
    let q = readline();
    while (q-- > 0) {
        let s = readline();
        console.log(store[s] || 0);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");

_input = '';
input_array = '';
input_index = 0;

function readline() {
    return input_array[input_index++];
}

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    input_array = _input.split('\n');
    processData(input_array);
});
