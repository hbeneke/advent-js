/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
function isTreesSynchronized(tree1, tree2) {
  const isMirror = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2) return false;
    if (n1.value !== n2.value) return false;
    return isMirror(n1.left, n2.right) && isMirror(n1.right, n2.left);
  };

  return [isMirror(tree1, tree2), tree1.value];
}
