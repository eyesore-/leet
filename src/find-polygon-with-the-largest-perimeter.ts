export function largestPerimeter(nums: number[]): number {
  return nums
    .toSorted((a, b) => a - b)
    .reduce(
      (acc, curr) => {
        if (curr < acc[0]) acc[1] = curr + acc[0];

        acc[0] += curr;
        return acc;
      },
      [0, -1],
    )[1];
}
