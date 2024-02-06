// brute force

export function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; ++i) {
    const sorted = strs[i].split("").sort().join("");

    if (anagrams[sorted]) {
      anagrams[sorted].push(strs[i]);
    } else {
      anagrams[sorted] = [strs[i]];
    }
  }

  return Object.values(anagrams);
}
