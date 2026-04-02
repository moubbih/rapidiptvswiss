import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Swiss Channels List 2026 | SRF, RTS, RSI + 30,000 More",
  description: "Browse the full IPTV channel list for Switzerland 2026. Swiss channels SRF, RTS, RSI, Blue Sport plus German, French, Italian, and international channels. Senderliste IPTV Schweiz.",
  alternates: { canonical: "/live-channels" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
