
import Link from "next/link";

export default function CTA() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 text-center">
        <h2 className="text-3xl font-bold">Ready to upgrade your electrics?</h2>
        <p className="text-slate-600 mt-2">Speak to a qualified installer today.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Link href="/contact" className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl font-semibold">Get a Free Quote</Link>
          <a href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`} className="ring-2 ring-brand-600 text-brand-700 px-5 py-3 rounded-xl font-semibold">Call {process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE}</a>
        </div>
      </div>
    </section>
  );
}
