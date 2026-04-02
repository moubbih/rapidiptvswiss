"use client"

import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NavLink { name: string; href: string; }

export default function AnimatedMenu({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useDimensions(containerRef)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <div className="md:hidden flex items-center">
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"} custom={height} ref={containerRef} style={nav} className={isOpen ? "pointer-events-auto" : "pointer-events-none"}>
        <motion.div style={background} variants={sidebarVariants} />
        <motion.ul style={list} variants={{ open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }, closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } } }}>
          {links.map((link) => (
            <motion.li key={link.name} style={listItem} variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href={link.href} onClick={() => setIsOpen(false)} className="flex items-center justify-between w-full py-3 text-white hover:text-[var(--color-brand-primary)] transition-colors group">
                <span className="text-lg font-medium">{link.name}</span>
                <ChevronRight className="w-5 h-5 text-neutral-400 group-hover:text-[var(--color-brand-primary)]" />
              </Link>
            </motion.li>
          ))}
          <motion.li variants={itemVariants} className="mt-8">
            <Link href="/plans" onClick={() => setIsOpen(false)} className="block w-full bg-[var(--color-brand-primary)] hover:bg-[var(--color-brand-secondary)] text-white px-6 py-4 rounded-lg font-bold text-center text-lg transition-colors">Get Started Now</Link>
            <p className="text-center text-neutral-400 text-xs mt-3">IPTV Switzerland from CHF 6.99/mo</p>
          </motion.li>
        </motion.ul>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
      </motion.nav>
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30" style={{ height: "100dvh" }} onClick={() => setIsOpen(false)} />}
    </div>
  )
}

const itemVariants = {
  open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } }, pointerEvents: "auto" as const },
  closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } }, pointerEvents: "none" as const },
}

const sidebarVariants: Variants = {
  open: (height = 1000) => ({ clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 40px)`, transition: { type: "spring", stiffness: 20, restDelta: 2 } }),
  closed: { clipPath: "circle(20px at calc(100% - 30px) 25px)", transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 } },
}

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <button style={toggleContainer} onClick={toggle} aria-label="Toggle menu">
    <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} />
      <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.1 }} />
      <motion.path fill="transparent" strokeWidth="3" stroke="hsl(0, 0%, 100%)" strokeLinecap="round" variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} />
    </svg>
  </button>
)

const nav: React.CSSProperties = { position: "fixed", top: 0, right: 0, height: "100dvh", width: 300, maxWidth: "100%", zIndex: 50 }
const background: React.CSSProperties = { backgroundColor: "#111118", position: "absolute", top: 0, right: 0, height: "100dvh", width: "100%", borderLeft: "1px solid rgba(255,255,255,0.05)" }
const toggleContainer: React.CSSProperties = { outline: "none", border: "none", WebkitUserSelect: "none", MozUserSelect: "none", cursor: "pointer", position: "absolute", top: 13, right: 18, width: 44, height: 44, borderRadius: "50%", background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "auto" }
const list: React.CSSProperties = { listStyle: "none", padding: 25, margin: 0, position: "absolute", top: 80, width: "100%", height: "calc(100dvh - 80px)", overflowY: "auto" }
const listItem: React.CSSProperties = { display: "flex", alignItems: "center", padding: 0, margin: 0, marginBottom: 8, cursor: "pointer" }

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const dimensions = useRef({ width: 0, height: 0 })
  useEffect(() => { if (ref.current) { dimensions.current.width = ref.current.offsetWidth; dimensions.current.height = ref.current.offsetHeight; } }, [ref])
  return dimensions.current
}
