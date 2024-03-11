export function customSortString(order: string, s: string): string {
  const ord = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    ord.set(order[i], i);
  }
  const chars = s.split("");
  chars.sort(
    (a, b) =>
      (ord.has(a) ? ord.get(a) ?? 0 : -1) - (ord.has(b) ? ord.get(b) ?? 0 : -1),
  );
  return chars.join("");
}
