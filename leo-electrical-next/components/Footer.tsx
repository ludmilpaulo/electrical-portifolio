
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-2">LEO Electrical & Plumbing</h3>
          <p className="text-slate-300">Work Smart. No Excuse.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-slate-300">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-slate-300">Phone: 073 462 7545</p>
          <p className="text-slate-300">WhatsApp: 073 462 7545</p>
          <p className="text-slate-300">Service areas: South Africa</p>
        </div>
      </div>
      <div className="border-t border-slate-700 py-4 text-center text-slate-400">
        © {year} LEO Electrical & Plumbing. All rights reserved.
      </div>
    </footer>
  );
}
