export const PRICE_TABLE: Record<number, { "1"?: number; "3": number; "6": number; "12": number }> = {
  1: { "1": 12.99, "3": 31.99, "6": 44.99, "12": 72.98 },
  2: { "3": 42.99, "6": 60.99, "12": 99.99 },
  3: { "3": 55.99, "6": 85.99, "12": 149.99 },
  4: { "3": 84.99, "6": 109.99, "12": 179.99 },
  5: { "3": 92.99, "6": 129.99, "12": 198.99 },
};

export function getPrice(devices: number, months: "1" | "3" | "6" | "12"): number {
  return PRICE_TABLE[devices]?.[months] ?? 0;
}

export function getPlanTitle(months: "1" | "3" | "6" | "12", devices: number): string {
  const monthNames: Record<string, string> = {
    "1": "1 Month Quick Trial",
    "3": "3 Months Subscription",
    "6": "6 Months Subscription",
    "12": "12 Months (1 Year) Subscription",
  };
  const devStr = `${devices} Device${devices > 1 ? "s" : ""}`;
  return `${monthNames[months] || `${months} Months`} - ${devStr}`;
}
