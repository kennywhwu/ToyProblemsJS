// https://www.hackerrank.com/challenges/apple-and-orange

const findFallenFruits = (apples, oranges, a, b, s, t) => {
    const applesInRange = apples.filter(ap => (a + ap >= s) && (a + ap <= t));
    const orangesInRange = oranges.filter(o => (b + o >= s) && (b + o <= t));
    console.log(applesInRange.length);
    console.log(orangesInRange.length);
}

function main() {
    var s_temp = readLine().split(' ');
    var s = parseInt(s_temp[0]);
    var t = parseInt(s_temp[1]);
    var a_temp = readLine().split(' ');
    var a = parseInt(a_temp[0]);
    var b = parseInt(a_temp[1]);
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    apple = readLine().split(' ');
    apple = apple.map(Number);
    orange = readLine().split(' ');
    orange = orange.map(Number);
    findFallenFruits(apple, orange, a, b, s, t);

}