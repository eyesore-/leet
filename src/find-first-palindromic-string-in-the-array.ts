function isPalindrome(s: string): boolean {
  let t = s.length - 1;

  for (let h = 0; t < s.length / 2; ++h, --t) {
    if (s[h] !== s[t]) return false;
  }

  return true;
}

export function firstPalindrome(words: string[]): string {
  for (let i = 0; i < words.length; ++i) {
    if (isPalindrome(words[i])) return words[i];
  }

  return "";
}
