type NextNode = ListNode | null

class ListNode {
  val: number;
  next: NextNode
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const dummy = new ListNode(0, head);

    let left: NextNode = dummy;
    let right: NextNode = dummy;

    Array.from({ length: n + 1 }).forEach(_ => {
        right = right?.next ?? null
    })

    while (right !== null) {
        right = right.next;
        left = left?.next ?? null;
    }
    
    if (left) {
        left.next = left?.next?.next ?? null;
    }

    return dummy.next;
}