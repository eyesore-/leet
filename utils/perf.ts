const mean = (n: number[]) => n.reduce((a, x) => a + x, 0) / n.length;

export function perf<F extends (...args: unknown[]) => unknown>(
  fn: F,
  f: number,
  ...args: Parameters<F>
) {
  const runs = [];
  for (let i = 0; i < f; ++i) {
    const s = Bun.nanoseconds();
    fn.call(null, ...args);
    runs.push(Bun.nanoseconds() - s);
  }

  return mean(runs);
}
