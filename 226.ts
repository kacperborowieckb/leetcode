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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  invertNodes(root);

  return root;
}

function invertNodes(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  const tempLeftRoot = root.left;

  root.left = root.right;
  root.right = tempLeftRoot;

  invertNodes(root.left);
  invertNodes(root.right);

  return null
}
