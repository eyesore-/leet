export function firstUniqChar(s: string): number {
  const mem = new Map();

  for (let i = 0; i < s.length; ++i) {
    mem.set(s[i], (mem.get(s[i]) ?? 0) + 1);
  }

  for (let j = 0; j < s.length; ++j) {
    if (mem.get(s[j]) === 1) return j;
  }

  return -1;
}
