// func expandAroundCenter(s string, left, right int) int {
// 	for left >= 0 && right < len(s) && s[left] == s[right] {
// 		left--
// 		right++
// 	}
// 	return right - left - 1
// }

// func longestPalindrome(s string) string {
// 	if len(s) == 0 {
// 		return ""
// 	}

// 	start, end := 0, 0
// 	for i := 0; i < len(s); i++ {
// 		len1 := expandAroundCenter(s, i, i)
// 		len2 := expandAroundCenter(s, i, i+1)
// 		maxLen := max(len1, len2)

// 		if maxLen > end-start {
// 			start = i - (maxLen-1)/2
// 			end = i + maxLen/2
// 		}
// 	}

// 	return s[start:end+1]
// }
function expand(s: string, l: number, r: number) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    --l;
    ++r;
  }

  return s.substring(l + 1, r);
}

export function longestPalindrome(s: string): string {
  let longest = "";

  for (let i = 0; i < s.length; ++i) {
    const o = expand(s, i, i);
    const e = expand(s, i, i + 1);

    if (o.length > longest.length) {
      longest = o;
    }

    if (e.length > longest.length) {
      longest = e;
    }
  }

  return longest;
}
