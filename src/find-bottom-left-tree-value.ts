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

export function findBottomLeftValue(root: TreeNode | null): number {
  if (root === null) return 0;

  let last = root.val;
  let maxLevel = 0;

  function traverse(r: TreeNode, level: number) {
    if (!r.left && !r.right && level > maxLevel) {
      last = r.val;
      maxLevel = level;
    }

    if (r.left) traverse(r.left, level + 1);
    if (r.right) traverse(r.right, level + 1);
  }

  traverse(root, 1);

  return last;
}
