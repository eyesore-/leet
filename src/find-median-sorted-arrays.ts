function mergeSorted(a: number[], b: number[]): number[] {
  const r = [];
  let i = 0;
  let j = 0;

  while (i + j < a.length + b.length) {
    if (a[i] < (b[j] ?? Infinity)) {
      r.push(a[i]);
      ++i;
    } else {
      r.push(b[j]);
      ++j;
    }
  }

  return r;
}

export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[],
): number {
  const a = mergeSorted(nums1, nums2);
  const m = a.length / 2;

  return m % 1 === 0 ? (a[m - 1] + a[m]) / 2 : a[Math.floor(m)];
}
