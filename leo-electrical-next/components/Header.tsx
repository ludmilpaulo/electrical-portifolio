
'use client';

import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  const phone = process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE;
  const tel = process.env.NEXT_PUBLIC_BUSINESS_PHONE;

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo_elec.jpeg" alt="LEO Electrical & Plumbing" width={48} height={32} className="rounded-md" />
          <span className="font-extrabold text-lg">LEO Electrical & Plumbing</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-slate-700 hover:text-slate-900">{l.label}</Link>
          ))}
          <a href={`tel:${tel}`} className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-xl shadow-soft">
            <PhoneCall className="w-4 h-4" /> {phone}
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className={clsx("w-6 h-1 bg-slate-900 mb-1 transition", open && "rotate-45 translate-y-1.5")}/>
          <div className={clsx("w-6 h-1 bg-slate-900 mb-1 transition", open && "opacity-0")}/>
          <div className={clsx("w-6 h-1 bg-slate-900 transition", open && "-rotate-45 -translate-y-1.5")}/>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container px-4 py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="text-slate-700" onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <a href={`tel:${tel}`} className="inline-flex items-center gap-2 bg-brand-600 text-white px-4 py-2 rounded-xl">
              <PhoneCall className="w-4 h-4" /> {phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
