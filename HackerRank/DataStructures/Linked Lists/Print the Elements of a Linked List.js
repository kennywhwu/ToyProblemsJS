// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list

function print(head) {
    let node = head;
    
    while (node) {
        console.log(node.data);
        node = node.next;
    }
}