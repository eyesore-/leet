class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let longest = 0;

  function walk(r: TreeNode | null): number {
    if (!r) return 0;

    const left = walk(r.left);
    const right = walk(r.right);

    longest = Math.max(longest, left + right);

    return Math.max(left, right) + 1;
  }

  walk(root);

  return longest;
}
