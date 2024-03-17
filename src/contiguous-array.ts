export function findMaxLength(nums: number[]): number {
  let sum = 0;
  let max = 0;
  let h = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] ? ++sum : --sum;

    if (!sum) {
      max = i + 1;
    } else {
      if (h.has(sum)) {
        max = Math.max(max, i - h.get(sum));
      } else {
        h.set(sum, i);
      }
    }
  }

  return max;
}
