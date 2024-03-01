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

export function isEvenOddTree(root: TreeNode): boolean {
  const q = [root];
  let even = true;

  while (q.length) {
    let size = q.length;
    let prev = even ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;

    while (size) {
      const curr = q.shift()!;

      if (even && (curr.val % 2 === 0 || prev > curr.val)) return false;
      if (!even && (curr.val % 2 !== 0 || prev < curr.val)) return false;

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);

      prev = curr.val;
      --size;
    }

    even = !even;
  }

  return true;
}
