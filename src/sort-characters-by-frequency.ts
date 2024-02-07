export function frequencySort(s: string): string {
  const count = new Map<string, string>();

  for (let i = 0; i < s.length; ++i) {
    count.set(s[i], (count.get(s[i]) ?? "") + s[i]);
  }

  return Array.from(count.values())
    .sort((a, b) => b.length - a.length)
    .join("");
}

export function frequencySort2(s: string): string {
  const count = new Map<string, number>();
  let answer = "";

  for (let i = 0; i < s.length; ++i) {
    count.set(s[i], (count.get(s[i]) ?? 0) + 1);
  }

  const sorted = Array.from(count).sort(([_1, c1], [_2, c2]) => c2 - c1);
  for (let [l, r] of sorted) {
    answer += l.repeat(r);
  }

  return answer;
}
