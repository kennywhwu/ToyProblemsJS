const doTheyMeet = (k1, k1jumps, k2, k2jumps) => {
    if (k2jumps >= k1jumps) return 'NO';
    
    const meetingPoint = jumpsToMeet(k1, k1jumps, k2, k2jumps);
    
    return meetingPoint === Math.floor(meetingPoint) ? 'YES' : 'NO';
}

const jumpsToMeet = (k1, k1jumps, k2, k2jumps) => {
    return (k2 - k1) / (k1jumps - k2jumps);
}


function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    console.log(doTheyMeet(x1, v1, x2, v2));
}