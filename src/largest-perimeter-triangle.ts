export function largestPerimeter(nums: number[]): number {
  const sorted = nums.toSorted((a, b) => a - b);

  for (let i = nums.length - 3; i >= 0; --i) {
    if (sorted[i] + sorted[i + 1] > sorted[i + 2]) {
      return sorted[i] + sorted[i + 1] + sorted[i + 2];
    }
  }

  return 0;
}
