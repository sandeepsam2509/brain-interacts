/** Indian-style rupee amounts: ₹85,000 · ₹12.4 lakh · ₹3.2 crore. */
export function inr(amount: number): string {
  const n = Math.max(0, Math.round(amount));
  if (n >= 1e7) return `₹${(n / 1e7).toFixed(n >= 1e9 ? 0 : 1).replace(/\.0$/, "")} crore`;
  if (n >= 1e5) return `₹${(n / 1e5).toFixed(1).replace(/\.0$/, "")} lakh`;
  return `₹${n.toLocaleString("en-IN")}`;
}

export const num = (n: number) => Math.round(n).toLocaleString("en-IN");
