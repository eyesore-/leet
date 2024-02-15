export function rearrangeArray(nums: number[]): number[] {
  const partition: [number[], number[]] = [[], []];
  const result: number[] = [];

  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < 0) partition[0].push(nums[i]);
    else partition[1].push(nums[i]);
  }

  for (let j = 0; j < Math.max(partition[0].length, partition[1].length); ++j) {
    if (partition[1][j]) result.push(partition[1][j]);
    if (partition[0][j]) result.push(partition[0][j]);
  }

  return result;
}
