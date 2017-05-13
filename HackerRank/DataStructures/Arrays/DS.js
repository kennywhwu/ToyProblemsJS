// https://www.hackerrank.com/challenges/arrays-ds

const reverse = arr => {
    return arr.reduceRight((reversed, str) => {
        reversed.push(str);
        return reversed;
    }, []).join(' ');
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    console.log(reverse(arr));
}