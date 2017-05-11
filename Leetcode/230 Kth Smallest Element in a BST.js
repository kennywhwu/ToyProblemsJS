/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    var result = null;
    var traverse = function(node) {
        if (node.left) {
            traverse(node.left);
        }
        k--;
        if (k === 0) {
            result = node.val;
            return;
        }
        if (node.right) {
            traverse(node.right);
        }
    }
    traverse(root);
    return result;
}
