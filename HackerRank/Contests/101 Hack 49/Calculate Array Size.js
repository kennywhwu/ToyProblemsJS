function getArrayKb(n, d){
    let product = 1;
    for (let i = 0; i < d.length; i++) {
        product *= d[i];
    }
    
    return Math.floor((product * 4) / 1024);
}

function main() {
    //  Return the size of the multidimensional array in kilobytes. Return only the integer part.
    var n = parseInt(readLine());
    d = readLine().split(' ');
    d = d.map(Number);
    var result = getArrayKb(n, d);
    process.stdout.write(""+result+"\n");

}