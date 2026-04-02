import LegalLayout from "@/components/LegalLayout";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supported Devices | IPTV Compatible Devices Switzerland",
  description: "Rapid IPTV Swiss works on all major devices. Fire TV Stick, Smart TV, Android, iOS, Apple TV, Windows, Mac, MAG Box. Full device compatibility list.",
  alternates: { canonical: "/supported-devices" },
};

const DEVICES = [
  { emoji: "\ud83d\udd25", name: "Amazon Fire TV Sticks", desc: "The most popular device for IPTV in Switzerland.", items: ["Fire TV Stick Lite", "Fire TV Stick 4K", "Fire TV Stick 4K Max", "Fire TV Cube"], apps: "TiviMate, IPTV Smarters Pro, XCIPTV" },
  { emoji: "\ud83d\udcfa", name: "Android TV Boxes", desc: "Powerful set-top boxes for your living room.", items: ["Nvidia Shield TV", "Xiaomi Mi Box S", "Chromecast with Google TV", "Formuler Z-Series"], apps: "TiviMate, Smarters Pro, Implayer" },
  { emoji: "\ud83c\udf4e", name: "Apple TV", desc: "Premium experience on Apple's tvOS platform.", items: ["Apple TV 4K (all generations)", "Apple TV HD", "AirPlay from iPhone/iPad"], apps: "IPTV Smarters, GSE Smart IPTV, iPlayTV" },
  { emoji: "\ud83d\udda5\ufe0f", name: "Smart TVs", desc: "Install apps directly on Samsung or LG.", items: ["Samsung (Tizen 2017+)", "LG (WebOS 3.0+)", "Sony, TCL, Hisense (Android TV)"], apps: "IBO Player, NET IPTV, Smart IPTV" },
  { emoji: "\ud83d\udcf1", name: "Smartphones & Tablets", desc: "Watch IPTV on the go across Switzerland.", items: ["iPhone & iPad (iOS 14+)", "Android phones & tablets (7+)", "Huawei via APK sideload"], apps: "IPTV Smarters Pro, GSE Smart IPTV, VLC" },
  { emoji: "\ud83d\udcbb", name: "PCs & Laptops", desc: "Stream from your desktop or laptop.", items: ["Windows PC & Laptop", "macOS (MacBook, iMac)", "Linux (via VLC or Kodi)"], apps: "VLC Media Player, Kodi, IPTV Smarters" },
];

export default function DeviceCompatibility() {
  return (
    <LegalLayout title="Compatible Devices for IPTV Switzerland">
      <p>Rapid IPTV Swiss uses standard M3U and Xtream Codes API protocols, compatible with virtually any internet-connected device.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 mb-8 not-prose">
        {DEVICES.map((d) => (
          <div key={d.name} className="bg-[var(--color-background-surface)] p-6 rounded-2xl border border-white/5 hover:border-[var(--color-brand-primary)]/30 transition-colors">
            <div className="text-3xl mb-3">{d.emoji}</div>
            <h2 className="text-xl font-bold text-white mb-2">{d.name}</h2>
            <p className="text-neutral-400 text-sm mb-4">{d.desc}</p>
            <ul className="text-neutral-300 text-sm space-y-2">
              {d.items.map((item) => <li key={item}>&check; {item}</li>)}
            </ul>
            <div className="mt-4 pt-4 border-t border-white/10">
              <span className="text-[var(--color-brand-primary)] text-sm font-semibold">Recommended Apps:</span>
              <p className="text-neutral-400 text-sm mt-1">{d.apps}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Minimum Internet Requirements for Switzerland</h2>
      <ul>
        <li><strong>SD:</strong> 10 Mbps minimum</li>
        <li><strong>HD (1080p):</strong> 20 Mbps minimum</li>
        <li><strong>4K UHD:</strong> 40 Mbps (Ethernet recommended)</li>
      </ul>
      <p>Most Swiss broadband from Swisscom, Sunrise, or Salt exceeds these requirements easily.</p>
      <p>Ready to start? Visit our <Link href="/installation-guide" className="text-[var(--color-brand-primary)]">Setup Guide</Link> for step-by-step instructions.</p>
    </LegalLayout>
  );
}
