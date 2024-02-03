export function maxSumAfterPartitioning(arr: number[], k: number): number {
  const mem = Array(arr.length + 1).fill(0);
  let max, sum;

  for (let i = 0; i < arr.length; ++i) {
    max = sum = 0;
    for (let j = i; j > Math.max(-1, i - k); --j) {
      max = Math.max(max, arr[j]);
      sum = Math.max(sum, max * (i - j + 1) + mem[j]);
    }
    mem[i + 1] = sum;
  }

  return mem[arr.length];
}
