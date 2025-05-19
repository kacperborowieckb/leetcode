class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  let curr = head;
  let fast = head;

  while (fast && fast.next && curr) {
    curr = curr.next;
    fast = fast.next.next;
    if (curr === fast) {
      return true;
    }
  }

  return false;
}
