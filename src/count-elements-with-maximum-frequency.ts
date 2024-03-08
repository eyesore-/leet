export function maxFrequencyElements(nums: number[]): number {
  const mem = new Map();
  let m = 0;
  let o = 0;

  for (let i = 0; i < nums.length; ++i) {
    const n = (mem.get(nums[i]) ?? 0) + 1;
    mem.set(nums[i], n);

    if (n > m) {
      o = 0;
      m = n;
    }

    if (n === m) ++o;
  }

  return m * o;
}

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4]));
