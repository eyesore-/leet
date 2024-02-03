// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807
//
// Example 2
// Input: l1 = [0], l2 = [0]
// Output: [0]
//
// Example 3
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  function sum(
    nX: ListNode | null,
    nY: ListNode | null,
    r: number,
  ): ListNode | null {
    if (nX === null && nY === null && r === 0) return null;

    const v = (nX?.val ?? 0) + (nY?.val ?? 0) + r;
    return new ListNode(
      v % 10,
      sum(nX?.next || null, nY?.next || null, Math.floor(v / 10)),
    );
  }

  return sum(l1, l2, 0);
}
