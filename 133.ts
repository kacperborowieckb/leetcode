class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

type VisitedNodes = Map<string, string[]>

function cloneGraph(node: _Node | null): _Node | null {
    const visitedNodes = new Map()

    function clone(currentNode: _Node | null) {
        if (!currentNode) {
            return null
        }

        if (visitedNodes.has(currentNode)) {
            return visitedNodes.get(currentNode)
        }

        const clonedNode = new _Node(currentNode.val)

        visitedNodes.set(currentNode, clonedNode)

        for (node of currentNode.neighbors) {
            clonedNode.neighbors.push(clone(node))
        }

        return clonedNode
    }

    return clone(node)
}
