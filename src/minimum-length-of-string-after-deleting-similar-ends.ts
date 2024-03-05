export function minimumLength(s: string): number {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s.charAt(l) !== s.charAt(r)) return r - (l + 1);

    while (l + 1 < r && s.charAt(l) === s.charAt(l + 1)) {
      l++;
    }

    while (r - 1 > l && s.charAt(r) === s.charAt(r - 1)) {
      r--;
    }

    r--;
    l++;
  }

  return r - l + 1;
}
