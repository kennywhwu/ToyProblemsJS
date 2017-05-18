// https://www.hackerrank.com/challenges/cats-and-a-mouse

function main() {
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        let c1 = Math.abs(x - z);
        let c2 = Math.abs(y - z);
        let winner;

        if (c1 === c2) {
            winner = 'Mouse C';
        } else if (c1 > c2) {
           winner = 'Cat B'; 
        } else {
            winner = 'Cat A';
        }

        console.log(winner);
    }
}
