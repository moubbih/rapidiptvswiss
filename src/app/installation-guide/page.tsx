"use client";

import { useState } from "react";
import { Tv, Smartphone, AppWindow, Laptop, Box, MonitorPlay, HelpCircle, Download, Play } from "lucide-react";
import Link from "next/link";

const devices = [
  { id: "firestick", name: "Fire TV Stick", icon: Tv },
  { id: "android", name: "Android", icon: Smartphone },
  { id: "apple", name: "Apple / iOS", icon: AppWindow },
  { id: "smarttv", name: "Smart TV", icon: MonitorPlay },
  { id: "windows", name: "Windows / Mac", icon: Laptop },
  { id: "magbox", name: "MAG Box", icon: Box },
];

export default function SetupGuide() {
  const [activeTab, setActiveTab] = useState("firestick");

  return (
    <div className="min-h-screen bg-[var(--color-background-base)] text-neutral-300">
      <div className="pt-32 pb-16 px-4 border-b border-white/5 bg-gradient-to-b from-blue-950/20 to-transparent relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--color-brand-primary)]/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">IPTV <span className="text-[var(--color-brand-primary)]">Setup Guide</span> Switzerland</h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">Follow these step-by-step instructions to install and configure Rapid IPTV Swiss on your preferred device. Setup takes under 5 minutes.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-[var(--color-background-surface)] border border-white/10 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 mb-16">
          <div className="w-16 h-16 rounded-full bg-[var(--color-brand-primary)]/10 flex items-center justify-center shrink-0"><HelpCircle className="w-8 h-8 text-[var(--color-brand-primary)]" /></div>
          <div><h3 className="text-xl font-bold text-white mb-2">Need help?</h3><p className="text-neutral-400 mb-0">Contact our 24/7 support team via WhatsApp or email if you encounter any issues during setup.</p></div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Select your device</h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
            {devices.map((device) => {
              const Icon = device.icon;
              const isActive = activeTab === device.id;
              return (
                <button key={device.id} onClick={() => setActiveTab(device.id)} className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 border ${isActive ? "bg-[var(--color-brand-primary)]/10 border-[var(--color-brand-primary)] text-white" : "bg-[#060609] border-white/5 text-neutral-500 hover:bg-[var(--color-background-surface)] hover:text-neutral-300"}`}>
                  <Icon className={`w-8 h-8 mb-3 ${isActive ? "text-[var(--color-brand-primary)]" : "opacity-70"}`} />
                  <span className="text-sm font-semibold text-center">{device.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-[#060609] border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl">
          {activeTab === "firestick" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Tv className="text-[var(--color-brand-primary)]" />IPTV on Fire TV Stick Switzerland</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-primary)] mb-6 flex items-center gap-2"><Download className="w-5 h-5" />Method 1: IPTV Smarters Pro</h3>
                  <ol className="space-y-4 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                    <li className="pl-2">From the home screen, hover over the Find option and click Search.</li>
                    <li className="pl-2">Search for and select <strong>Downloader</strong>. Install it.</li>
                    <li className="pl-2">Go to Settings &rarr; My Fire TV &rarr; Developer Options &rarr; Install Unknown Apps. Turn on for Downloader.</li>
                    <li className="pl-2">Open Downloader and enter: <code className="bg-white/10 text-[var(--color-brand-primary)] px-2 py-1 rounded ml-1">https://www.iptvsmarters.com/smarters.apk</code></li>
                    <li className="pl-2">Install the downloaded APK, then open IPTV Smarters Pro.</li>
                    <li className="pl-2">Select &quot;Login with Xtream Codes API&quot;.</li>
                    <li className="pl-2 text-white font-medium">Enter the login details we sent you after purchase.</li>
                  </ol>
                </div>
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-brand-primary)] mb-6 flex items-center gap-2"><Play className="w-5 h-5" />Method 2: TiviMate</h3>
                  <ol className="space-y-4 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                    <li className="pl-2">In Downloader, enter: <code className="bg-white/10 text-[var(--color-brand-primary)] px-2 py-1 rounded ml-1">https://tivimates.com/tiviapk</code></li>
                    <li className="pl-2">Install TiviMate and open it.</li>
                    <li className="pl-2">Click &quot;Add Playlist&quot; then choose &quot;Xtream Codes&quot;.</li>
                    <li className="pl-2 text-white font-medium">Enter the login details we sent you after purchase.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}

          {activeTab === "android" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Smartphone className="text-[var(--color-brand-primary)]" />IPTV on Android Switzerland</h2>
              <ol className="space-y-4 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                <li className="pl-2">Download IPTV Smarters from: <code className="bg-white/10 text-[var(--color-brand-primary)] px-2 py-1 rounded">https://www.iptvsmarters.com/smarters.apk</code></li>
                <li className="pl-2">Open the app and select &quot;Login with Xtream Codes API&quot;.</li>
                <li className="pl-2">Enter the login credentials we provided after your purchase.</li>
                <li className="pl-2">Click &quot;ADD USER&quot; and wait a few seconds.</li>
                <li className="pl-2">Click &quot;Live TV&quot;, select a channel group, and start watching!</li>
              </ol>
            </div>
          )}

          {activeTab === "apple" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><AppWindow className="text-[var(--color-brand-primary)]" />IPTV on Apple / iOS Switzerland</h2>
              <ol className="space-y-4 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                <li className="pl-2">Download &quot;Smarters Player Lite&quot; from the App Store.</li>
                <li className="pl-2">Open the app and select &quot;Login with Xtream Codes API&quot;.</li>
                <li className="pl-2">Enter the login details provided after purchase.</li>
                <li className="pl-2">Click &quot;ADD USER&quot;, then navigate to Live TV.</li>
                <li className="pl-2">Select a channel and double-tap for full screen.</li>
              </ol>
            </div>
          )}

          {activeTab === "smarttv" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><MonitorPlay className="text-[var(--color-brand-primary)]" />IPTV on Smart TV Switzerland</h2>
              <ol className="space-y-6 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                <li className="pl-2">Download <strong>SetIPTV</strong>, <strong>NetIPTV</strong>, or <strong>Smart IPTV</strong> from your TV&apos;s app store (Samsung/LG).</li>
                <li className="pl-2">Open the app and note the MAC Address shown on screen.</li>
                <li className="pl-2">Send us the MAC address via WhatsApp or email.</li>
                <li className="pl-2">Restart your TV and open the app. Done!</li>
              </ol>
            </div>
          )}

          {activeTab === "windows" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Laptop className="text-[var(--color-brand-primary)]" />IPTV on Windows &amp; Mac</h2>
              <div className="space-y-6">
                <p className="text-neutral-400">Download IPTV Smarters for your operating system and log in with the credentials we provide after purchase.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-3">Windows</h3>
                    <p className="text-neutral-400 text-sm">Download from iptvsmarters.com and install. Log in with your Xtream Codes credentials.</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-3">macOS</h3>
                    <p className="text-neutral-400 text-sm">Download from iptvsmarters.com for Mac. Alternatively use VLC Media Player with your M3U link.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "magbox" && (
            <div className="animate-in">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3"><Box className="text-[var(--color-brand-primary)]" />IPTV on MAG Box</h2>
              <ol className="space-y-6 list-decimal list-inside text-neutral-300 marker:text-[var(--color-brand-primary)] marker:font-bold">
                <li className="pl-2">Send us the <strong>MAC Address</strong> of your MAG device (found on the bottom of the box) via WhatsApp or email.</li>
                <li className="pl-2">After purchase, we&apos;ll provision your MAC Address and send the Portal Link.</li>
                <li className="pl-2">Go to Settings &rarr; System Settings &rarr; Servers &rarr; Portals. Enter the portal URL we provide. Reboot!</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
