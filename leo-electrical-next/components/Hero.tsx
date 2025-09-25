
'use client';

import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="gradient-hero text-white">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Safe, certified of electrical and plumbing engineering.
          </h1>
          <p className="mt-4 text-lg/relaxed text-white/90">
  Our 24/H services:
</p>
<ul className="mt-2 space-y-1 list-disc list-inside text-white/90 text-lg/relaxed">
  <li>Electrical</li>
  <li>Plumbing</li>
  <li>Solar</li>
  <li>Irrigation System</li>
</ul>



          <ul className="mt-6 space-y-2">
            {["Residential", "commercial", "industrial"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-5 py-3 rounded-xl font-semibold shadow-soft"
            >Get a Free Quote</Link>
            <a
              href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`}
              className="bg-slate-900/30 ring-2 ring-white px-5 py-3 rounded-xl font-semibold"
            >Call {process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE}</a>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/logo_elec.jpeg"
            alt="LEO Electrical & Plumbing Logo"
            width={520}
            height={320}
            className="rounded-2xl ring-4 ring-white/50"
          />
        </div>
      </div>
    </section>
  );
}
