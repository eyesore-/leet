export function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const m = new Map<number, number>();

  for (let i = 0; i < arr.length; ++i) {
    m.set(arr[i], (m.get(arr[i]) ?? 0) + 1);
  }

  const sorted = Array.from(m.values()).sort((a, b) => a - b);

  let i = 0;
  let remaining = k;
  let uniq = m.size;
  while (i < sorted.length && remaining >= sorted[i]) {
    remaining -= sorted[i];
    --uniq;
    ++i;
  }

  return uniq;
}
