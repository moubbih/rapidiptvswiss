import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IPTV Setup Guide Switzerland | Install IPTV on Firestick, Smart TV, Android",
  description: "Step-by-step IPTV installation guide for Switzerland. Setup IPTV on Fire TV Stick, Samsung Smart TV, Android, Apple TV, Windows, MAG Box. IPTV Smarters Pro & TiviMate setup.",
  alternates: { canonical: "/installation-guide" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
