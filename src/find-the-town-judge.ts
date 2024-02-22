export function findJudge(n: number, trust: number[][]): number {
  if (trust.length === 0 && n > 1) return -1;
  if (trust.length === 0) return 1;

  const arr = Array(n);

  for (let i = 0; i < trust.length; ++i) {
    const [n, t] = trust[i];

    if (!arr[t - 1]) arr[t - 1] = [0, 0];
    ++arr[t - 1][1];

    if (!arr[n - 1]) arr[n - 1] = [0, 0];
    ++arr[n - 1][0];
  }

  for (let j = 0; j < arr.length; ++j) {
    if (arr[j] && arr[j][0] === 0 && arr[j][1] === n - 1) return j + 1;
  }

  return -1;
}

console.log(findJudge(2, []));
