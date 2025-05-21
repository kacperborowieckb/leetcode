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

function levelOrder(root: TreeNode | null): number[][] {
  const result: number[][] = [];

  const queue = [root];

  while (queue.length) {
    const singleLevel: number[] = [];

    Array.from({ length: queue.length - 1 }).forEach((_) => {
      const currNode = queue.shift();

      if (currNode) {
        singleLevel.push(currNode.val);
        queue.push(currNode.left, currNode.right);
      }
    });

    if (singleLevel.length) {
      result.push(singleLevel);
    }
  }

  return result;
}
