
'use client';

import { useGetTestimonialsQuery } from "@/redux/api";

export default function Testimonials() {
  const { data } = useGetTestimonialsQuery();
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">What Customers Say</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {(data ?? []).map((t) => (
          <blockquote key={t.id} className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100">
            <p className="text-slate-800 italic">“{t.quote}”</p>
            <footer className="mt-3 text-slate-600">— {t.author}, {t.rating}★</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
